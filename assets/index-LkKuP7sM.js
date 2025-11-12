(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="https://felipealvarad63.github.io/Newsletter-form-Frontend-Mentor/assets/illustration-sign-up-mobile-DkrvVqU_.svg",u="https://felipealvarad63.github.io/Newsletter-form-Frontend-Mentor/assets/illustration-sign-up-desktop-DX21DkyK.svg",m="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='100%25'%20x2='0%25'%20y1='0%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20stop-color='%23FF6A3A'/%3e%3cstop%20offset='100%25'%20stop-color='%23FF527B'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20fill='none'%3e%3ccircle%20cx='32'%20cy='32'%20r='32'%20fill='url(%23a)'/%3e%3cpath%20stroke='%23FFF'%20stroke-width='4'%20d='m18.286%2034.686%208.334%207.98%2019.094-18.285'/%3e%3c/g%3e%3c/svg%3e";function p(){const r=document.createElement("template");return r.innerHTML=`
        <section class="newsletter" id="newsletter">
            <div class="container">
                <div class="newsletter__image">
                    <figure>
                        <img src="${d}" class="d-md-none"
                            alt="cover image for newsletter mobile">
                        <img src="${u}" class="d-none d-md-block"
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
                            <img src="${m}" alt="icon checklist">
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
`,r.content.cloneNode(!0)}document.addEventListener("DOMContentLoaded",()=>{document.querySelector("#app").appendChild(p());const n=document.querySelector("form"),s=document.getElementById("email_in"),i=document.getElementById("span-error"),e=document.getElementById("success-view"),t=document.getElementById("newsletter"),o=document.getElementById("email_span");e&&(e.style.display="none");const l=c=>{const a=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c);return a?(s.classList.remove("is-invalid"),i.innerText=""):(s.classList.add("is-invalid"),i.innerText="Valid email required"),a};s.addEventListener("input",()=>{l(s.value)}),n.addEventListener("submit",c=>{c.preventDefault(),l(s.value)&&s.value!==""&&(t.style.display="none",e.style.display="block",o.innerText=s.value)}),document.getElementById("btn--dismiss").addEventListener("click",()=>{e.style.display="none",t.style.display="flex"})});
