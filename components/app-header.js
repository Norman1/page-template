import '../components/custom-auth.js';

class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          width: 100%;
          font-family: system-ui, sans-serif;
        }

        .header {
          position: relative;
          height: 180px;              /* adjust as needed */
          overflow: hidden;
        }

        .header img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;         /* fills the box, keeping aspect */
        }

        .auth-wrapper {
          position: absolute;
          top: 1rem;
          right: 1.5rem;
        }
      </style>

      <div class="header">
        <img src="assets/header-banner.png" alt="Learning Hub Banner">
        <div class="auth-wrapper">
          <custom-auth></custom-auth>
        </div>
      </div>
    `;
    }
}

customElements.define('app-header', AppHeader);
