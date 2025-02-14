import { useState } from 'react';

const ControlledInput = ({ onClick }) => {
  const [value, setValue] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    onClick(value);
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

export default ControlledInput;
