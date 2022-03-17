import { renderData, renderDataOpenLeerMateriaal, renderDataDiet, renderDataSport } from './render.js';
import { loadingState } from './ui.js';

export const getDataNutrition = () => {
  loadingState();
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
  const key = 'ffbc1ededa6f23371bc40df1864843be';
  const secret = '3374c8bacbdd81eef70e7bb33d451efd';
  const detail = 'Default';
  const pagesize = '20';
  const query = 'voeding';
  const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&pagesize=${pagesize}&output=json`;

  const config = {
    Authorization: `Bearer ${secret}`,
  };

  fetch(url, config)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data = data.results;
      renderData(data);
    })
    .catch((err) => {
      console.log(err);
      fetch('./../../localData/nutrition.json')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          renderData(data);
        })
        .catch((err) => {
          console.error(err);
        });
    });
};

export const getDataDiet = () => {
  loadingState();
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
  const key = 'ffbc1ededa6f23371bc40df1864843be';
  const secret = '3374c8bacbdd81eef70e7bb33d451efd';
  const detail = 'Default';
  const pagesize = '20';
  const query = 'dieet';
  const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&pagesize=${pagesize}&output=json`;

  const config = {
    Authorization: `Bearer ${secret}`,
  };

  fetch(url, config)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data = data.results;
      renderDataDiet(data);
    })
    .catch((err) => {
      console.log(err);
      fetch('./../../localData/diet.json')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          renderDataDiet(data);
        })
        .catch((err) => {
          console.error(err);
        });
    });
};

export const getDataSport = () => {
  loadingState();
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
  const key = 'ffbc1ededa6f23371bc40df1864843be';
  const secret = '3374c8bacbdd81eef70e7bb33d451efd';
  const detail = 'Default';
  const pagesize = '20';
  const query = 'sport';
  const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&pagesize=${pagesize}&output=json`;

  const config = {
    Authorization: `Bearer ${secret}`,
  };

  fetch(url, config)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data = data.results;
      renderDataSport(data);
    })
    .catch((err) => {
      console.log(err);
      fetch('./../../localData/sport.json')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          renderDataSport(data);
        })
        .catch((err) => {
          console.error(err);
        });
    });
};

export const getDataOpenLeermateriaal = () => {
  loadingState();
  const url =
    'https://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=voeding+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia&authorization=76f45dfa187d66be5fd6af05573eab04&output=json';
  const config = 'no-cors';

  fetch(url, config)
    .then((response) => {
      console.log(response, 'response openLeermateriaal');
      return response.json();
    })
    .then((data) => {
      console.log(data);
      renderDataOpenLeerMateriaal(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
