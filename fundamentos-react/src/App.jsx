import React from 'react';
import Card from './components/layout/Card';
import ComParametro from './components/basics/ComParametro';
import Primeiro from './components/basics/Primeiro';
import RandomNumber from './components/basics/Aleatorio';
import Familia from './components/basics/Familia';
import FamiliaMembro from './components/basics/FamiliaMembro';
import ListaAlunos from'./components/repetition/ListaAlunos';
import TabelaProdutos from'./components/repetition/TabelaProdutos';
import './App.css';
import ParOuImpar from './components/conditional/ParOuImpar';
import UserInfo from './components/conditional/UsuarioInfo';
import DiretaPai from './components/communication/DiretaPai';
import IndiretaPai from './components/communication/IndiretaPai';
import Forms from './components/forms/Input';

const App = (props) => (
	<div className="App">
		<h1>Fundamentos React</h1>
		<div className="Cards">

			<Card titulo="#10 - Componente Controlado" color="#152633">
				<Forms />
			</Card>

			<Card titulo="#09 - Comunicação Indireta" color="#355C7D">
				<IndiretaPai />
			</Card>

			<Card titulo="#08 - Comunicação Direta" color="#6C5B7B">
				<DiretaPai />
			</Card>

			<Card titulo="#07 - Renderização Condicional" color="#C06C84">
				<ParOuImpar numero={ 8 }/>
				<UserInfo />
				{/* <UserInfo usuario={{ email: 'fernando@email.com' }}/> */}
				{/* <UserInfo usuario={{}}/> */}
			</Card>

			<Card titulo="#06 - Tabela de Produtos" color="#F67280">
				<TabelaProdutos />
			</Card>

			<Card titulo="#05 - Lista de Alunos" color="#152633">
				<ListaAlunos />
			</Card>

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

			<Card titulo="#02 - Primeiro" color="#C06C84">
				<Primeiro />
			</Card>

			<Card titulo="#01 - Com Parâmetro" color="#F67280">
				<ComParametro titulo='Situação do aluno' aluno='João' nota={7.9} />
			</Card>
		</div>
	</div>
);

export default App;
