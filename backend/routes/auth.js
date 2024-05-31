const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import the User model

// Create a user using POST "/api/auth/"
router.get('/', async (req, res) => {
    try {
        console.log(req.body);
        const user = new User(req.body); // Create a new User instance
        await user.save(); // Save the user to the database
        res.send('User saved successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
