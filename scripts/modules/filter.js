const dun = [];
const gemiddeld = [];
const dik = [];

export const thicknessBook = (data) => {
  const results = data;
  const paginas = data.description[0].replace(/\D/gm, '');
  if (paginas > 0 && paginas < 150) {
    const select = document.querySelectorAll('article p');
    dun.push(results);
    return (select.innerHTML = 'Dun boek'), dun;
  }
  if (paginas > 150 && paginas < 300) {
    const select = document.querySelectorAll('article p');
    gemiddeld.push(results);
    return (select.innerHTML = 'Gemiddeld boek');
  }
  if (paginas > 300) {
    const select = document.querySelectorAll('article p');
    dik.push(results);
    return (select.innerHTML = 'Dik boek');
  } else {
    const select = document.querySelectorAll('article p');
    return (select.innerHTML = '');
  }
};

export const filter = () => {
  const dropdown = document.getElementById('book-thickness');
  const h2 = document.getElementById('filterH2');
  console.log(gemiddeld);
  dropdown.addEventListener('change', function () {
    const e = document.getElementById('book-thickness');
    let filterValue = e.value;
    if (filterValue === 'dun') {
      h2.classList.remove('hidden');
      dun.forEach((item) => {
        const section = document.querySelector('section:nth-of-type(1)');
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
    }
    if (filterValue === 'gemiddeld') {
      h2.classList.remove('hidden');
      gemiddeld.forEach((item) => {
        const section = document.querySelector('section:nth-of-type(1)');
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
    }
    if (filterValue === 'dik') {
      h2.classList.remove('hidden');
      dik.forEach((item) => {
        const section = document.querySelector('section:nth-of-type(1)');
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
    } else if (filterValue === 'niks') {
      h2.classList.add('hidden');
      const section = document.querySelector('section:nth-of-type(1)');
      section.innerHTML = '';
    }
  });
};
