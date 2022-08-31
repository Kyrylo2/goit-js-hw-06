const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const formDataObj = new Object();

  formData.forEach((value, name) => {
    formDataObj[name] = value;
  });

  console.table(formDataObj);

  event.currentTarget.reset();
}
