/*

  <if test={expressão}>
    <span>conteúdo</span>
  </if>

*/

const If = (props) => {
  if (props.user) return props.children;

  return false;
}

export default If;