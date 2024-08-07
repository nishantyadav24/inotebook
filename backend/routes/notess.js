const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import the User model
const { query, validationResult } = require('express-validator');


// Create a user using POST "/api/auth/"
 router.get('/', (req,res)=>{
    obj = {
        a: "this",
        number:34
    }
    res.json(obj)
 })

module.exports = router;
