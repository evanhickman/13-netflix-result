import 'whatwg-fetch';
import fillInResult from './fill-in-result';

const searchResult = document.querySelector('.result');
const searchField = document.querySelector('.result-search__field');
const searchBtn = document.querySelector('.result-search__button');

fetch('http://netflixroulette.net/api/api.php?title=Attack%20on%20titan')
  .then((res) => res.json())
  .then((data) => {
    fillInResult(searchResult, data);
  });
