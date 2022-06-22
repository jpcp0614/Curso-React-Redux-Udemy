import React from 'react';
import Primeiro from './components/basics/Primeiro';
import ComParametro from './components/basics/ComParametro';
import RandomNumber from './components/basics/Aleatorio';
import Card from './components/layout/Card';

const App = () => (
	<>
		<h1>Fundamentos React</h1>

		<Card titulo="Desafio Aleatório">
			<RandomNumber min={ 1 } max={ 20 } />
		</Card>

		<Card titulo="Primeiro">
			<Primeiro />
		</Card>

		<Card titulo="Com Parâmetro">
			<ComParametro titulo='Situação do aluno' aluno='João' nota={7.9} />
		</Card>
		
		
    
	</>
);

export default App;
