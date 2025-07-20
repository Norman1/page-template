class TestFull extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div slot="main" id="main-content">
                Loading...
            </div>
        `;
        
        this.loadContent();
    }
    
    async loadContent() {
        try {
            const response = await fetch('./templates/test-full.html');
            const content = await response.text();
            document.getElementById('main-content').innerHTML = content;
        } catch (error) {
            document.getElementById('main-content').innerHTML = '<p>Error loading content</p>';
        }
    }
}

customElements.define('test-full', TestFull);