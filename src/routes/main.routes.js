const { Router } = require('express')
const router = Router()
const mainController = require('../controllers/main.controller')

router.get('/', mainController.index)
router.get('/escolas', mainController.escolas)
router.get('/projetos', mainController.projetos)
router.get('/sobre_nos', mainController.sobre_nos)

module.exports = router
