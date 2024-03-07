import './style.css'

document.querySelector('#app').innerHTML = `
  <section class="container">
    <div class="newsletter">
      <div class="newsletter__image">
        <figure>
          <img src="./assets/images/illustration-sign-up-mobile.svg">
        </figure>
      </div>

      <div class="newsletter__form">
        <h1>Stay updated!</h1>
        <p class="newsletter__form--desc">Join 60,000+ product managers receiving monthly updates on:</p>

        <ul>
          <li>Produc discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>


      </div>
    </div>
  </section>
`
