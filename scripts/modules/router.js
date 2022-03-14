import { renderData } from './render.js';
import { getData } from './fetch.js';
import '../vendor/routie.min.js';

export const handleRoutes = () => {
  routie({
    '': () => {
      getData().then((data) => {
        renderData(data);
      });
    },
  });
};
