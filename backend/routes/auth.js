const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const User = require('../models/User'); // Import the User model
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'someonecalledmejimmy$nisham';

// Route 1: Create a user using POST "/api/auth/createuser" - doesn't require auth
router.post('/createuser', [
   // Validate user input
   body('name').isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
   body('email').isEmail().withMessage('Enter a valid email address'),
   body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
], async (req, res) => {
   // If there are errors in the validation, return a bad request
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
   }
   
   try {
      const { name, email, password } = req.body;
      
      // Check whether a user with the same email exists already
      let user = await User.findOne({ email });
      if (user) {
         return res.status(400).json({ error: "Sorry, a user with this email already exists" });
      }
      
      // Hash the user's password before storing it in the database
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(password, salt);
      
      // Create a new user object and save it in the database
      user = new User({
         name,
         email,
         password: secPass
      });
      
      // Create a payload for JWT that includes the user ID
      const data = {
         user: {
            id: user.id
         }
      };

      // Generate an authentication token using JWT
      const authToken = jwt.sign(data, JWT_SECRET);

      // Save the user to the database and respond with the auth token
      await user.save();
      res.json({ authToken });
      
   } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occurred");
   }
});

// Route 2: User login using POST "/api/auth/login" - doesn't require auth
router.post('/login', [
   // Validate user input
   body('email', 'Enter a valid email').isEmail(),
   body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
   // If there are errors in the validation, return a bad request
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
   }

   const { email, password } = req.body;

   try {
      // Check if the user with the provided email exists
      let user = await User.findOne({ email });
      if (!user) {
         return res.status(400).json({ error: "Please try to login with correct credentials" });
      }

      // Compare the provided password with the stored hashed password
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
         return res.status(400).json({ error: "Please try to login with correct credentials" });
      }

      // Create a payload for JWT that includes the user ID
      const payload = {
         user: {
            id: user.id
         }
      };

      // Generate an authentication token using JWT
      const authToken = jwt.sign(payload, JWT_SECRET);
      res.json({ authToken });

   } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server error");
   }
});

// Route 3: Get logged-in user details using POST "/api/auth/getUser" - requires authentication
router.post('/getUser', fetchuser, async (req, res) => {
   try {
      // Use the user ID from the token to retrieve user details
      const userId = req.user.id;
      const user = await User.findById(userId).select("-password"); // Exclude password from the user details
      res.json(user);
      res.send(user)
   } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server error");
   }
});

module.exports = router;
