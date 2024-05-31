const connecttoMongo = require('./db');

connecttoMongo(); // This will connect to MongoDB when this file is executed

const express = require('express')
const app = express()
const port = 3002
app.use(express.json())//middleware to parse json bodies
//Available routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})