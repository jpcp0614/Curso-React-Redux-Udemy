import React from 'react';
import Primeiro from './components/basics/Primeiro';
import ComParametro from './components/basics/ComParametro';
import RandomNumber from './components/basics/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basics/Familia';
import FamiliaMembro from './components/basics/FamiliaMembro';
import './App.css';

const App = (props) => (
	<div className="App">
		<h1>Fundamentos React</h1>
		<div className="Cards">
			<Card titulo="#04 - Componente com Filhos" color="#355C7D">
				<Familia sobrenome="Ferreira" >
					<FamiliaMembro nome="Pedro" />
      		<FamiliaMembro nome="Ana" />
      		<FamiliaMembro nome="Gustavo" />
				</Familia>
			</Card>

			<Card titulo="#03 - Desafio Aleatório" color="#6C5B7B">
				<RandomNumber min={ 1 } max={ 20 } />
			</Card>

			<Card titulo="#02 - Primeiro" color="#C06C84 ">
				<Primeiro />
			</Card>

			<Card titulo="#01 - Com Parâmetro" color="#F67280">
				<ComParametro titulo='Situação do aluno' aluno='João' nota={7.9} />
			</Card>
		</div>
	</div>
);

export default App;
