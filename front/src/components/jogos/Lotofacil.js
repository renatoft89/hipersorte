import React, { useState } from 'react';
import Header from '../Header';
import '../../styles/Lotofacil.css';

const Lotofacil = () => {
  const [quantidadeNumeros, setQuantidadeNumeros] = useState(15);
  const [numerosGerados, setNumerosGerados] = useState([]);

  const gerarNumeros = () => {
    const numeros = [];

    while (numeros.length < quantidadeNumeros) {
      const numeroAleatorio = Math.floor(Math.random() * 25) + 1; // 1 a 25
      if (!numeros.includes(numeroAleatorio)) {
        numeros.push(numeroAleatorio);
      }
    }

    numeros.sort((a, b) => a - b); // Ordenar em ordem crescente
    setNumerosGerados(numeros);
  };

  return (
    <><Header />
    <div className="loto">
    <div className="lotofacil-container">
      <h2 className="lotofacil-header">Gerador da Lotofácil</h2>
      <label className="number-input">
        Selecione quantos números deseja gerar:
        <input
          type="number"
          min="15"
          max="20"
          value={quantidadeNumeros}
          onChange={(e) => setQuantidadeNumeros(parseInt(e.target.value))} />
      </label>
      <button className="generate-button-loto" onClick={gerarNumeros}>
        Gerar Números
      </button>
      <div className="generated-numbers">
        <h3>Números Gerados:</h3>
        <ul>
          {numerosGerados.map((numero, index) => (
            <li key={index} className="number-circle-loto">
              {numero}
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div></>
  );
};

export default Lotofacil;