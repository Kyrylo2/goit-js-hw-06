const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', (event) => {
  if (textInput.value != '' && textInput.value != undefined) {
    output.textContent = event.currentTarget.value;
  } else {
    output.textContent = 'Anonymous';
  }
});
