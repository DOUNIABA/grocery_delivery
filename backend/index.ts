import express from 'express'
const app = express()
require('./config/db')
const cors = require('cors')

app.use(cors()) 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/public',express.static('public'))

app.listen(8080);

module.exports= app
