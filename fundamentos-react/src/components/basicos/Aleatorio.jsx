import React from 'react';

export default function Aleatorio(props) {
  const { min, max } = props;
  const num = Math.floor(Math.random() * max) - min;
  return (
    <div>
      <h2>Valor Aleatório</h2>
      <p><strong>Valor mínimo:</strong> {min}</p>
      <p><strong>Valor máximo:</strong> {max}</p>
      <p><strong>Valor Escolhido:</strong> {num}</p>
    </div>

  );
}
