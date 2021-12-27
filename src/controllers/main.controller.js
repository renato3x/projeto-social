const path = require('path')
const WebScrappingService = require('../services/WebScrappingService')
const wss = new WebScrappingService()

module.exports = {
  async index(req, res) {
    const instaPosts = await wss.getInstagramPosts()
    return res.render(path.join(__dirname, '..', 'views', 'main', 'index.ejs'), { instaPosts })
  },
  escolas(req, res){
    return res.render(path.join(__dirname, '..', 'views', 'main', 'escolas.ejs'))
  },
  projetos(req, res){
    return res.render(path.join(__dirname,'..', 'views', 'main', 'projetos.ejs'))
  },
  sobre_nos(req, res){
    return res.render(path.join(__dirname,'..', 'views', 'main', 'sobre_nos.ejs'))
  }
}
