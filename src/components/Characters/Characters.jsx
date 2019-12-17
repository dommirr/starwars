import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import CharacterDetails from 'components/CharacterDetails';
import Filter from 'components/Filter';
import CustomLink from 'components/CustomLink';
import Layout from 'components/Layout';
import Message from 'components/Message';

let timer;
const Characters = ({ characters, loading, fetchCharacters, fetchSearchCharacters, charactersFiltered, count }) => {

  const [filterBy, setFilterBy] = useState('');

  // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    if (characters.length === 0) {
      fetchCharacters()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = (e) => {
    let element = e.target
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      if (count !== characters.length) {
        fetchCharacters();
      }
    }
  }

  const onChangeFilter = (text) => {
    if (timer) {
      clearTimeout(timer);
    }
    setFilterBy(text);
    timer = setTimeout(() => {
      fetchSearchCharacters(text);
    }, 500);
  }

  const charactersToShow = filterBy === '' ? characters : charactersFiltered;

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
      onPanelScroll={handleScroll}
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
