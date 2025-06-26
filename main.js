import mainComponent from "./src/components/mainComponent.html";
import "./style.css";

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  app.appendChild(mainComponent());

  let emailInput = document.getElementById('email_in');

  emailInput.addEventListener('input', () => {

    console.log(validateEmail(emailInput.value));
    if (!validateEmail(emailInput.value)) {
      document.getElementById('span-error').innerText = 'Valid email required';
    } else {
      document.getElementById('span-error').innerText = '';
    }
  });

  const successViewElement = document.getElementById('success-view');

  if (successViewElement) {
    successViewElement.style.display = 'none';
  }

  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    if (validateEmail(emailInput.value)) {
      document.getElementById('newsletter').style.display = 'none';
      document.getElementById('success-view').style.display = 'block';
      validateEmail();
      document.getElementById('email_span').innerText = email;
    }
  });

  function dismissMessage() {
    document.getElementById('success-view').style.display = 'none';
    document.getElementById('newsletter').style.display = 'block';
  }

});