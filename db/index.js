const mongoose = require("mongoose")
require("dotenv").config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("SUccessfully connected to MongoDB")
    } catch (error) {
        console.error("Connection error", error.message)
    }
}

connect()

module.exports = mongoose.connection