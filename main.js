import "./style.css";

document.querySelector("#app").innerHTML = `<section class="container">
<div class="newsletter">
  <div class="newsletter__image">
    <figure>
      <img src="./assets/images/illustration-sign-up-mobile.svg">
    </figure>
  </div>

  <div class="newsletter__content">
    <h1>Stay updated!</h1>
    <p class="newsletter__content--desc">Join 60,000+ product managers receiving monthly updates on:</p>

    <ul>
      <li>Produc discovery and building what matters</li>
      <li>Measuring to ensure updates are a success</li>
      <li>And much more!</li>
    </ul>

    <form class="newsletter__content--form">
      <label for="email_in">Email address</label>
      <input type="text" id="email_in" name="email_in" placeholder="email@company.com" required></input>

      <button class="btn--submit" type="submit">Suscribe to monthly newsletter</button>
    </form>

  </div>
</div>
</section>`;

document.querySelector('newsletter__content--form').addEventListener('submit', function(event) {

});

