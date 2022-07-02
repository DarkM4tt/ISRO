const express = require('express')
const planetsRouter = require('./src/routes/planets/planets.router')
const cors = require('cors')

const PORT = process.env.PORT || 5000

const app = express()

app.use(
  cors({
    origin: PORT, //|| 'http://localhost:3000',
  })
)
app.use(express.json())
app.use(planetsRouter)

module.exports = app
