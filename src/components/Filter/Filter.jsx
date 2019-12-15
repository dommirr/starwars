import React from 'react';

const Filter = ({ onChange, value, placeholder }) => {
  return (
    <input
      onChange={(event) => onChange(event.target.value)}
      type="text"
      value={value}
      className="form-control"
      placeholder={placeholder}
    />
  )
}

export default Filter;
