const express = require('express')
const router = express.Router()


//新增一筆支出頁面
router.get('/new', (req, res) => {
  res.render('new')
})

//新增一筆支出
router.post('/', (req, res) => {

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