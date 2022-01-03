const { Router } = require('express')
const router = Router()
const mainController = require('../controllers/main.controller')

router.get('/', mainController.index)
router.get('/escolas', mainController.escolas)
router.get('/projetos-e-programas', mainController.projetosEProgramas)

module.exports = router
