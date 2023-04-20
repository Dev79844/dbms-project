const express = require('express')
const app = require('./app')
const db = require('./config/db')
require('dotenv').config()

db.connect(function(err){
    if(err){
        console.error(err);
        return;
    }
    console.log('DB connected');
})

app.listen(process.env.PORT, () => {
    console.log(`Server started on ${process.env.PORT}`);
})