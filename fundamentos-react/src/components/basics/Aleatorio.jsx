import React from 'react';

const RandomNumber = (props) => {
	const { max, min } = props;
	return (
		<>
			<h2>Valor Aleatório</h2>
			<div>
        { Math.floor(Math.random() * (max - min + 1) + min) }
      </div>
		</>
	);
};

export default RandomNumber;
