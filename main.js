import mainComponent from "./src/components/mainComponent.html";
import "./style.css";

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  app.appendChild(mainComponent());


  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    document.getElementById('newsletter').style.display = 'none';
    document.getElementById('thank-you-message').style.display = 'block';
    let email = event.target.getElementById('email_in').value;
    document.getElementById('email_span').innerText = email;
  });

  function dismissMessage() {
    document.getElementById('thank-you-message').style.display = 'none';
    document.getElementById('newsletter').style.display = 'block';
  }

});