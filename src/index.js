const path = require('path')

//iniciando express
const express = require('express')
const app = express()

//static
app.use(express.static(path.join(__dirname, 'public'))) 
/* 
  informa pro node uma pasta onde os arquivos estáticos (js, css, imagem, audio)
  serão guardados
*/

//rotas
const mainRoutes = require('./routes/main.routes')

// body parsing
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//uso das rotas
app.use(mainRoutes)

//abertura do servidor
app.listen(3000, () => {
  console.log('Servidor executando')
})
