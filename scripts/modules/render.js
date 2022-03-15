import { removeLoadingState } from './ui.js';

export const renderData = (data) => {
  removeLoadingState();
  const main = document.querySelector('main');
  const section = document.querySelector('section:nth-of-type(1)');
  const results = data.results;
  console.dir(results);
  results.forEach((item, i) => {
    const html = `
              <article>
              <img src="${item.coverimages ? item.coverimages[1] : 'Geen samenvatting'}">
              <h2>${item.titles[0]}</h2>
              <div>
                
                <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
              <div>
              </article>
            `;
    section.insertAdjacentHTML('afterbegin', html);
  });
};

export const renderDataOpenLeerMateriaal = (data) => {
  removeLoadingState();
  const section = document.querySelector('section:nth-of-type(1)');
  const results = data.results;
  console.dir(results);
  results.forEach((item, i) => {
    const html = `
              <article>
              <img src="${item.coverimages ? item.coverimages[1] : 'Geen samenvatting'}">
              <h2>${item.titles[0]}</h2>
              <div>
                
                <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
              <div>
              </article>
            `;
    section.insertAdjacentHTML('afterbegin', html);
  });
};
