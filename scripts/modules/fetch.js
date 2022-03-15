import { renderData, renderDataOpenLeerMateriaal } from './render.js';
import { loadingState } from './ui.js';

export const getData = (searchValue) => {
  loadingState();
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
  // const query = 'voeding';
  const key = 'ffbc1ededa6f23371bc40df1864843be';
  const secret = '3374c8bacbdd81eef70e7bb33d451efd';
  const detail = 'Default';
  const pagesize = '20';
  let query;
  searchValue ? (query = searchValue) : (query = 'voeding');
  const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&pagesize=${pagesize}&output=json`;

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
      } else {
        fetch('../../voeding.json')
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            renderData(data);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    });
};

export const getDataOpenLeermateriaal = () => {
  loadingState();
  fetch(
    'https://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=voeding+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia&authorization=76f45dfa187d66be5fd6af05573eab04'
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderDataOpenLeerMateriaal(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
