const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(5507, () => {
    console.log("APP STARTED ON PORT 5507")
})