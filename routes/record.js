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
  Record.findById(req.params.id, (err, record) => {
    if (err) return console.log(err)

    let optionASelected = false
    let optionBSelected = false
    let optionCSelected = false
    let optionDSelected = false
    let optionESelected = false
    if (record.category === 'fas fa-home') {
      optionASelected = true
    } else if (record.category === 'fas fa-shuttle-van') {
      optionBSelected = true
    } else if (record.category === 'fas fa-grin-beam') {
      optionCSelected = true
    } else if (record.category === 'fas fa-utensils') {
      optionDSelected = true
    } else if (record.category === 'fas fa-pen') {
      optionESelected = true
    }
    res.render('edit', { record, optionASelected, optionBSelected, optionCSelected, optionDSelected, optionESelected })
  })
})


//編輯資料
router.post('/:id', (req, res) => {
  Record.findById(req.params.id, (err, record) => {
    if (err) return console.log(err)
    Object.assign(record, req.body)

    record.save(err => {
      if (err) return console.log(err)
      res.redirect(`/`)
    })
  })
})

//刪除資料
router.post('/:id/delete', (req, res) => {
  Record.findById(req.params.id, (err, record) => {
    if (err) return console.log(err)
    record.remove(err => {
      if (err) return console.log(err)
      res.redirect('/')
    })
  })
})

module.exports = router