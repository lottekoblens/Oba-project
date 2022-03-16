export const setDetails = (data) => {
  console.log('test details');
  console.log(data);

  //   const mainContainer = document.querySelector('main');
  //   while (mainContainer.firstChild) {
  //     mainContainer.removeChild(mainContainer.firstChild);
  //   }
  const mainContainer = document.querySelector('main');
  const resultsDetail = data;
  resultsDetail.forEach((item, i) => {
    const detailsBook = `
    <section>
    <a href="#book/${item.id}">
      <img src="${item.coverimages ? item.coverimages[1] : 'Geen samenvatting'}">
      <h2>${item.titles[0]}</h2>
      <div class="hideDiv" id="moreInfoDiv">
      <h3>Auteur:</h3>
        <p>${item.authors[0]}</p>
        <h3>Samenvatting:</h3>
        <p> ${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
      <div>
      <a id="bnt" href="#">Terug</a>
    </section>
    `;
    mainContainer.insertAdjacentHTML('beforeend', detailsBook);
  });
};
