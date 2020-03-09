const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const controllers = require('./controllers')

const app = express()
app.use(morgan('short'))

// server
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(controllers)

app.listen(process.env.PORT || 3000, () => {})
