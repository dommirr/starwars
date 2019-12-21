import React from 'react'
import style from './Back.module.css';

const goBack = () => {
  window.history.back();
}

const Back = () => (
  <div className={style.Back} onClick={goBack} />
)

export default Back;
