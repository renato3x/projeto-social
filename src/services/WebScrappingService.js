const ig = require('instagram-scraping')

module.exports = class WebScrappingService {
  async getInstagramPosts() {
    const pageData = await ig.scrapeUserPage('seducarcarnaubal')

    return pageData.medias.map(({ node }, index) => {
      if (index > 2) {
        return
      }

      const postLink = `https://instagram.com/p/${node.shortcode}`

      return { imgSrc: node.thumbnail_src, postLink }
    }).filter(x => x != undefined)
  }
}
