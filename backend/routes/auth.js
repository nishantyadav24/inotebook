const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import the User model
const { query, validationResult } = require('express-validator');
const mongoose = require('mongoose');
// const { Schema } = mongoose;
const app = express()
app.use(express.json())

// Create a user using POST "/api/auth/" doesnt require auth
 router.post('/', (req,res)=>{
    res.send("hello")
    console.log(req.body)
    const user = User(req.body)
    user.save()
    res.send(req.body)
 })

module.exports = router;
