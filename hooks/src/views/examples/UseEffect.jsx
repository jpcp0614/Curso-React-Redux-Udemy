import React, { useState, useEffect } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';
import calcFactorial from '../../utils/calcFactorial';

const UseEffect = (props) => {

	//* EXERCÍCIO 01
	const [number, setNumber] = useState(1);
	const [factorial, setFactorial] = useState(1);

	//* Sempre que entro no componente e altero um estado diretamente, ele renderizará novamente
	//* Por isso, gero um efeito colateral também no valor do fatorial
	//* Para resolver isso, usamos o useEffect
	useEffect(() => {
		setFactorial(calcFactorial(number));
	}, [number]);
	//*TODO ↑ dependência para que o valor seja chamado (quando o valor for alterado, a função será chamada)

	useEffect(() => {
		if (factorial > 100000000) document.title = 'Eita';
		return () => document.title = 'React Hooks';
	}, [factorial]);


	//* EXERCÍCIO 02
	const [status, setStatus] = useState('Impar');

	useEffect(() => {
		if (number < 0) {
			setStatus('Negativo');
		} else {
			setStatus(number % 2 === 0 ? 'Par' : 'Impar');
		}
	}, [number]);

	return (
		<div className='UseEffect'>
			<PageTitle
				title='Hook UseEffect'
				subtitle='Permite executar efeitos colaterais em componentes funcionais!'
			/>

			<SectionTitle title="Exercício #03"/>

			<div>
				<span className="text">Fatorial: </span>
				<span className="text red">{ factorial === -1 ? 'Error' : factorial }</span>
			</div>

			<input
				type="number"
				className="input"
				value={ number }
				onChange={ (e) => setNumber(e.target.value) }
			/>

			<SectionTitle title="Exercício #04"/>

			<div>
				<span className="text">Status: </span>
				<span className="text red">{ status }</span>
			</div>

		</div>
	);
};

export default UseEffect;
