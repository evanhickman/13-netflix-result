export default function fillInResult(element, data) {
  element.querySelector('.title').innerText = data.show_title;
  element.querySelector('.genre').innerText = data.category;
  element.querySelector('.rating').innerText = data.rating;
  element.querySelector('.main-pic').src = data.poster;
  element.querySelector('.summary').innerText = data.summary;
  element.querySelector('.cast').innerText = data.show_cast;
}
