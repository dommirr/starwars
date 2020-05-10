const url = "https://swapi.dev/api";

const reg = new RegExp("/(?:.(?!/(.+)/))+$");

const getIdFromUrl = (url) => reg.exec(url)[0].replace(/\//g, "");

const getIdsFromCharacters = (links) => links.map((link) => getIdFromUrl(link));

const getResourse = async (resourse, page = 1) => {
  const response = await fetch(`${url}/${resourse}?page=${page}`);
  const data = await response.json();
  return data;
};

const getResourseSearch = async (resourse, search = "") => {
  const response = await fetch(`${url}/${resourse}?search=${search}`);
  const data = await response.json();
  return data;
};

const getMovies = async () => {
  const data = await getResourse("films");
  return data.results.map((movie) => ({
    id: getIdFromUrl(movie.url),
    title: movie.title,
  }));
};

const getMovieById = async (id) => {
  const data = await getResourseById("films", id);
  return {
    title: data.title,
    producer: data.producer,
    director: data.director,
    description: data.opening_crawl,
    id: id,
    release_date: data.release_date,
    episode_id: data.episode_id,
  };
};

const getCharacterById = async (id) => {
  const data = await getResourseById("people", id);

  const idLinks = getIdsFromCharacters(data.films);

  return {
    skin_color: data.skin_color,
    name: data.name,
    eye_color: data.eye_color,
    height: data.height,
    mass: data.mass,
    id: id,
    movies: idLinks,
    birth_year: data.birth_year,
    gender: data.gender,
    hair_color: data.hair_color,
  };
};

const getCharacters = async (page = 1) => {
  const data = await getResourse("people", page);
  const characters = data.results.map((people) => ({
    id: getIdFromUrl(people.url),
    name: people.name,
  }));
  return {
    characters,
    count: data.count,
  };
};

const getSearchCharacters = async (search) => {
  const data = await getResourseSearch("people", search);
  const characters = data.results.map((people) => ({
    id: getIdFromUrl(people.url),
    name: people.name,
  }));
  return {
    characters,
    count: data.count,
  };
};

const getResourseById = async (resourse, id) => {
  const response = await fetch(`${url}/${resourse}/${id}`);
  const data = await response.json();
  return data;
};

export default {
  getResourse,
  getMovies,
  getCharacters,
  getResourseById,
  getMovieById,
  getCharacterById,
  getSearchCharacters,
};
