const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const mysql = require("mysql2");
const connection = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"saimanideep18@0607",
    database:"practice_assignment",

});

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("database is connected to mysql server")
})

app.get('/',(req,res)=>{
    res.send('This is the home page!');
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})