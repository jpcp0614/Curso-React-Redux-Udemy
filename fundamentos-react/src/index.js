import ReactDom from 'react-dom';
import React from 'react';

const el = document.getElementById('root');

const tag = <strong>Hello World!!!</strong>

ReactDom.render(
  <div>
    { tag }
  </div>,
el);

//ReactDom.render('Olá React!!!', document.getElementById('root'));