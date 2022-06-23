import React from 'react';
import alunos from '../../data/alunos.json';

const ListaAlunos = (props) => {
  // const li1 = <li>{ alunos[0].id } { alunos[0].nome } { alunos[0].nota } </li>

  const lista = alunos.map((aluno) => {
    return <li key={aluno.id}>{ aluno.id } { aluno.nome } { aluno.nota }</li>
  });

  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        { lista }
      </ul>
    </div>
  );
}

export default ListaAlunos;