import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import CharacterDetails from 'components/CharacterDetails';
import Filter from 'components/Filter';
import CustomLink from 'components/CustomLink';
import SwapiService from 'services/SwapiService';
import './styles.css';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [charactersFiltered, setCharactersFiltered] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [filterBy, setFilterBy] = useState('');

  // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    const fecthCharacters = async () => {
      if (characters.length === 0) {
        setLoading(true);
        const { characters, count } = await SwapiService.getCharacters();
        setLoading(false);
        setCharacters(characters);
        setCount(count);
      }
    };
    fecthCharacters();
  });

  const addPage = async () => {
    setLoading(true);
    const { characters: newCharacters } = await SwapiService.getCharacters(page + 1);
    setLoading(false);
    setCharacters([...characters, ...newCharacters]);
    setPage(page + 1);
  }

  const handleScroll = (e) => {
    let element = e.target
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      if (count !== characters.length) {
        addPage();
      }
    }
  }

  const getCharactersFiltered = async (text) => {
    const { characters } = await SwapiService.getSearchCharacters(text);
    setCharactersFiltered(characters);
  }

  const onChangeFilter = (text) => {
    setFilterBy(text);
    getCharactersFiltered(text);
  }

  const charactersToShow = filterBy === '' ? characters : charactersFiltered;

  return (
    <div className="card movies">
      <div className="movies-leftpanel  border-right">
        <div className="card-body border-bottom">
          <Filter placeholder="buscar personaje" onChange={onChangeFilter} value={filterBy} />
        </div>
        <div className="list-group list-group-flush characters-list" onScroll={handleScroll}>

          {
            charactersToShow.map((character) => (
              <CustomLink
                key={character.id}
                to={`/characters/${character.id}`}>
                {character.name}
              </CustomLink>
            ))
          }
          {
            loading && (
              <div className="list-group-item list-group-item-action">loading...</div>
            )
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
