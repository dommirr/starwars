import React from 'react';

const Filter = ({ onChange, value, placeholder }) => {
  return (
    <div className="form-group  mb-0">
      <input
        onChange={(event) => onChange(event.target.value)}
        type="text"
        value={value}
        className="form-control"
        placeholder={placeholder}
      />
    </div>
  )
}

export default Filter;
