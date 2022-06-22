import React, { cloneElement } from 'react';
// import FamiliaMembro from './FamiliaMembro';


// const Familia = (props) => {
//   const { sobrenome } = props;
//   return (
//     <div>
      // <FamiliaMembro nome="Pedro" sobrenome={ sobrenome } />
      // <FamiliaMembro nome="Ana" {...props} />
      // <FamiliaMembro nome="Gustavo" sobrenome="Silva" />
//     </div>
//   );
// }

const Familia = (props) => {
  return (
    <div>
      {/* { cloneElement(props.children, props) } */}
      {/* { props.children } */}
      {/* {
        React.Children.map(props.children, (child) => {
          return cloneElement(child, props)
        })
      } */}

      {
        props.children.map((child, index) => {
          return cloneElement(child, { ...props, key: index })
        })
      }
    </div>
  );
}

export default Familia;

