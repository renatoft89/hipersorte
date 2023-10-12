const puppeteer = require('puppeteer');

const result = async () => {
  try {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.goto('https://loterias.caixa.gov.br/Paginas/default.aspx');

    const lotoResults = await page.evaluate(() => {
      const mega = Array.from(document.querySelectorAll('ul.resultado-loteria.mega-sena li')).map(li => li.innerText);
      console.log(mega);
      return {
        mega,
      };
    });

    await browser.close();
    console.log(lotoResults);
    return lotoResults;
  } catch (error) {
    console.error('Erro ao buscar os resultados da Mega-Sena:', error);
    return { error: 'Erro ao buscar os resultados da Mega-Sena' };
  }
};

module.exports = result;
