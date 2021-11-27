import React from 'react';
import PropTypes from 'prop-types';
import { toKebab } from '../utils';

const Navigation = ({ components }) => {
  return (
    <ul className='navigation'>
      {components.map((name) => {
        return (
          <li key={name}>
            <a href={`#${toKebab(name)}`}>{name}</a>
          </li>
        );
      })}
    </ul>
  );
};

Navigation.propTypes = {
  components: PropTypes.array.isRequired,
};

export default Navigation;
