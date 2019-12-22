import React from 'react';
import { ReactComponent as Image } from './error.svg';
import styles from './Error.module.css';

const Error = ({ onReload }) => (
  <div className={styles.Error}>
    <Image />
    <div>Ups. Error de servidor</div>
    <div onClick={onReload} className={styles.Reload}>Click para volver a intentar</div>
  </div>
);

export default Error;
