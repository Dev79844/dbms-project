const mysql = require('mysql')
require('dotenv').config()

const db = mysql.createConnection({
    host:'localhost',
    user:'dev',
    password:'dev1234',
    database: process.env.DB,
    port: 3306
})

module.exports = db

