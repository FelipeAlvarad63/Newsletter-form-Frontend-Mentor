import mainComponent from "./src/components/mainComponent.html";
import "./style.css";

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  app.appendChild(mainComponent());

  const successViewElement = document.getElementById('success-view');

  if (successViewElement) {
    successViewElement.style.display = 'none';
  }

  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    document.getElementById('newsletter').style.display = 'none';
    document.getElementById('success-view').style.display = 'block';
    let email = document.getElementById('email_in').value;
    document.getElementById('email_span').innerText = email;
  });

  function dismissMessage() {
    document.getElementById('success-view').style.display = 'none';
    document.getElementById('newsletter').style.display = 'block';
  }

});