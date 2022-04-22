import mongoose from "mongoose";
// const mongoose = require("mongoose");

mongoose.connect("주소입력");

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to MongoDB");
const handleError = (error) => console.log("DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);
