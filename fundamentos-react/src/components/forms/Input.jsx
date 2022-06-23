import React, { useState } from 'react';
import './Input.css';

const Forms = (props) => {

  const [valor, setValor] = useState('Inicial');

  const quandoMudar = (event) => {
    const { value } = event.target;
    setValor(value);
  }

  return (
    <div className="Input">
      <input value={ valor } onChange={ quandoMudar } />
      <input value={ valor } readOnly />
      <input value={ undefined } />
    </div>
  );
}

export default Forms;