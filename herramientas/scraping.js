/* Utilizando puppeteer */
const puppeteer = require('puppeteer');

(async () => {
    console.log('Lanzamos Navegador!');
    const browser = puppeteer.launch({ headless: false });
    const page = (await browser).newPage();
    (await page).goto('https://es.wikipedia.org/wiki/Web_scraping');
    var title1 = (await page).evaluate(() => {
        let h1 = document.querySelector('h1');
        return h1.innerHTML;
    });
    console.log(title1);
})();
