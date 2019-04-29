const mongoose = require('mongoose')
const Record = require('../record')
const recordList = require('../../record.json').results

//setting mongodb
mongoose.set('debug', true)
mongoose.connect('mongodb://localhost/record', { useNewUrlParser: true, useCreateIndex: true })

const db = mongoose.connection

//連線異常
db.on('error', () => {
  console.log('mongodb error')
})

//連線成功
db.once('open', () => {
  console.log('mongodb connected!')

  for (let i = 0; i < recordList.length; i++) {
    Record.create({ ...recordList[i] })
  }

  console.log('done')
})



