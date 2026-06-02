const mongoose = require("mongoose");

async function connectDB() {

    await mongoose.connect("mongodb+srv://api599650_db_user:v0wEl3jmPhXUaQyu@firstbackend.cbte06o.mongodb.net/halley")
    
}