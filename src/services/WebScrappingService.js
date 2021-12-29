const ig = require('instagram-scraping')
const axios = require('axios').default
const fs = require('fs')
const path = require('path')
const fsExtra = require('fs-extra')

module.exports = class WebScrappingService {
  async getInstagramPosts() {
    fsExtra.emptyDir(path.join(__dirname, '..', 'public', 'highlights', 'insta'))
    let data = undefined

    try {
      const { medias } = await ig.scrapeUserPage('seducarcarnaubal')

      data = medias.map(({ node: post }, index) => {
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
    } catch(error) {
      data = [
        {
          imgSrc: '/img/setembro_amarelo.jpg',
          postLink: 'https://www.instagram.com/p/CTqaEkgr4h3/'
        },
        {
          imgSrc: '/img/outubro_rosa.jpg',
          postLink: 'https://www.instagram.com/p/CU6J1YJrge7/'
        },
        {
          imgSrc: '/img/novembro_azul.jpg',
          postLink: 'https://www.instagram.com/p/CVxeO60rqSQ/'
        }
      ]
    } finally {
      fs.writeFileSync(path.join(__dirname, '..', 'public', 'highlights', 'insta', '.gitkeep', ''), '', {
        encoding: 'utf-8'
      })
    }

    return data
  }
}
