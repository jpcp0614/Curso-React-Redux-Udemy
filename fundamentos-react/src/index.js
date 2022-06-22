import ReactDom from 'react-dom';
import React from 'react';
import './index.css'; // import relativo
import Primeiro from './components/basics/Primeiro';
import ComParametro from './components/basics/ComParametro';


const el = document.getElementById('root');

ReactDom.render(
  <>
    <Primeiro />
    <ComParametro
      titulo="Situação do aluno"
      aluno="João"
      nota={ 7.9 }
    />
  </>,
el);
