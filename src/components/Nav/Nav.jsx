import React from 'react';
import CustomLink from 'components/CustomLink';
import logo from 'logo.png';
import './styles.css';

const Nav = () => {
  return (
    <div className="panelLeft">
      <div className="logo">
        <img src={logo} alt="logo" className="logo-img" />
      </div>
      <div className="AppTemplate-navbar">
        <CustomLink to="/movies" >Películas</CustomLink>
        <CustomLink to="/characters" >Personajes</CustomLink>
      </div>
    </div>
  );
}

export default Nav;
