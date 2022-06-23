const numeroAleatorio = (numMin, numMax, array) => {

  const numAleat = Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
  
  if (array.includes(numAleat)) {
    return numeroAleatorio(numMax, numMin, array);
  }
  return numAleat;
}

const arrayNumeros = (min, max, qtd) => {
  const numeros = Array(qtd)
    .fill(0)
    .reduce((nums) => {
      const novoNumero = numeroAleatorio(min, max, nums);
      return [...nums, novoNumero];
    }, [])
    .sort((a, b) => a - b);
  
  return numeros;
}

export default arrayNumeros;