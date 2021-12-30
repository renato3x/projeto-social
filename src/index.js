const path = require('path')
const favicon = require('serve-favicon')

//iniciando express
const express = require('express')
const app = express()

//static
app.use(express.static(path.join(__dirname, 'public'))) 
/* 
  informa pro node uma pasta onde os arquivos estáticos (js, css, imagem, audio)
  serão guardados
*/

app.use(favicon(path.join(__dirname, 'favicon.ico')))

//rotas
const mainRoutes = require('./routes/main.routes')

// body parsing
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//uso das rotas
app.use(mainRoutes)

//abertura do servidor
app.listen(3000, () => {
  console.log('Servidor executando http://localhost:3000/')
})
