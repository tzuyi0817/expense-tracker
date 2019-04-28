const express = require('express')
const app = express()


//setting routers
app.use('/', require('./routes/home'))

app.listen(3000, () => {
  console.log('Express is running on http://localhost:3000')
})
