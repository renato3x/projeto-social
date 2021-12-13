const puppeteer = require('puppeteer')
const path = require('path')

module.exports = class WebScrappingService {
  async getInstagramPosts() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('https://www.instagram.com/seducarcarnaubal/')
    await page.screenshot({ path: path.join(__dirname, '..', 'public', 'img', 'print.png') })
  }
}
