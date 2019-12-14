import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import CharacterDetails from 'components/CharacterDetails';
import Filter from 'components/Filter';

const getIdFromUrl = (url) => url.substring(url.length - 2, url.length);

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    if (characters.length === 0) {
      fetch('https://swapi.co/api/people/')
        .then(response => response.json())
        .then(json => setCharacters(json.results))
    }
  });

  return (
    <div className="card movies">
      <div className="movies-leftpanel">
        <div className="list-group list-group-flush">
          <div className="list-group-item">
            <Filter />
          </div>
          {
            characters.map((character) => (
              <Link
                to={`/characters/${getIdFromUrl(character.url)}`}
                className="list-group-item list-group-item-action">
                {character.name}
              </Link>
            ))
          }
        </div>
      </div>
      <div className="movies-content">
        <Switch>
          <Route path="/characters/:id">
            <CharacterDetails />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default Characters;
