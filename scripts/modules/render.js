import { removeLoadingState } from './ui.js';

export const renderData = (data) => {
  removeLoadingState();

  const section = document.querySelector('section:nth-of-type(1)');
  const results = data;
  console.dir(results);
  results.forEach((item, i) => {
    const html = `
              <article>
                <img src="${item.coverimages ? item.coverimages[1] : 'Geen samenvatting'}">
                <h2>${item.titles[0]}</h2>
                <div class="hideDiv" id="moreInfoDiv">
                <h3>Auteur:</h3>
                  <p>${item.authors[0]}</p>
                  <h3>Samenvatting:</h3>
                  <p> ${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
                  <a href="${item.detailLink}">Details op OBA website</a>
                <div>
              </article>
            `;
    section.insertAdjacentHTML('afterbegin', html);
  });
};

export const renderDataDiet = (data) => {
  removeLoadingState();

  const section = document.querySelector('section:nth-of-type(2)');
  const results = data;
  console.dir(results);
  results.forEach((item, i) => {
    const html = `
              <article>
                <img src="${item.coverimages ? item.coverimages[1] : 'Geen samenvatting'}">
                <h2>${item.titles[0]}</h2>
                <div class="hideDiv" id="moreInfoDiv">
                <h3>Auteur:</h3>
                  <p>${item.authors[0]}</p>
                  <h3>Samenvatting:</h3>
                  <p> ${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
                  <a href="${item.detailLink}">Details op OBA website</a>
                <div>
              </article>
            `;
    section.insertAdjacentHTML('afterbegin', html);
  });
};

export const renderDataSport = (data) => {
  removeLoadingState();

  const section = document.querySelector('section:nth-of-type(3)');
  const results = data;
  console.dir(results);
  results.forEach((item, i) => {
    const html = `
              <article>
                <img src="${item.coverimages ? item.coverimages[1] : 'Geen samenvatting'}">
                <h2>${item.titles[0]}</h2>
                <div class="hideDiv" id="moreInfoDiv">
                <h3>Auteur:</h3>
                  <p>${item.authors[0]}</p>
                  <h3>Samenvatting:</h3>
                  <p> ${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
                  <a href="${item.detailLink}">Details op OBA website</a>
                <div>
              </article>
            `;
    section.insertAdjacentHTML('afterbegin', html);
  });
};

export const renderDataOpenLeerMateriaal = (data) => {
  removeLoadingState();
  const section = document.querySelector('section:nth-of-type(4)');
  const results = data.results;
  console.dir(results);
  results.forEach((item, i) => {
    const html = `
              <article>
                <img src="${item.coverimages ? item.coverimages[1] : 'Geen samenvatting'}">
                <h2>${item.titles[0]}</h2>
                <div>
                  <p>${item.authors[0]}</p>
                  <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
                <div>
              </article>
            `;
    section.insertAdjacentHTML('afterbegin', html);
  });
};
