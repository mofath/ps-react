import React from 'react';

const Example = ({ example: { component } }) => {
  return (
    <div className='example'>
      {component}
    </div>
  );
};

export default Example;
