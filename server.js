const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require('method-override')
const connectDB = require("./config/database")
const mainRoutes = require('./routes/main')
const postRoutes = require('./routes/posts')


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

// use forms for put and delete
app.use(methodOverride("_method"))

//routes the server is checking for
app.use('/', mainRoutes);
app.use('/post', postRoutes)

app.listen(process.env.PORT, () => {
    console.log("we running the server ")
})




