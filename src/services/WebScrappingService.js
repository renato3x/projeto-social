const ig = require('instagram-scraping')
const axios = require('axios').default
const fs = require('fs')
const path = require('path')
const fsExtra = require('fs-extra')

module.exports = class WebScrappingService {
  async getInstagramPosts() {
    fsExtra.emptyDir(path.join(__dirname, '..', 'public', 'highlights', 'insta'))
    
    const { medias } = await ig.scrapeUserPage('seducarcarnaubal')

    const data = medias.map(({ node: post }, index) => {
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

    fs.writeFileSync(path.join(__dirname, '..', 'public', 'highlights', 'insta', '.gitkeep', ''), '', {
      encoding: 'utf-8'
    })

    return data
  }
}
