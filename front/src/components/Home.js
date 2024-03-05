import React from 'react';
import Header from '../components/Header'; // Importe o Header
import '../styles/Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <Header /> {/* Insira o Header aqui */}
      <h2>Bem-vindo ao Hipersorte!</h2>
      {/* ... (resto do código) */}
    </div>
  );
};

export default Home;
