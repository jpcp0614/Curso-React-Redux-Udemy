/*

  <if test={expressão}>
    <span>conteúdo</span>
  </if>

*/

const If = (props) => {

  const elseChild = props.children.filter(child => {
    return child.type && child.type.name === 'Else'
  })[0]

  const ifChildren = props.children.filter(child => {
    return child !== elseChild
  })

  if (props.user) return ifChildren;
  
  if (elseChild) return elseChild;
  
    return false;
}

const Else = (props) => props.children;

export { If, Else };