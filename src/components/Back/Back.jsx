import React from 'react'
import { Link } from "react-router-dom";
import style from './Back.module.css';

const Back = ({ to = '/' }) => (
  <Link to={to}>
    <div className={style.Back} />
  </Link>

)

export default Back;
