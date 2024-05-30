const connecttoMongo = require('./db');

connecttoMongo(); // This will connect to MongoDB when this file is executed

const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello Nishant!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})