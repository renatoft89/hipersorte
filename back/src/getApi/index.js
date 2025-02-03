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
    await page.goto('https://loterias.caixa.gov.br/Paginas/Lotofacil.aspx');

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
      const getConcurso = () => {
        const element = document.querySelector('span.ng-binding');
        if (element) {
          const texto = element.innerText.trim();
          const match = texto.match(/Concurso\s(\d+)/i);
          return match && match[1] ? match[1] : 'Desconhecido';
        }
        return 'Desconhecido';
      };

      // Função para capturar o valor estimado do próximo prêmio
      const getValorEstimado = () => {
        const element = document.querySelector('div.next-prize p.value.ng-binding');
        return element ? element.innerText.trim() : 'Desconhecido';
      };

      // Lotofacil
      results.lotofacil = {
        numeros: getNumbers('ul.simple-container.lista-dezenas.lotofacil li.ng-binding.dezena.ng-scope'),
        concurso: getConcurso(),
        valorEstimado: getValorEstimado(),
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
