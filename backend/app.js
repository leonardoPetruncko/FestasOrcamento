const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

app.use(express.json())

// DB

const conn = require("./db/connect.js")
conn()

app.listen(3000, function(){
    console.log("servidor Online!!");
})