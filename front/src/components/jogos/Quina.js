import React, { useState } from 'react';
import Header from '../Header';
import '../../styles/Quina.css';

const Quina = () => {
  const [quantity, setQuantity] = useState(5);
  const [numbers, setNumbers] = useState([]);

  const generateNumbers = () => {
    const newNumbers = [];
    while (newNumbers.length < quantity) {
      const randomNum = Math.floor(Math.random() * 80) + 1; // Números de 1 a 80
      if (!newNumbers.includes(randomNum)) {
        newNumbers.push(randomNum);
      }
    }
    newNumbers.sort((a, b) => a - b);
    setNumbers(newNumbers);
  };

  return (
    <><Header />
    <div className="quina">
      <div className="quina-container">
      <h2>Quina</h2>
      <div className="number-input">
        <label>Quantidade de Números (5 a 15):</label>
        <input
          type="number"
          value={quantity}
          min={5}
          max={15}
          onChange={(e) => setQuantity(e.target.value)} />
      </div>
      <button className="generate-button" onClick={generateNumbers}>
        Gerar Números
      </button>
      <div className="generated-numbers">
        {numbers.map((num) => (
          <div key={num} className="number-circle-quina">
            {num}
          </div>
        ))}
      </div>
      </div>
    </div></>
  );
};

export default Quina;

