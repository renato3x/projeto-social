const { Router } = require('express')
const router = Router()
const mainController = require('../controllers/main.controller')

router.get('/', mainController.index)
router.get('/escolas', mainController.escolas)

module.exports = router
