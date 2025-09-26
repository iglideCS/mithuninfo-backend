const mongoose = require("mongoose")

const URI = process.env.MONGODB_URI;

const connectDatabase = async(req, res) =>{
    try {
        await mongoose.connect(URI)
        console.log("Connection Successful!");
        
    } catch (error) {
        console.error("Connection Failed")
        process.exit(0)
    }
}

module.exports = connectDatabase;