const ig = require('instagram-scraping')
const axios = require('axios').default
const fs = require('fs')
const path = require('path')

module.exports = class WebScrappingService {
  async getInstagramPosts() {
    const { medias } = await ig.scrapeUserPage('seducarcarnaubal')

    return medias.map(({ node: post }, index) => {
      if (index > 2) {
        return
      }

      const filename = `insta_highlight_${index}.jpg`

      axios({
        url: post.display_url,
        responseType: 'stream'
      }).then(({ data: response }) => {
        response
        .pipe(fs.createWriteStream(path.join(__dirname, '..', 'public', 'highlights', 'insta', filename)))
      })

      return { imgSrc: `/highlights/insta/${filename}`, postLink: `https://instagram.com/p/${post.shortcode}` }
    }).filter(x => x != undefined)
  }
}
