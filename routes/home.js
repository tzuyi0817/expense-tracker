const express = require('express')
const router = express.Router()
const Record = require('../models/record')

router.get('/', (req, res) => {
  Record.find((err, records) => {
    const category = req.query.category
    if (category === '餐飲食品') {
      category = 'fas fa-utensils'
    }
    if (category === '交通出行') {
      category = 'fas fa-shuttle-van'
    }
    if (category === '休閒娛樂') {
      category = 'fas fa-grin-beam'
    }
    if (category === '家居物業') {
      category = 'fas fa-home'
    }
    if (category === '其他') {
      category = 'fas fa-pen'
    }
    res.render('index', { records })
  })
})

module.exports = router