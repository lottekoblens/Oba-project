import { getDataDiet, getDataSport, getDataNutrition, getDataOpenLeermateriaal } from './fetch.js';
import '../vendor/routie.min.js';
import { showMoreInfo } from './ui.js';
import { filter } from './filter.js';

export const handleRoutes = () => {
  routie({
    '': () => {
      getDataNutrition();
      getDataDiet();
      getDataSport();
      filter();
      getDataOpenLeermateriaal();
      showMoreInfo();
    },
  });
};
