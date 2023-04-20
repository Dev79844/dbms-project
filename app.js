const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('tiny'))

const blog = require('./routes/blogRoutes')
const author = require('./routes/authorRoutes')
const comment = require('./routes/commentRoutes')
const user = require('./routes/userRoutes')

app.use("/api/v1",blog)
app.use("/api/v1/author",author)
app.use("/api/v1",comment)
app.use("/api/v1/user",user)

module.exports = app