const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  for (const value of formData.values()) {
    if (value === '') alert('Please fill all fields');
  }

  const formDataObj = {
    [form.elements.email.name]: form.elements.email.value,
    [form.elements.password.name]: form.elements.password.value,
  };

  console.log(formDataObj);

  event.currentTarget.reset();
}
