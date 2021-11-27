import { useRef } from 'react';

export const UncontrolledInput = ({ onClick }) => {
  const inputRef = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
    onClick(inputRef.current.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input ref={inputRef} type='text' />
      <button type='submit'>Search</button>
    </form>
  );
};

export default UncontrolledInput;
