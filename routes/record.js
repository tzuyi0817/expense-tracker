const express = require('express')
const router = express.Router()
const moment = require('moment')
const Record = require('../models/record')


//新增一筆支出頁面
router.get('/new', (req, res) => {
  const today = moment().format('YYYY-MM-DD')
  res.render('new', { today })
})

//新增一筆支出
router.post('/new', (req, res) => {
  const record = Record(req.body)

  record.save(err => {
    if (err) return console.log(err)
    res.redirect('/')
  })

})

//編輯頁面
router.get('/:id/edit', (req, res) => {
  res.render('edit')
})

//編輯資料
router.post('/:id', (req, res) => {

})

//刪除資料
router.post('/:id/delete', (req, res) => {

})

module.exports = router