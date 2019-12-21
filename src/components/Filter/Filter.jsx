import React from 'react';
import './styles.css';

const Filter = ({ onChange, value, placeholder }) => {
  return (
    <input
      onChange={(event) => onChange(event.target.value)}
      type="text"
      value={value}
      className="Filter"
      placeholder={placeholder}
    />
  )
}

export default Filter;
