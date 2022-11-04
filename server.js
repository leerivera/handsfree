const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/database")
const mainRoutes = require('./routes/main')


//use .env in con
require("dotenv").config({path: "./config/.env"});


//connect DB
connectDB();

//ejs views
app.set("view engine", "ejs");

//static folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes the server is checking for
app.use('/', mainRoutes);

app.listen(process.env.PORT, () => {
    console.log("we running the server ")
})




