import React from 'react';
import DiretaFilho from './DiretaFilho';

const DiretaPai =(props) => {
  return (
    <div>
      <DiretaFilho nome="Junior" idade={ 20 } isNerd={ true }/>
      <DiretaFilho nome="Gabriel" idade={ 18 } isNerd={ false }/>
    </div>
  );
}

export default DiretaPai;