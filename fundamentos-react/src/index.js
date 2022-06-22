import ReactDom from 'react-dom';
import React from 'react';
import './index.css'; // import relativo
import Primeiro from './components/basics/Primeiro';

const el = document.getElementById('root');

ReactDom.render(
  <div>
    <Primeiro />
  </div>,
el);
