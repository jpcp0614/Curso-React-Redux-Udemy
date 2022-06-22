import React from 'react';
import './Card.css';

const Card = (props) => {

  const { titulo, color } = props;
  const cardStyle = {
    backgroundColor: color || '#355C7D',
    borderColor: color || '#355C7D'
  };

  return (
    <div className="Card" style={ cardStyle }>
      <div className="Title">{ titulo }</div>
      <div className="Content">
        { props.children }
      </div>
    </div>
  );
}

export default Card;