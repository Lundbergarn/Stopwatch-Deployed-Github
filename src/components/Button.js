import React from 'react';

const Button = ({ title, click }) => {
  return ( 
    <button
      className="waves-effect waves-light btn"
      onClick={() => click()}
    >
      {title}
    </button>
   );
};
 
export default Button;