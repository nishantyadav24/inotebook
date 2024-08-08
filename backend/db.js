const mongoose = require('mongoose');

const mongooseURI = 'mongodb://localhost:27017/inotebook'; // Replace with your actual MongoDB URI

const connectToMongo = () => {
    mongoose.connect(mongooseURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Connected to MongoDB successfully');
        })
        .catch((err) => {
            console.error('Error connecting to MongoDB:', err);
        });
};

module.exports = connectToMongo;
