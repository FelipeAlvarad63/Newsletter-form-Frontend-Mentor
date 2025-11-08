import mainComponent from "./src/components/mainComponent.html";
import "./style.css";

document.addEventListener('DOMContentLoaded', () => {

  const app = document.querySelector('#app');
  app.appendChild(mainComponent());

  const form = document.querySelector('form');
  const emailInput = document.getElementById('email_in');
  const spanError = document.getElementById('span-error');
  const successView = document.getElementById('success-view');
  const newsletterView = document.getElementById('newsletter');
  const emailSpan = document.getElementById('email_span');

  // Ocultar vista de éxito al inicio
  if (successView) {
    successView.style.display = 'none';
  }

  // Función para validar correo
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(email);

    if (!isValid) {
      emailInput.classList.add('is-invalid');
      spanError.innerText = 'Valid email required';
    } else {
      emailInput.classList.remove('is-invalid');
      spanError.innerText = '';
    }

    return isValid;
  };

  // Validar en tiempo real
  emailInput.addEventListener('input', () => {
    validateEmail(emailInput.value);
  });

  // Enviar formulario
  form.addEventListener('submit', (event) => {
    event.preventDefault();


    if (validateEmail(emailInput.value) && emailInput.value !== '') {
      newsletterView.style.display = 'none';
      successView.style.display = 'block';
      emailSpan.innerText = emailInput.value;
    }
  });

  // Puedes usar esta función cuando el usuario cierre el mensaje de éxito
  document.getElementById('btn--dismiss').addEventListener('click', () => {
    successView.style.display = 'none';
    newsletterView.style.display = 'flex';
  })
});