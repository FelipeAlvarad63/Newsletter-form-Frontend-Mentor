(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function d(){const o=document.createElement("template");return o.innerHTML=`
        <section class="newsletter" id="newsletter">
            <div class="container">
                <div class="newsletter__image">
                    <figure>
                        <img src="./assets/images/illustration-sign-up-mobile.svg" class="d-md-none"
                            alt="cover image for newsletter mobile">
                        <img src="./assets/images/illustration-sign-up-desktop.svg" class="d-none d-md-block"
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
                            <img src="./assets/images/icon-list.svg" alt="icon checklist">
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
`,o.content.cloneNode(!0)}document.addEventListener("DOMContentLoaded",()=>{document.querySelector("#app").appendChild(d());const n=document.querySelector("form"),s=document.getElementById("email_in"),i=document.getElementById("span-error"),e=document.getElementById("success-view"),t=document.getElementById("newsletter"),r=document.getElementById("email_span");e&&(e.style.display="none");const c=l=>{const a=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l);return a?(s.classList.remove("is-invalid"),i.innerText=""):(s.classList.add("is-invalid"),i.innerText="Valid email required"),a};s.addEventListener("input",()=>{c(s.value)}),n.addEventListener("submit",l=>{l.preventDefault(),c(s.value)&&s.value!==""&&(t.style.display="none",e.style.display="block",r.innerText=s.value)}),document.getElementById("btn--dismiss").addEventListener("click",()=>{e.style.display="none",t.style.display="flex"})});
