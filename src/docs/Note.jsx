import React from 'react';

const Note = ({ children, type }) => {
  return (
    <div className={`note note--${type}`}>
      <p>
        <strong>{type}</strong>
      </p>
      <p> {children}</p>
    </div>
  );
};

export default Note;
