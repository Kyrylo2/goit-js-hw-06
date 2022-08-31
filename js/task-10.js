// Main DOM elements
const input = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const divBoxes = document.querySelector('#boxes');

// functions
const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const createBoxes = (amount) => {
  const boxes = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    boxes.push(
      `<div id="boxes" style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`
    );
    size += 10;
  }
  return boxes.join('');
};

const destroyBoxes = () => {
  divBoxes.innerHTML = '';
};

// Event handlers

buttonCreate.addEventListener('click', (e) => {
  if (input.value === '') return alert('Please enter a value');
  divBoxes.innerHTML = createBoxes(+input.value);
});

buttonDestroy.addEventListener('click', destroyBoxes);
