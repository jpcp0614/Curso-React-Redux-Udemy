import React from 'react';
import If from './If';

const UserInfo = (props) => {

  const { usuario } = props || {};

  return (
    <div>
      <If user={ usuario && usuario.nome }>
        Seja bem-vindo <strong>{ usuario.nome }</strong>!
      </If>
      <If user={ !usuario || !usuario.nome }>
        Seja bem-vindo <strong>Amigão</strong>!
      </If>
    </div>
  );
}


export default UserInfo;