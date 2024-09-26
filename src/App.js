import React, { useState } from 'react';
import './App.css';

const quotes = [
  { text: 'Si crees que puedes arrebatar vidas, entonces estas dispuesto a entregar la tuya.', author: 'Lancelot', color: '#FF6347' },
  { text: '¿Por qué sentiría odio hacia alguien que es mucho más débil que yo? Solo me produce lástima.', author: 'Escanor el Leon del Orgullo', color: '#1E90FF' },
  { text: 'No cuentes los días, haz que los días cuenten.', author: 'Muhammad Ali', color: '#32CD32' },
  { text: 'La paz no es una opción XD.', author: 'Mahatma Gandhi', color: '#FFD700' },
  { text: 'La imaginación es más importante que el conocimiento.', author: 'Albert Einstein', color: '#FF69B4' },
  { text: 'Cree que puedes y ya estarás a medio camino.', author: 'Theodore Roosevelt', color: '#8A2BE2' },
  { text: 'Quien no valora la vida de los suyos. No merece la propia.', author: 'Lancelot', color: '#FF4500' },
  { text: 'El mayor error que puedes cometer es tener miedo de cometer errores.', author: 'Elbert Hubbard', color: '#20B2AA' }
];

const App = () => {
  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="container" style={{ backgroundColor: quote.color, transition: 'background-color 0.5s ease' }}>
      <div id="quote-box">
        <p id="text">"{quote.text}"</p>
        <p id="author">- {quote.author}</p>
        <button id="new-quote" onClick={getRandomQuote}>
          Nueva Cita
        </button>
      </div>
    </div>
  );
};

export default App;
