const express = require('express')
const router = express.Router()
const Record = require('../models/record')
const { authenticated } = require('../config/auth')

router.get('/month/:month', authenticated, (req, res) => {
  const month = req.params.month
  Record.find({ userId: req.user._id }, (err, records) => {
    if (err) return console.log(err)
    const monthFilter = records.filter(record => {
      return month === record.date.substring(5, 7)
    })

    let totalAmount = 0
    for (record of monthFilter) {
      totalAmount += record.amount
    }
    res.render('index', { records: monthFilter, month, totalAmount })
  })
})

router.get('/category/:category', authenticated, (req, res) => {
  let category = req.params.category

  if (category === 'fas fa-home') {
    category = '家居物業'
  } else if (category === 'fas fa-shuttle-van') {
    category = '交通出行'
  } else if (category === 'fas fa-grin-beam') {
    category = '休閒娛樂'
  } else if (category === 'fas fa-utensils') {
    category = '餐飲食品'
  } else if (category === 'fas fa-pen') {
    category = '其他'
  }

  Record.find({ category: req.params.category, userId: req.user._id }, (err, records) => {
    if (err) return console.log(err)

    let totalAmount = 0
    for (record of records) {
      totalAmount += record.amount
    }
    res.render('index', { records: records, totalAmount, category })
  })
})


module.exports = router