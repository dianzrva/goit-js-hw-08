function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesContainer = document.getElementById('boxes');
let inputAmount = document.querySelector('input[type=number]');
let bCreate = document.querySelector('button[data-create]');
bCreate.addEventListener('click', () => {
  const amount = parseInt(inputAmount.value);
  destroyBoxes();

  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert('Введіть число від 1 до 100.');
    return;
  }
  createBoxes(amount);
});

let bDestroy = document.querySelector('button[data-destroy]');
bDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    let box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10;
  }
}

function destroyBoxes() {
  inputAmount.value = '';
  boxesContainer.innerHTML = '';
}