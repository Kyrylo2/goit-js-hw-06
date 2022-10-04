const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', () => {
  textInput.classList.remove('valid', 'invalid');

  const inputValueLength = textInput.value.trim().length;
  const validInputLength = +textInput.getAttribute('data-length');

  const updateStyle = (classList) => {
    textInput.classList.add(classList);
  };

  inputValueLength === validInputLength
    ? updateStyle('valid')
    : updateStyle('invalid');
});
