import React from 'react';
import './Button.css';

const Button = ({children, className='', onClick}) => {
  

  return(
    <button
      className={className}
      onClick={onClick}
      type='button'
    >
      {children}
    </button>

  )

}

export default Button;
