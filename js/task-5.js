function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let button = document.querySelector('button.change-color');
let span = document.querySelector('span.color');
let body = document.querySelector('body');
button.addEventListener('click', event => {
  let color = getRandomHexColor();
  span.textContent = color;
  body.style.backgroundColor = color;
});