import React from 'react';

const Botoes = (props) => {
  const { incrementBotao, decrementBotao } = props;
  return (
    <div>
      <button onClick={ incrementBotao }>+</button>
      <button onClick={ decrementBotao }>-</button>
    </div>
  );
}

export default Botoes;