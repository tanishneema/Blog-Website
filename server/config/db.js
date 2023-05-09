// Updated a little bit code
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/BlogApp").then(() => {
    console.log("connected!");
}).catch((err) => {
    console.log(err);
})