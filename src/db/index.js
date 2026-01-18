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

        app.listen(process.env.PORT, (req,res) => {
            console.log(`App listening on port ${process.env.PORT}...`);
        })
    } catch (error) {
        console.error("Error: ", error)
        throw err
    }
}

module.exports = connectDB;