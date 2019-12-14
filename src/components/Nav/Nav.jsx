import React from 'react';
import CustomLink from 'components/CustomLink';

const Nav = () => {
  return (
    <div className="list-group">
      <CustomLink to="/movies" >Películas</CustomLink>
      <CustomLink to="/characters" >Personajes</CustomLink>
    </div>
  );
}

export default Nav;
