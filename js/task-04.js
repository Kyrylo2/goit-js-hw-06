(function () {
  const valueData = document.querySelector('#value');
  const button = document.querySelectorAll('button');

  let currentValue = 0;

  valueData.innerHTML = `${currentValue}`;

  const buttonClick = (dataSet) => {
    chengeValue(dataSet) ? currentValue++ : currentValue--;

    valueData.innerHTML = `${currentValue}`;
  };

  button.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      buttonClick(e.target.dataset.action);
    });
  });
})();

const chengeValue = (dataAction) => {
  return dataAction === 'increment';
};
