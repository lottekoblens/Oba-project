import { renderData } from './render.js';

export const getData = () => {
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
  const query = 'voeding';
  const key = 'ffbc1ededa6f23371bc40df1864843be';
  const secret = '3374c8bacbdd81eef70e7bb33d451efd';
  const detail = 'Default';
  const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;

  const config = {
    Authorization: `Bearer ${secret}`,
  };

  // fetch('../../voeding.json')
  fetch(url, config)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      renderData(data);
      localStorage.setItem('data', JSON.stringify(data));
    })
    .catch((err) => {
      console.log(err);
      if (localStorage.getItem('data')) {
        renderData(JSON.parse(localStorage.getItem('data')));
      }
    });
};
