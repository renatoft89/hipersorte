const puppeteer = require('puppeteer');

const resultMega = async () => {
  try {
    const browser = await puppeteer.launch({
      executablePath: '/usr/bin/chromium-browser',
      headless: false,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.goto('https://loterias.caixa.gov.br/Paginas/default.aspx', { waitUntil: 'networkidle2' });

    await page.waitForSelector('ul.resultado-loteria.mega-sena li');
    await page.waitForSelector('ul.simple-container.lista-dezenas.lotofacil li.ng-binding.dezena.ng-scope');
    await page.waitForSelector('ul.simple-container.lista-dezenas.quina li.ng-binding.dezena.ng-scope');

    const lotoResults = await page.evaluate(() => {
      const getNumbers = (selector) => Array.from(document.querySelectorAll(selector)).map(li => li.innerText);

      return {
        mega: getNumbers('ul.resultado-loteria.mega-sena li'),
        lotofacil: getNumbers('ul.simple-container.lista-dezenas.lotofacil li.ng-binding.dezena.ng-scope'),
        quina: getNumbers('ul.simple-container.lista-dezenas.quina li.ng-binding.dezena.ng-scope'),
      };
    });

    await browser.close();
    return lotoResults;
  } catch (error) {
    console.error('Erro ao buscar os resultados da Mega-Sena:', error);
    return { error: 'Erro ao buscar os resultados da Mega-Sena' };
  }
};

module.exports = resultMega;