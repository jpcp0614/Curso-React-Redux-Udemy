import React from 'react';

const IndiretaFilho =(props) => {
  
  const { quandoClicar } = props;
  const idadeMin = 20;
  const idadeMax = 50;

  const gerarIdade = () => Math.floor(Math.random() * (idadeMax - idadeMin + 1) + idadeMin);
  const gerarIsNerd = () => Math.random() > 0.5;

  return (
    <div>
      <div>Filho</div>
      <button
        onClick={ () => quandoClicar('João', gerarIdade(), gerarIsNerd) }
      >
        Fornecer informações
      </button>
    </div>
  );
}

export default IndiretaFilho;