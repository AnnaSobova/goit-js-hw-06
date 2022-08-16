const form = document.querySelector('.login-form');

const sendTheForm = event => {
  event.preventDefault();

  const email = event.target.email.value;
  const password = event.target.password.value;

  email === '' || password === ''
    ? alert('Please fill in all the fields!')
    : console.log({ email, password });

  event.currentTarget.reset();
};

form.addEventListener('submit', sendTheForm);