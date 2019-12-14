import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="list-group">
      <Link to="/movies" className="list-group-item list-group-item-action">Películas</Link>
      <Link to="/characters" className="list-group-item list-group-item-action">Personajes</Link>
    </div>
  );
}

export default Nav;
