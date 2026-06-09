const mongoose = require('mongoose');

async function connectDB() {
    await mongoose.connect('mongodb+srv://api599650_db_user:firstbackend@firstbackend.cbte06o.mongodb.net/Project-Postapp') 
    
    console.log("Connected to DB")
}

module.exports = connectDB;