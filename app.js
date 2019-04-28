const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

//setting handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//setting css
app.use(express.static('public'))


//setting routers
app.use('/', require('./routes/home'))

app.listen(3000, () => {
  console.log('Express is running on http://localhost:3000')
})
