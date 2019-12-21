import React from 'react';
import CustomLink from 'components/CustomLink';
import logo from 'logo.png';
import './styles.css';

const Nav = () => {
  return (
    <div className="Nav">
      <div className="logo">
        <img src={logo} alt="logo" className="logo-img" />
      </div>
      <div className="Navbar-list">
        <CustomLink to="/movies" >Películas</CustomLink>
        <CustomLink to="/characters" >Personajes</CustomLink>
      </div>
    </div>
  );
}

export default Nav;
