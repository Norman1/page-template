import { loadTemplate, createLoadingElement } from '../utils/template-loader.js';

class PageTwo extends HTMLElement {
    async connectedCallback() {
        // Clear right sidebar
        const layout = document.querySelector('main-layout');
        layout?.removeAttribute('with-right');
        layout?.querySelectorAll('[slot="right"]').forEach(el => el.remove());
        
        // Show loading state
        this.appendChild(createLoadingElement());
        
        // Load template
        const templateContent = await loadTemplate('./templates/page-two.html');
        this.innerHTML = templateContent;
    }
}

customElements.define('page-two', PageTwo);