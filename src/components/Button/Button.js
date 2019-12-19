import React from 'react';
import './Button.css';

const Button = ({
  children, 
  className='', 
  onClick,
  type='button'
}) => 
  <button
    className={className}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>

export default Button;
