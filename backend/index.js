const connecttoMongo = require('./db');

connecttoMongo(); // This will connect to MongoDB when this file is executed

const express = require('express')
const app = express()
const port = 3002
app.use(express.json())//middlenware to parse json bodies
// Available routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notess',require('./routes/notess'))
// app.get('/', (re q, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
