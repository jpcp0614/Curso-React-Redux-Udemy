import React, { useState } from 'react';
import IndiretaFilho from './IndiretaFilho';

const IndiretaPai =(props) => {
  const [nome, setNome] = useState('?');
  const [idade, setIdade] = useState(0);
  const [isNerd, setIsNerd] = useState(false);

  const fornecerInfos = (nome, idade, isNerd) => {
    setNome(nome);
    setIdade(idade);
    setIsNerd(isNerd);
  }

  return (
    <div>
      <span>{ nome } </span>
      <span><strong>{ idade } </strong></span>
      <span>{ isNerd ? 'Verdadeiro' : 'Falso' }</span>
      <IndiretaFilho quandoClicar={ fornecerInfos }/>
    </div>
  );
}

export default IndiretaPai;