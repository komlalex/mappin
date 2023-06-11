import express from "express";
import "colors";
import  connectDB from "./config/db.js";
import errorHandler from "./middlewares/errorMiddleware.js";
import dotenv from "dotenv";

//Configure environment variables
dotenv.config()

// Initialize application
const app = express();

//Connect database
connectDB()

//Enable json
app.use(express.json());

//Handle Errors
app.use(errorHandler);

const port = process.env.PORT || 2023;
app.listen(port, () => {
    console.log(`Server started on port ${port}`.cyan.underline)
})