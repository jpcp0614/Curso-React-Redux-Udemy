import React from 'react';

const ParOuImpar = (props) => {

  const isPar = props.numero % 2 === 0 ? 'Par' : 'Impar';

  return (
    <div>
      <span>{ isPar }</span>
    </div>
  );
}

export default ParOuImpar;