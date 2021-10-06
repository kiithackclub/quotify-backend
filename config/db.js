const mongoose = require('mongoose');
const loggerService = require('../services/logger.service');
const MONGO_URL = process.env.MONGO_URL;
console
module.exports = async function() {
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true    
    }).then(() => {
        console.log("Connected to MongoDB database 🚀")
        loggerService.info("Connected to MongoDB database 🚀");
    })
};