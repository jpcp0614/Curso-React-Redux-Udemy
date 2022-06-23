import React, { Component } from 'react';
import './Contador.css';

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

  setPasso = (event) => {
    const { value } = event.target;
    this.setState({ passo: +value })
  }
  

  render() {
    const { numero, passo } = this.state;
    const { increment, decrement, setPasso } = this;
    return (
      <div className="Counter">
        <h2>Contador</h2>
        <p>Valor inicial: { numero }</p>
        <div>
          <label htmlFor="PassoInput" style={{ fontSize: "20px" }}>Passo: </label>
            <input
              id="PassoInput"
              type="number"
              onChange={ setPasso }
              value={ passo }
            />
        </div>
        <button onClick={ increment }>+</button>
        <button onClick={ decrement }>-</button>
      </div>
    )
  }
}

export default Contador;