const API_KEY = "94bf1d41";
const BASE_URL = "http://www.omdbapi.com/";

export const getMovies = async (searchTerm) => {
    const response = await fetch(`${BASE_URL}?s=${searchTerm}&apikey=${API_KEY}`);
    const data = await response.json();
    return data.Search;
};

export const searchMovies = async (query) => {
  if (!query) return []; // empty search safe

  const response = await fetch(
    `${BASE_URL}?s=${encodeURIComponent(query)}&apikey=${API_KEY}`
  );

  const data = await response.json();

  return data.Search || []; // prevent crash if no results
};
