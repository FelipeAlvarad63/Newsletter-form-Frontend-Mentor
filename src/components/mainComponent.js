import coverMobile from "./assets/images/illustration-sign-up-mobile.svg"
import coverDesktop from "./assets/images/illustration-sign-up-desktop.svg"
import iconList from "./assets/images/icon-success.svg"

export default function mainComponent() {
    const template = document.createElement('template');
    template.innerHTML = `
        <section class="newsletter" id="newsletter">
            <div class="container">
                <div class="newsletter__image">
                    <figure>
                        <img src="${coverMobile}" class="d-md-none"
                            alt="cover image for newsletter mobile">
                        <img src="${coverDesktop}" class="d-none d-md-block"
                            alt="cover image for newsletter desktop">
                    </figure>
                </div>

                <div class="newsletter__content">
                    <h1>Stay updated!</h1>
                    <p class="newsletter__content--desc">Join 60,000+ product managers receiving monthly updates on:</p>

                    <ul>
                        <li>Product discovery and building what matters</li>
                        <li>Measuring to ensure updates are a success</li>
                        <li>And much more!</li>
                    </ul>

                    <form class="newsletter__content--form">
                        <div class="input-labels">
                            <label for="email_in">Email address</label>
                            <span id="span-error" class="span-error"></span>
                        </div>

                        <input type="email" id="email_in" name="email_in" placeholder="email@company.com" required></input>

                        <button id="btn--submit" class="btn-primary" type="submit">Subscribe to monthly newsletter</button>
                    </form>

                </div>
            </div>
        </section>

        <section class="success-view" id="success-view">
            <div class="container">
                <div class="success-content">
                    <div class="text-content">
                        <figure class="success__icon-check">
                            <img src="${iconList}" alt="icon checklist">
                        </figure>
                        <h2 class="title">Thanks for subscribing!</h2>
                        <p class="success--desc">A confirmation email has been sent to <span id="email_span"></span>. Please
                            open it and click the button inside to confirm your subscription.</p>
                    </div>

                    <button id="btn--dismiss" class="btn-primary" type="button">
                        Dismiss message
                    </button>
                </div>
            </div>
        </section>)
`;

    return template.content.cloneNode(true);

}