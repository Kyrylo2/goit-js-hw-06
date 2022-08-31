const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', () => {
  textInput.classList.remove('valid', 'invalid');
  if (textInput.value.length === +textInput.getAttribute('data-length')) {
    textInput.classList.add('valid');
  } else {
    textInput.classList.add('invalid');
  }
});
