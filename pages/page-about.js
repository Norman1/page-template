import { loadTemplate } from '../utils/template-loader.js';

class PageAbout extends HTMLElement {
    async connectedCallback() {
        // Clear right sidebar
        const layout = document.querySelector('main-layout');
        layout?.removeAttribute('with-right');
        layout?.querySelectorAll('[slot="right"]').forEach(el => el.remove());
        
        const templateContent = await loadTemplate('./templates/page-about.html');
        this.innerHTML = templateContent;
    }
}

customElements.define('page-about', PageAbout);