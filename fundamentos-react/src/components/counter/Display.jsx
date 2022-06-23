import React from 'react';

const Display = (props) => {
  const { numeroDisplay } = props;
  return (
    <div>
      <p>Valor inicial: { numeroDisplay }</p>
    </div>
  );
}

export default Display;