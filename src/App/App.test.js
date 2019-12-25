import React from 'react';
import App from './App';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent, wait } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

jest.mock('services/SwapiService', () => ({
  getMovies: () => Promise.resolve([{ id: '1', title: 'A new hope' }]),


  getMovieById: (id) => Promise.resolve({
    title: 'A new hope',
    producer: 'Gary Kurtz, Rick McCallum',
    director: 'George Lucas',
    description: 'description',
    id: '1',
    release_date: '1977-05-25',
    episode_id: '4',
  }),


  getCharacters: () => Promise.resolve({
    count: 2,
    characters: [
      {
        id: '1',
        name: 'luke skywalker',
      },
      {
        id: '2',
        name: 'Yoda',
      },
    ]
  }),

  getCharacterById: () => Promise.resolve({
    skin_color: 'fair',
    name: 'Luke Skywalker',
    eye_color: 'blue',
    height: '172',
    mass: '77',
    id: '1',
    movies: [],
    birth_year: '19BBY',
    gender: 'Male',
    hair_color: 'blond',
  }),

}));


test('full app rendering/navigating for movies', async () => {
  const history = createMemoryHistory()
  const { container, getByText } = render(
    <Router history={history}>
      <App />
    </Router>
  );

  fireEvent.click(getByText(/PELÍCULAS/i));

  await wait(() => getByText(/A NEW HOPE/i));

  fireEvent.click(getByText(/A NEW HOPE/i));

  await wait(() => getByText(/Director/i));

  expect(container.innerHTML).toMatch('George Lucas');
  expect(container.innerHTML).toMatch('Gary Kurtz, Rick McCallum');

});



test('full app rendering/navigating for characters', async () => {
  const history = createMemoryHistory()
  const { container, getByText } = render(
    <Router history={history}>
      <App />
    </Router>
  )
  fireEvent.click(getByText(/PERSONAJES/i));

  await wait(() => getByText(/Luke Skywalker/i));
  fireEvent.click(getByText(/Luke Skywalker/i));
  await wait(() => getByText(/Altura/i));
  expect(container.innerHTML).toMatch('172');
});