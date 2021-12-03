const { Router } = require('express')
const router = Router()
const mainController = require('../controllers/main.controller')

router.get('/', mainController.index)

module.exports = router
