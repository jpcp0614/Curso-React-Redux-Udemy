import React from 'react';
import IndiretaFilho from './IndiretaFilho';

const IndiretaPai =(props) => {
  let nome = '?';
  let idade = 0;
  let isNerd = false;

  const fornecerInfos = (nomeParam, idadeParam, isNerdParam) => {
    nome = nomeParam;
    idade = idadeParam;
    isNerd = isNerdParam;

    console.log(nomeParam, idadeParam, isNerdParam);
  }

  return (
    <div>
      <div>Pai</div>
      <span>{ nome } </span>
      <span><strong>{ idade } </strong></span>
      <span>{ isNerd ? 'Verdadeiro' : 'Falso' }</span>
      <IndiretaFilho quandoClicar={ fornecerInfos }/>
    </div>
  );
}

export default IndiretaPai;