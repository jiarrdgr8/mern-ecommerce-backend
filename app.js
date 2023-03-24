import express from 'express';
import dotenv from 'dotenv';
import ErrorHandler from './utils/ErrorHandler.js';
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'


const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));


//config
if(process.env.NODE_ENV !== 'PRODUCTION'){
    dotenv.config({
        path:'backend/config/.env'
    })
}

// error handling
app.use(ErrorHandler)

export default app;
