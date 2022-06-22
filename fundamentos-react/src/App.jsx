import React from 'react';
import Primeiro from './components/basics/Primeiro';
import ComParametro from './components/basics/ComParametro';
import RandomNumber from './components/basics/Aleatorio';

const App = () => (
	<>
		<h1>Fundamentos React</h1>
		<Primeiro />
		<ComParametro titulo='Situação do aluno' aluno='João' nota={7.9} />
    <RandomNumber min={ 1 } max={ 20 } />
	</>
);

export default App;
