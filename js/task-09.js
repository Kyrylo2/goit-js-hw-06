function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector('button');

const colorPlace = document.querySelector('.color');

button.addEventListener('click', (e) => {
  e.preventDefault();

  const hexColor = getRandomHexColor();

  document.body.style.backgroundColor = hexColor;

  colorPlace.innerHTML = hexColor;
});
