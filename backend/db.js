const mongoose = require('mongoose');
const mongooseURI = "mongodb://localhost:27017/";

const connectToMongo = () => {
    mongoose.connect(mongooseURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to MongoDB successfully");
    })
    .catch((err) => {
        console.error("Failed to connect to MongoDB", err);
    });
};

module.exports = connectToMongo;
