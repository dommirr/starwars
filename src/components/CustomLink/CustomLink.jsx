import React from 'react';
import { Link, useRouteMatch } from "react-router-dom";

const CustomLink = ({ children, to, activeOnlyWhenExact = false }) => {
  const match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <Link className={`navbar-item ${match ? 'active' : ''}`} to={to}>{children}</Link>
  );
}

export default CustomLink;
