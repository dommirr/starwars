import React from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import styles from './CustomLink.module.css';

const CustomLink = ({ children, to, activeOnlyWhenExact = false }) => {
  const match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <Link className={`${styles.CustomLink} ${match ? styles.active : ''}`} to={to}>{children}</Link>
  );
}

export default CustomLink;
