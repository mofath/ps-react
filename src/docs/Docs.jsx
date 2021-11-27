import React, { useState, useEffect } from 'react';
import { toKebab } from '../utils';
import Navigation from './Navigation';
import Example from './Example';
import ControlledInputExample from './examples/ControlledInput';
import StaleState from './examples/StaleState';


const examples = [
  { name: 'Controlled Input', component: <ControlledInputExample /> },
  { name: 'Stale State', component: <StaleState /> },

];

const Docs = () => {
  const [route, setRoute] = useState(
    window.location.hash.substr(1) || toKebab(examples[0].name)
  );

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setRoute(window.location.hash.substr(1));
    });
  }, []);

  const { name } = route
    ? examples.filter((example) => toKebab(example.name) === route)[0]
    : examples[0];

  console.log(examples.filter((example) => example.name === name)[0]);
  return (
    <div className='layout'>
      <Navigation components={examples.map((example) => example.name)} />
      <Example
        example={examples.filter((example) => example.name === name)[0]}
      />
    </div>
  );
};

export default Docs;
