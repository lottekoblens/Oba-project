export const loadingState = () => {
  const load = document.getElementById('loading');
  load.classList.add('loading-true'); // add class loading-true to show the loading icon
};

export const removeLoadingState = () => {
  const load = document.getElementById('loading');
  load.classList.remove('loading-true'); // remove class loading-true to delete the loading icon
};

export const showMoreInfo = () => {
  const buttons = document.getElementsByClassName('moreInformation');
  for (const button of buttons) {
    button.addEventListener('click', showInfo);
  }
};

const showInfo = () => {
  const divs = document.getElementsByClassName('hideDiv');
  for (const div of divs) {
    div.classList.add('show');
  }
};
