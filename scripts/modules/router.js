import { getDataDiet, getDataNutrition, getDataOpenLeermateriaal } from './fetch.js';
import '../vendor/routie.min.js';
import { showMoreInfo } from './ui.js';
import { setDetails } from './details.js';

export const handleRoutes = () => {
  const baseURL =
    'https://cors-anywhere.herokuapp.com/https://zoeken.oba.nl/api/v1/search/?q=voeding&authorization=ffbc1ededa6f23371bc40df1864843be&detaillevel=Default&pagesize=20&output=json';
  routie({
    '': () => {
      getDataNutrition();
      getDataDiet();
      getDataOpenLeermateriaal();

      showMoreInfo();
    },
    // ':id': async function (id) {
    //   const detailBook = await getData(`${baseURL}/${id}`);
    //   console.log('data details', detailBook);
    //   return setDetails(detailBook);
    // },
  });
};
