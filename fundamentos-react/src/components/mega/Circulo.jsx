import React from 'react';
import './Circulo.css';

const Circulo = (props) => {
  const { nums } = props;
  return (
    <div className="Circulo">
      { 
        nums.map(num => <span className="Content" key={ num }>{ num }</span>)
      }
    </div>
  );
}

export default Circulo;