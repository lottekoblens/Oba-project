export const search = (search) => {
  let inputValue = document.getElementById('inputValue');
  console.log(inputValue);
  const submitButton = document.getElementById('searchButton');
  submitButton.addEventListener('click', () => {
    window.location.hash = inputValue.value;
  });
};
