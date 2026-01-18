require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const {DB_NAME} = require('./constants');
const connectDB = require('./db/index');

const app = express();

connectDB();