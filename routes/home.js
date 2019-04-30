const express = require('express')
const router = express.Router()
const Record = require('../models/record')
const { authenticated } = require('../config/auth')

router.get('/', authenticated, (req, res) => {
  Record.find((err, records) => {
    if (err) return console.log(err)

    let totalAmount = 0
    for (record of records) {
      totalAmount += record.amount
    }
    res.render('index', { records: records, totalAmount })
  })
})

module.exports = router