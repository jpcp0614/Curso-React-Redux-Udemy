import React from 'react';

const IndiretaFilho =(props) => {
  const { quandoClicar } = props;
  return (
    <div>
      <div>Filho</div>
      <button
        onClick={ () => quandoClicar('João', 53, true) }
      >
        Fornecer informações
      </button>
    </div>
  );
}

export default IndiretaFilho;