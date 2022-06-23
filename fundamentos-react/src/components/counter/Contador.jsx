import React, { Component } from 'react';
import Botoes from './Botoes';
import './Contador.css';

import Display from './Display';
import PassoForm from './PassoForm';

class Contador extends Component {
  constructor(props) {
    super(props);

    const { numeroInicial, passoInicial } = this.props;

    this.state = {
      numero: numeroInicial || 0,
      passo: passoInicial || 5
    }
  }

  increment = () => {
    const { numero, passo } = this.state;
    this.setState({
      numero: numero + passo
    })
  }

  decrement = () => {
    const { numero, passo } = this.state;
    this.setState({
      numero: numero - passo
    })
  }

  setPasso = (novoPasso) => {
    // const { value } = event.target;
    this.setState({ passo: +novoPasso })
  }
  

  render() {
    const { numero, passo } = this.state;
    const { increment, decrement, setPasso } = this;
    return (
      <div className="Counter">
        <h2>Contador</h2>
        <Display numeroDisplay={ numero }/>
        <PassoForm passoForm={ passo } setPassoForm={ setPasso }/>
        <Botoes incrementBotao={ increment } decrementBotao={ decrement }/>
      </div>
    )
  }
}

export default Contador;