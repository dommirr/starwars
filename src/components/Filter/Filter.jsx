import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ onChange, value, placeholder }) => {
  return (
    <input
      onChange={(event) => onChange(event.target.value)}
      type="text"
      value={value}
      className={styles.Filter}
      placeholder={placeholder}
    />
  )
}

export default Filter;
