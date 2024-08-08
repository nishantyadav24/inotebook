const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const User = require('../models/User'); // Import the User model

var jwt = require('jsonwebtoken');

const JWT_SECRET = 'someonecalledmejimmy$nisham'
// Create a user using POST "/api/auth/createuser" - doesn't require auth
router.post('/createuser', [
   body('name').isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
   body('email').isEmail().withMessage('Enter a valid email address'),
   body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
], async (req, res) => {
   // If there are errors, return a bad request
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
      
      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(password, salt);
      
      // Create a new user
      user = new User({
         name,
         email,
         password: secPass
      });
      
      const data ={
         user:{
            id:user.id
         }
      }
      const authToken = jwt.sign(data,JWT_SECRET);
      //  console.log(authToken)
      await user.save();
      //  res.json(user);
      res.json(authToken)
      
   } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occurred");
   }
});
// Create a user using POST "/api/auth/login" - doesn't require auth
router.post('/login', [
   body('email').isEmail().withMessage('Enter a valid email address'),
  
 ],async (req,res)=>{
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
   }
 }

)
module.exports = router;
