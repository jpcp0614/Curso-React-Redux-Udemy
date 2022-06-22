import React from 'react';
import Primeiro from './components/basics/Primeiro';
import ComParametro from './components/basics/ComParametro';

const App = () => (
	<>
		<h1>Fundamentos React</h1>
		<Primeiro />
		<ComParametro titulo='Situação do aluno' aluno='João' nota={7.9} />
	</>
);

export default App;
