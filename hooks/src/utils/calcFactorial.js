export default function calcFactorial(n) {
  if (n < 0) return -1;
  if (+n === 0 ) return 1;

  return calcFactorial(n - 1) * n;
}