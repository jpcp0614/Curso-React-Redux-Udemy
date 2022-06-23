import React from 'react';
import produtos from '../../data/produtos.json';
import './TabelaProdutos.css';

const TabelaProdutos = (props) => {

  const getProducts = () => {
    return produtos.map((produto, index) => {
      return (
        <tr key={ produto.id } className={ index % 2 === 0 ? 'Par' : 'Impar'}>
          <td>{ produto.id }</td>
          <td>{ produto.nome }</td>
          <td>R$ { produto.preco.toFixed(2).replace('.', ',') }</td>
        </tr>
      )
    });
  };

  return (
    <div className="TabelaProdutos">
      <table >
        <thead>
          <tr>
            <th>Id</th>
            <th>Produto</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          { getProducts() }
        </tbody>
      </table>
    </div>
  );
};

export default TabelaProdutos;