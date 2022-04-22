import mongoose from "mongoose";
// const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://jonghun:0209@cluster0.wev7c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to MongoDB");
const handleError = (error) => console.log("DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);
