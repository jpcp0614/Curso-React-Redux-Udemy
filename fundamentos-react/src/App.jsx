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
import Contador from './components/counter/Contador';
import MegaSena from './components/mega/Mega';

const App = (props) => (
	<div className="App">
		<h1>Fundamentos React</h1>
		<div className="Cards">

			<Card titulo="#12 - Desafio" color="#0567A8">
				<MegaSena />
			</Card>

			<Card titulo="#11 - Contador" color="#A8E6CE">
				<Contador numeroInicial={ 10 }/>
			</Card>

			<Card titulo="#10 - Componente Controlado" color="#2A363B">
				<Forms />
			</Card>

			<Card titulo="#09 - Comunicação Indireta" color="#E84A5F">
				<IndiretaPai />
			</Card>

			<Card titulo="#08 - Comunicação Direta" color="#FF847C">
				<DiretaPai />
			</Card>

			<Card titulo="#07 - Renderização Condicional" color="#FECEAB">
				<ParOuImpar numero={ 8 }/>
				<UserInfo />
				{/* <UserInfo usuario={{ email: 'fernando@email.com' }}/> */}
				{/* <UserInfo usuario={{}}/> */}
			</Card>

			<Card titulo="#06 - Tabela de Produtos" color="#99B898">
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
