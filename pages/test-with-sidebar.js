class TestWithSidebar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div slot="main" id="main-content">
                Loading...
            </div>
            <div slot="right" id="right-content">
                <h3>Table of Contents</h3>
                <ul>
                    <li><a href="#section-1">Section 1: Basic Content</a></li>
                    <li><a href="#section-2">Section 2: More Content</a></li>
                    <li><a href="#section-3">Section 3: List Content</a></li>
                    <li><a href="#section-4">Section 4: Final Content</a></li>
                </ul>
                
                <h3>Related Links</h3>
                <ul>
                    <li><a href="#/test-scrollable">Scrollable Test</a></li>
                    <li><a href="#/test-minimal">Minimal Test</a></li>
                    <li><a href="#/test-full">Full Content Test</a></li>
                </ul>
                
                <h3>Settings</h3>
                <p>Right sidebar width: 220px</p>
                <p>Layout: Three-column</p>
            </div>
        `;
        
        this.loadContent();
    }
    
    async loadContent() {
        try {
            const response = await fetch('./templates/test-with-sidebar.html');
            const content = await response.text();
            document.getElementById('main-content').innerHTML = content;
        } catch (error) {
            document.getElementById('main-content').innerHTML = '<p>Error loading content</p>';
        }
    }
}

customElements.define('test-with-sidebar', TestWithSidebar);