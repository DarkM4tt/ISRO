const express = require('express')
const planetsRouter = require('./src/routes/planets/planets.router')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
)
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public'))) //for serving static files on server.

app.use(planetsRouter)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = app
