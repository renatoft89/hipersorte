const puppeteer = require('puppeteer');

// Função para pegar os resultados da Mega-Sena
const getResultsMega = async () => {
  let browser;
  try {
    browser = await puppeteer.launch({
      executablePath: '/usr/bin/chromium-browser',
      headless: false,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
<<<<<<< HEAD
    await page.goto('https://loterias.caixa.gov.br/Paginas/default.aspx', { waitUntil: 'networkidle2' });

    await page.waitForSelector('ul.resultado-loteria.mega-sena li');
    await page.waitForSelector('ul.simple-container.lista-dezenas.lotofacil li.ng-binding.dezena.ng-scope');
    await page.waitForSelector('ul.simple-container.lista-dezenas.quina li.ng-binding.dezena.ng-scope');
=======
    console.log('Navegando para a página dos resultados...');
    await page.goto('https://loterias.caixa.gov.br/Paginas/default.aspx');
>>>>>>> 1192c47 (feat: add getMega getLoto)

    console.log('Aguardando o carregamento dos elementos...');
    await page.waitForSelector('div.product', { timeout: 10000 });

    const lotoResults = await page.evaluate(() => {
<<<<<<< HEAD
      const getNumbers = (selector) => Array.from(document.querySelectorAll(selector)).map(li => li.innerText);

      return {
        mega: getNumbers('ul.resultado-loteria.mega-sena li'),
        lotofacil: getNumbers('ul.simple-container.lista-dezenas.lotofacil li.ng-binding.dezena.ng-scope'),
        quina: getNumbers('ul.simple-container.lista-dezenas.quina li.ng-binding.dezena.ng-scope'),
=======
      const results = {};

      // Função para capturar os números de um jogo
      const getNumbers = (selector) => {
        const elements = document.querySelectorAll(selector);
        return Array.from(elements).map(el => el.innerText.trim());
>>>>>>> 1192c47 (feat: add getMega getLoto)
      };

      // Função para capturar o número do concurso
      const getConcurso = (selector) => {
        const element = document.querySelector(selector);
        if (element) {
          const texto = element.innerText.trim();
          const match = texto.match(/Concurso\s(\d+)/i);
          return match && match[1] ? match[1] : 'Desconhecido';
        }
        return 'Desconhecido';
      };

      // Função para capturar o valor estimado
      const getValorEstimado = (selector) => {
        const element = document.querySelector(selector);
        return element ? element.innerText.trim() : 'Desconhecido';
      };

      // Mega-Sena
      results.megaSena = {
        numeros: getNumbers('ul.resultado-loteria.mega-sena li.ng-binding'),
        concurso: getConcurso('div.product.no-title p.description.ng-binding'),
        valorEstimado: getValorEstimado('h3.valor-estimado.valor-estimado-megasena.ng-binding'),
      };

      return results.megaSena; // Retorna apenas os resultados da Mega-Sena
    });

    console.log('Resultados capturados:', lotoResults);
    await browser.close();
    console.log('Navegador fechado.');
    return lotoResults;
  } catch (error) {
    console.error('Erro ao buscar os resultados da Mega-Sena:', error);
    if (browser) {
      console.log('Fechando o navegador devido ao erro...');
      await browser.close();
    }
    return { error: 'Erro ao buscar os resultados da Mega-Sena' };
  }
};

<<<<<<< HEAD
module.exports = resultMega;
=======
// Função para pegar os resultados da Lotofacil
const getResultsLotofacil = async () => {
  let browser;
  try {
    browser = await puppeteer.launch({
      executablePath: '/usr/bin/chromium-browser',
      headless: false,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    console.log('Navegando para a página dos resultados...');
    await page.goto('https://loterias.caixa.gov.br/Paginas/default.aspx');

    console.log('Aguardando o carregamento dos elementos...');
    await page.waitForSelector('div.product', { timeout: 10000 });

    const lotoResults = await page.evaluate(() => {
      const results = {};

      // Função para capturar os números de um jogo
      const getNumbers = (selector) => {
        const elements = document.querySelectorAll(selector);
        return Array.from(elements).map(el => el.innerText.trim());
      };

      // Função para capturar o número do concurso
      const getConcurso = (selector) => {
        const element = document.querySelectorAll(selector)[1];
        if (element) {
          const texto = element.innerText.trim();
          
          const match = texto.match(/Concurso\s(\d+)/i);
          return match && match[1] ? match[1] : 'Desconhecido';
        }
        return 'Desconhecido';
      };

      // Função para capturar o valor estimado
      const getValorEstimado = (selector) => {
        const element = document.querySelector(selector);
        return element ? element.innerText.trim() : 'Desconhecido';
      };

      // Lotofacil
      results.lotofacil = {
        numeros: getNumbers('ul.simple-container.lista-dezenas.lotofacil li.ng-binding.dezena.ng-scope'),
        concurso: getConcurso('div.product.no-title p.description.ng-binding'),
        valorEstimado: getValorEstimado('h3.valor-estimado.valor-estimado-lotofacil.ng-binding'),
      };

      return results.lotofacil; // Retorna apenas os resultados da Lotofacil
    });

    console.log('Resultados capturados:', lotoResults);
    await browser.close();
    console.log('Navegador fechado.');
    return lotoResults;
  } catch (error) {
    console.error('Erro ao buscar os resultados da Lotofacil:', error);
    if (browser) {
      console.log('Fechando o navegador devido ao erro...');
      await browser.close();
    }
    return { error: 'Erro ao buscar os resultados da Lotofacil' };
  }
};

// Função principal que escolhe qual loteria chamar com base no parâmetro
const getResultsLoteria = async (lotteryType) => {
  if (lotteryType === 'mega') {
    return await getResultsMega();
  } else if (lotteryType === 'lotofacil') {
    return await getResultsLotofacil();
  } else {
    return { error: 'Tipo de loteria inválido. Use "mega" ou "lotofacil".' };
  }
};

module.exports = { getResultsLoteria };
>>>>>>> 1192c47 (feat: add getMega getLoto)
