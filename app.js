const express = require('express');
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
app.use(express.json({limit:"20kb"}));
app.use(express.urlencoded({extended: true, limit:"20kb"}));
app.use(cors());
app.use(express.static("public"))
app.use(cookieParser());


module.exports = app();