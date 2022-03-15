import { renderData } from './render.js';
import { getData, getDataOpenLeermateriaal } from './fetch.js';
import '../vendor/routie.min.js';

export const handleRoutes = () => {
  routie({
    '': (search) => {
      getData(search);
      getDataOpenLeermateriaal(search);
    },
  });
};
