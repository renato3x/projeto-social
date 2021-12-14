const puppeteer = require('puppeteer')

module.exports = class WebScrappingService {
  async getInstagramPosts() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('https://www.instagram.com/accounts/login/', { waitUntil: 'networkidle0' })

    await Promise.all([
      page.waitForSelector('[name="username"]'),
      page.waitForSelector('[name="password"]'),
      page.waitForSelector('.sqdOP.L3NKy.y3zKF'),
    ])

    await page.type('[name="username"]', 'coedu.inforg4@gmail.com')
    await page.type('[name="password"]', 'coeduinforG4')

    await Promise.all([
      page.click('.sqdOP.L3NKy.y3zKF'),
      page.waitForNavigation({ waitUntil: 'networkidle0' })
    ])

    await page.goto('https://www.instagram.com/seducarcarnaubal/', { waitUntil: 'networkidle0' })

    const posts = await page.evaluate(() => {
      const line = document.querySelector('.Nnq7C.weEfm')

      return Array.from(line.children).map(element => {
        let img = element.firstChild.firstChild.firstChild.firstChild
        return { title: img.alt, src: img.srcset }
      })
    })

    await page.close()
    await browser.close()

    return posts
  }
}
