import React, { useState } from 'react';
import ArrayNumeros from './ArrayNumeros';
import Circulo from './Circulo';
import './Mega.css';

const MegaSena = (props) => {

  const [qtde, setQtde] = useState(props.qtde || 6);
  const numerosIniciais = Array(qtde);
  const [numeros, setNumeros] = useState(numerosIniciais);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(60);

  return (
    <div className="Mega">
      <h3>Mega Sena</h3>
      <Circulo nums={ numeros } />
      <div>
        <label htmlFor="NumMin">Número mín: </label>
        <input id="NumMin" type="number" value={ min } onChange={ (e) => setMin(+e.target.value) }/>
      </div>
      <div>
        <label htmlFor="NumMax">Número máx: </label>
        <input id="NumMax" type="number" value={ max } onChange={ (e) => setMax(+e.target.value) }/>
      </div>
      <div>
        <label htmlFor="QtdNum">Quantidade de números: </label>
        <input id="QtdNum" type="number" value={ qtde } onChange={ (e) => setQtde(+e.target.value) }/>
      </div>
      <button onClick={() => setNumeros(ArrayNumeros(min, max, qtde))}>Gerar Números</button>
    </div>
  );
}

export default MegaSena;