const express = require('express')
const app = express()

const connectToDatabase = require('./database');

connectToDatabase();


app.get("/", (req, res) =>{
    res.json({
        "name" : "Manish Basnet",
        "age" : 22
    })
})

app.listen(3000, () =>{
    console.log("Node.js server has started at port 3000")
})