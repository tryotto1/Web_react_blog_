// for basic connection
const express = require("express");
const app = express();
const dotenv = require("dotenv");

// DB
const mongoose = require("mongoose");

// for Routing
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const { json } = require("express/lib/response");

// env start 
dotenv.config();

// DB start 
mongoose
    .connect(process.env.MONGO_URL)
    .then(console.log("connected to Mongoose"))
    .catch((err)=>console.log("err really?"));



// app or route
app.use(express.json());

app.listen("5000", ()=>{
    console.log("Backend is running");
})

app.use("/api/auth", authRoute);

app.use("/api/users", userRoute);

app.use("/", (req, res)=>{
    console.log("hey this is main url");
})


