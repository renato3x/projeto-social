const path = require('path')

module.exports = {
  index(req, res) {
    return res.render(path.join(__dirname, '..', 'views', 'main', 'index.ejs'))
  }
}
