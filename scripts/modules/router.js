import { renderData } from './render.js';
import { getData, getDataOpenLeermateriaal } from './fetch.js';
import '../vendor/routie.min.js';
import { showMoreInfo } from './ui.js';

export const handleRoutes = () => {
  routie({
    '': (search) => {
      getData(search);
      // getDataOpenLeermateriaal(search);
      showMoreInfo();
    },
  });
};
