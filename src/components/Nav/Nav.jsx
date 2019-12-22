import React from 'react';
import CustomLink from 'components/CustomLink';
import logo from 'logo.png';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <div className={styles.Nav}>
      <div className={styles.NavLogo}>
        <img src={logo} alt="logo" className={styles.NavLogoImg} />
      </div>
      <div className={styles.NavList}>
        <CustomLink to="/movies" >Películas</CustomLink>
        <CustomLink to="/characters" >Personajes</CustomLink>
      </div>
    </div>
  );
}

export default Nav;
