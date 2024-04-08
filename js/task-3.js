'use strict';
let input = document.querySelector('#name-input');
let output = document.querySelector('#name-output');
input.addEventListener('input', event => {
  let value = event.currentTarget.value.trim();
  if (value === '') {
    output.textContent = 'Anonymous';
    return;
  }
  output.textContent = value;
});