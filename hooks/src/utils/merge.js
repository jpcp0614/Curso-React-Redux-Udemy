export default function merge (s1, s2) {
  return [...s1].map((elem, index) => `${elem}${s2[index] || ''}`).join('');
}