(function () {
  const rangeInput = document.querySelector('#font-size-control');

  const text = document.querySelector('#text');
  text.style.fontSize = `${rangeInput.value}px`;

  rangeInput.addEventListener('input', () => {
    text.style.fontSize = `${rangeInput.value}px`;
  });
})();
