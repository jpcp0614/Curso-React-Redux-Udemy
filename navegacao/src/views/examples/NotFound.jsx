import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = (props) => {
  return (
    <div className="NotFound">
      <h1>404 - Page Not Found</h1>
        <Link
          to="/"
          style={ { textDecoration: "none", fontSize: "20px" } }
        >
          Voltar para Home
        </Link>
    </div>
  );
}

export default NotFound;