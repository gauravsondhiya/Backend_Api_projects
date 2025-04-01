// const express = require("express");
// const app = express();
// app.listen(3000);

// app.get("/", (req, res) => {
//   res.send("done");
// });


const jwt = require("jsonwebtoken")


const value = {
    name:"gaurav",
    number:1234
}

const token = jwt.sign(value,"9425")

console.log(token)