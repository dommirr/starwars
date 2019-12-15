import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import CharacterDetails from 'components/CharacterDetails';
import Filter from 'components/Filter';
import CustomLink from 'components/CustomLink';
import Layout from 'components/Layout';
import SwapiService from 'services/SwapiService';


let timer;
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
    if (timer) {
      clearTimeout(timer);
    }
    setFilterBy(text);
    timer = setTimeout(() => {
      getCharactersFiltered(text);
    }, 500);
  }

  const charactersToShow = filterBy === '' ? characters : charactersFiltered;

  const panelHeader = (
    <Filter
      onChange={onChangeFilter} value={filterBy}
      placeholder="buscar en personajes"
    />
  );

  const panelList = charactersToShow.map((character) => (
    <CustomLink
      key={character.id}
      to={`/characters/${character.id}`}>
      {character.name}
    </CustomLink>
  ));

  return (
    <Layout
      panelHeader={panelHeader}
      panelList={panelList}
      panelListLoading={loading}
      onPanelScroll={handleScroll}
    >
      <Switch>
        <Route path="/characters/:id">
          <CharacterDetails />
        </Route>
      </Switch>
    </Layout>
  );
};

export default Characters;
