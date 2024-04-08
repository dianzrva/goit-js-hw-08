let form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);
// console.log(form);

function handleSubmit(event) {
  event.preventDefault();
  let form = event.target;
  //   console.log(form.elements);
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === '' || password === '') {
    return alert('Please fill in all the fields!');
  }

  const out = {
    email: email,
    password: password,
  };
  console.log(out);
  form.reset();
}