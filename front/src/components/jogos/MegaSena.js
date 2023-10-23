import React, { useState } from 'react';
import Header from '../Header';
import '../../styles/Megasena.css';

const MegaSena = () => {
  const [quantidadeNumeros, setQuantidadeNumeros] = useState(6);
  const [numerosGerados, setNumerosGerados] = useState([]);

  const gerarNumeros = () => {
    const numeros = [];

    while (numeros.length < quantidadeNumeros) {
      const numeroAleatorio = Math.floor(Math.random() * 60) + 1; // 1 a 60
      if (!numeros.includes(numeroAleatorio)) {
        numeros.push(numeroAleatorio);
      }
    }

    numeros.sort((a, b) => a - b); // Ordenar em ordem crescente
    setNumerosGerados(numeros);
  };

  return (
    <><Header />
    <div className="mega">
    <div className="mega-sena-container">
      <h2 className="mega-sena-header">Gerador da Mega Sena</h2>
      <label className="number-input">
        Selecione quantos números deseja gerar:
        <input
          type="number"
          min="6"
          max="15"
          value={quantidadeNumeros}
          onChange={(e) => setQuantidadeNumeros(parseInt(e.target.value))} />
      </label>
      <button className="generate-button-mega" onClick={gerarNumeros}>
        Gerar Números
      </button>
      <div className="generated-numbers">
        <h3>Números Gerados:</h3>
        <ul>
          {numerosGerados.map((numero, index) => (
            <li key={index} className="number-circle-mega">
              {numero}
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div></>
  );
};

export default MegaSena;