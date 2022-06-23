import React, { Component } from 'react';
import './Calculator.css';

import Button from '../components/Button';
import Display from '../components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

class Calculator extends Component {

  state = { ...initialState }

  clearMemory = () => {
    this.setState({ ...initialState });
  }

  setOperation = (operation) => {
    console.log(operation)
  }

  addDigit = (n) => {
    // usar o ponto somente uma vez
    if (n === '.' && this.state.displayValue.includes('.')) {
      return;
    }

    // limpar quando tiver 0 no display ou clearDisplay estiver true
    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;

    // se o display está limpo ou não
    const currentValue = clearDisplay ? '' : this.state.displayValue;

    // novo valor que será colocado no display
    const displayValue = currentValue + n;

    // digito o valor, a flag clearDisplay deve ser false
    this.setState({ displayValue, clearDisplay: false });
  }

  render () {

    const { clearMemory, setOperation, addDigit } = this;
    const { displayValue } = this.state;

    return (
      <div className="calculator">
        <Display value={ displayValue }/>
        <Button label="AC" click={ clearMemory } triple/>
        <Button label="/" click={ setOperation } operation/>
        <Button label="7" click={ addDigit }/>
        <Button label="8" click={ addDigit }/>
        <Button label="9" click={ addDigit }/>
        <Button label="*" click={ setOperation } operation/>
        <Button label="4" click={ addDigit }/>
        <Button label="5" click={ addDigit }/>
        <Button label="6" click={ addDigit }/>
        <Button label="-" click={ setOperation } operation/>
        <Button label="1" click={ addDigit }/>
        <Button label="2" click={ addDigit }/>
        <Button label="3" click={ addDigit }/>
        <Button label="+" click={ setOperation } operation/>
        <Button label="0" click={ addDigit } double/>
        <Button label="." click={ addDigit }/>
        <Button label="=" click={ setOperation } operation/>
      </div>
    );
  }
}

export default Calculator;