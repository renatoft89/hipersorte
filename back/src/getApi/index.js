const puppeteer = require('puppeteer');

const resultMega = async () => {
  try {
    const browser = await puppeteer.launch({
      executablePath: '/usr/bin/chromium-browser',
      headless: 'new',
      args: ["--no-sandbox"]
    });

    const page = await browser.newPage();
    await page.goto('https://loterias.caixa.gov.br/Paginas/default.aspx');

    const lotoResults = await page.evaluate(() => {
      const mega = Array.from(document.querySelectorAll('ul.resultado-loteria.mega-sena li')).map(li => li.innerText);
      const lotofacil = Array.from(document.querySelectorAll('ul.simple-container.lista-dezenas.lotofacil li.ng-binding.dezena.ng-scope')).map(li => li.innerText);
      const quina = Array.from(document.querySelectorAll('ul.simple-container.lista-dezenas.quina li.ng-binding.dezena.ng-scope')).map(li => li.innerText);
      
      return {
        mega,
        lotofacil,
        quina
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
