const path = require('path')
const WebScrappingService = require('../services/WebScrappingService')
const wss = new WebScrappingService()

module.exports = {
  async index(req, res) {
    await wss.getInstagramPosts()

    return res.render(path.join(__dirname, '..', 'views', 'main', 'index.ejs'))
  }
}
