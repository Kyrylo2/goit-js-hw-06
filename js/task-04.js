let value = 0;

const buttonPlus = document.querySelector('[data-action="increment"]');
// buttonPlus.addEventListener('click')

(function () {
  const valueData = document.querySelector('#value');
  valueData.innerHTML = 0;

  const buttonClick = (operator) => {
    if (operator === 'plus') {
      valueData.innerHTML = Number(valueData.innerHTML) + 1;
    } else valueData.innerHTML = Number(valueData.innerHTML) - 1;
  };

  const buttonPlus = document.querySelector('[data-action="increment"]');

  buttonPlus.addEventListener('click', () => {
    buttonClick('plus');
  });

  const buttonMinus = document.querySelector('[data-action="decrement"]');

  buttonMinus.addEventListener('click', () => {
    buttonClick('minus');
  });
})();
