import React, { useState, useRef, useEffect } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';
import merge from '../../utils/merge';

const UseRef = (props) => {

	//* EXERCÍCIO 05
	const [value1, setValue1] = useState('');
	const [value2,setValue2] = useState('');
	//* quando o ref é alterado, o componente não precisa, obrigatoriamente, ser renderizado novamente
	const count = useRef(0); //* retorna um objeto mutável (sempre a mesma referência)

	const myInput1 = useRef(null);
	const myInput2 = useRef(null);

	useEffect(() => {
		count.current++;
		myInput2.current.focus();
	}, [value1]);

	useEffect(() => {
		count.current++;
		myInput1.current.focus();
	}, [value2]);

	return (
		<div className='UseRef'>
			<PageTitle
				title='Hook UseRef'
				subtitle='Retorna um objeto mutável com a propriedade .current!'
			/>

			<SectionTitle title="Exercício #05" />

			<div className="center">
				<div>
					<span className="text">Valor: </span>
					<span className="text">{ merge(value1, value2) } [</span>
					<span className="text red">{ count.current }</span>
					<span className="text">]</span>
				</div>
				<input
					ref={ myInput1 }
					type="text"
					className="input"
					value={ value1 }
					onChange={ (e) => setValue1(e.target.value) }
				/>
			</div>

			<SectionTitle title="Exercício #06" />

			<div className="center">
				<input
					ref={ myInput2 }
					type="text"
					className="input"
					value={ value2 }
					onChange={ (e) => setValue2(e.target.value) }
				/>
			</div>

		</div>
	);
};

export default UseRef;
