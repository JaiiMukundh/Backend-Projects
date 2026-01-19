require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const {DB_NAME} = require('./constants');
const connectDB = require('./db/index');

const app = express();

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server listening on port ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGODB connection error: ", err);
})
