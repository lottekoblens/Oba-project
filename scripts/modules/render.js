import { thicknessBook } from './filter.js';
import { removeLoadingState } from './ui.js';

export const renderDataNutrition = (data) => {
  removeLoadingState();

  const section = document.querySelector('section:nth-of-type(2)');
  const results = data;
  // for all the data items from nutrition the image, title, author, summary, thickness book and detaillink will be rendered in an article
  // the articles are set in a section
  results.forEach((item) => {
    const html = `
              <article>
                <img src="${item.coverimages ? item.coverimages[1] : 'Geen samenvatting'}">
                <h2>${item.titles[0]}</h2>
                <div class="hideDiv" id="moreInfoDiv">
                <h3>Auteur:</h3>
                  <p>${item.authors[0]}</p>
                  <h3>Samenvatting:</h3>
                  <p> ${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
                  <p>${thicknessBook(item)}</p>
                  <a href="${item.detailLink}">Details op OBA website</a>
                <div>
              </article>
            `;
    section.insertAdjacentHTML('afterbegin', html);
  });
};

export const renderDataDiet = (data) => {
  removeLoadingState();

  const section = document.querySelector('section:nth-of-type(3)');
  const results = data;
  // for all the data items the image, title, author, summary, thickness book and detaillink will be rendered in an article
  // the articles are set in a section
  results.forEach((item) => {
    const html = `
              <article>
                <img src="${item.coverimages ? item.coverimages[1] : 'Geen samenvatting'}">
                <h2>${item.titles[0]}</h2>
                <div class="hideDiv" id="moreInfoDiv">
                <h3>Auteur:</h3>
                  <p>${item.authors[0]}</p>
                  <h3>Samenvatting:</h3>
                  <p> ${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
                  <p>${thicknessBook(item)}</p>
                  <a href="${item.detailLink}">Details op OBA website</a>
                <div>
              </article>
            `;
    section.insertAdjacentHTML('afterbegin', html);
  });
};

export const renderDataSport = (data) => {
  removeLoadingState();

  const section = document.querySelector('section:nth-of-type(4)');
  const results = data;
  // for all the data items the image, title, author, summary, thickness book and detaillink will be rendered in an article
  // the articles are set in a section
  results.forEach((item) => {
    const html = `
              <article>
                <img src="${item.coverimages ? item.coverimages[1] : 'Geen samenvatting'}">
                <h2>${item.titles[0]}</h2>
                <div class="hideDiv" id="moreInfoDiv">
                <h3>Auteur:</h3>
                  <p>${item.authors[0]}</p>
                  <h3>Samenvatting:</h3>
                  <p> ${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
                  <p>${thicknessBook(item)}</p>
                  <a href="${item.detailLink}">Details op OBA website</a>
                <div>
              </article>
            `;
    section.insertAdjacentHTML('afterbegin', html);
  });
};

export const renderDataOpenLeerMateriaal = (data) => {
  removeLoadingState();
  const section = document.querySelector('section:nth-of-type(5)');
  const results = data.results;
  // for all the data items the image, title, author and summary will be rendered in an article
  // the articles are set in a section
  results.forEach((item) => {
    const html = `
              <article>
                <h2>${item.titles[0]}</h2>
                <div>
                  <h3>Auteur:</h3>
                  <p>${item.authors[0]}</p>
                  <h3>Samenvatting:</h3>
                  <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
                <div>
              </article>
            `;
    section.insertAdjacentHTML('afterbegin', html);
  });
};
