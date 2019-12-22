import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import CharacterDetails from './components/CharacterDetails';
import Filter from 'components/Filter';
import CustomLink from 'components/CustomLink';
import Layout from 'components/Layout';
import Message from 'components/Message';
import Error from 'components/Error';

let timer;
const Characters = ({
  characters,
  loading,
  error,
  fetchCharacters,
  fetchSearchCharacters,
  charactersFiltered,
}) => {

  const [filterBy, setFilterBy] = useState('');

  useEffect(() => {
    if (characters.length === 0) {
      fetchCharacters()
    }
  }, [fetchCharacters, characters]);

  const onChangeFilter = (text) => {
    if (timer) {
      clearTimeout(timer);
    }
    setFilterBy(text);
    timer = setTimeout(() => {
      fetchSearchCharacters(text);
    }, 500);
  }

  if (error) {
    return <Error onReload={fetchCharacters} />;
  }

  const filterEmpty = filterBy === '';

  const charactersToShow = filterEmpty ? characters : charactersFiltered;

  const panelHeader = (
    <Filter
      onChange={onChangeFilter} value={filterBy}
      placeholder="Buscar en personajes"
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
      onPanelScroll={filterEmpty ? fetchCharacters : undefined}
    >
      <Switch>
        <Route exact path="/characters">
          <Message />
        </Route>
        <Route path="/characters/:id">
          <CharacterDetails />
        </Route>
      </Switch>
    </Layout>
  );
};

export default Characters;
