import 'whatwg-fetch';
import fillInResult from './fill-in-result';

const searchBtn = document.querySelector('.result-search__button');
const searchField = document.querySelector('.result-search__field');
const searchResult = document.querySelector('.result');

function startSearch(name) {
  fetch(`http://netflixroulette.net/api/api.php?title=${name}`)
  .then((res) => res.json())
  .then((data) => {
    fillInResult(searchResult, data);
  });
}

searchBtn.addEventListener('click', () => {
  startSearch(searchField.value);
});
startSearch('Attack on Titan');
