import React from 'react';
import Primeiro from './components/basics/Primeiro';
import ComParametro from './components/basics/ComParametro';
import RandomNumber from './components/basics/Aleatorio';
import Card from './components/layout/Card';
import './App.css';

const App = () => (
	<div className="App">
		<h1>Fundamentos React</h1>
		<div className="Cards">
			<Card titulo="Desafio Aleatório" color="#355C7D">
				<RandomNumber min={ 1 } max={ 20 } />
			</Card>

			<Card titulo="Primeiro" color="#6C5B7B">
				<Primeiro />
			</Card>

			<Card titulo="Com Parâmetro" color="#C06C84">
				<ComParametro titulo='Situação do aluno' aluno='João' nota={7.9} />
			</Card>
		</div>
	</div>
);

export default App;
