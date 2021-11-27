import React from 'react'
import { useState } from 'react';

export default function ControlledInput ({ onSearch }){
  const [value, setValue] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    setValue(value);
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type='text' value={value} onChange={onChange} />
      <button type='submit'>Search</button>
    </form>
  );
};
