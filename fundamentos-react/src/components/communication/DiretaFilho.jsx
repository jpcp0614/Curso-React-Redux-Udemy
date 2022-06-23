import React from 'react';

const DiretaFilho =(props) => {
  const { nome, idade, isNerd } = props;
  return (
    <div>
      <span>{ nome }, </span>
      <span><strong>{ idade }</strong> anos, </span>
      <span>{ isNerd ? 'Verdadeiro' : 'Falso'}</span>
    </div>
  );
}

export default DiretaFilho;