import React from 'react';
import Button from './Button';


const SearchButton = ({
  onClick,
  onChange,
  query,
  children,
  className=''
}) => 
  <form onSubmit={onClick}>
    <input 
      value={query}
      onChange={onChange}
      type='text' 
    />
    <Button type='submit'>
      {children}
    </Button>
  </form>

  export default SearchButton;