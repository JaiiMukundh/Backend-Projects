const express = require('express');
const mongoose = require('mongoose');

const {DB_NAME} = require('../constants');

const app = express();

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);

        console.log(`\n MongoDB connected, DB HOST ${connectionInstance.connection.host}`);
        
        app.on("error", (error) => {
            console.log("ERRR: ", error);
            throw error;
        })

    } catch (error) {
        console.error("Error: ", error)
        throw err
    }
}

module.exports = connectDB;