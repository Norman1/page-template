class TestScrollable extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div slot="main" id="main-content">
                Loading...
            </div>
            <div slot="right" id="right-content">
                <h3>Long Table of Contents</h3>
                <ul>
                    <li><a href="#section-a">Section A: Introduction</a></li>
                    <li><a href="#section-b">Section B: Overview</a></li>
                    <li><a href="#section-c">Section C: Getting Started</a></li>
                    <li><a href="#section-d">Section D: Configuration</a></li>
                    <li><a href="#section-e">Section E: Advanced Topics</a></li>
                    <li><a href="#section-f">Section F: Best Practices</a></li>
                    <li><a href="#section-g">Section G: Troubleshooting</a></li>
                    <li><a href="#section-h">Section H: API Reference</a></li>
                    <li><a href="#section-i">Section I: Examples</a></li>
                    <li><a href="#section-j">Section J: Performance</a></li>
                    <li><a href="#section-k">Section K: Security</a></li>
                    <li><a href="#section-l">Section L: Deployment</a></li>
                    <li><a href="#section-m">Section M: Monitoring</a></li>
                    <li><a href="#section-n">Section N: Maintenance</a></li>
                    <li><a href="#section-o">Section O: Migration</a></li>
                    <li><a href="#section-p">Section P: Conclusion</a></li>
                </ul>
                
                <h3>Additional Resources</h3>
                <ul>
                    <li><a href="#/docs/guide-1">Guide 1</a></li>
                    <li><a href="#/docs/guide-2">Guide 2</a></li>
                    <li><a href="#/docs/guide-3">Guide 3</a></li>
                    <li><a href="#/docs/guide-4">Guide 4</a></li>
                    <li><a href="#/docs/guide-5">Guide 5</a></li>
                    <li><a href="#/docs/guide-6">Guide 6</a></li>
                    <li><a href="#/docs/guide-7">Guide 7</a></li>
                    <li><a href="#/docs/guide-8">Guide 8</a></li>
                    <li><a href="#/docs/guide-9">Guide 9</a></li>
                    <li><a href="#/docs/guide-10">Guide 10</a></li>
                </ul>
                
                <h3>External Links</h3>
                <ul>
                    <li><a href="#">Documentation Site</a></li>
                    <li><a href="#">GitHub Repository</a></li>
                    <li><a href="#">Community Forum</a></li>
                    <li><a href="#">Stack Overflow</a></li>
                    <li><a href="#">Bug Reports</a></li>
                    <li><a href="#">Feature Requests</a></li>
                    <li><a href="#">Changelog</a></li>
                    <li><a href="#">Release Notes</a></li>
                    <li><a href="#">Migration Guide</a></li>
                    <li><a href="#">API Documentation</a></li>
                </ul>
                
                <h3>Tools & Utilities</h3>
                <ul>
                    <li><a href="#">Code Generator</a></li>
                    <li><a href="#">Configuration Validator</a></li>
                    <li><a href="#">Performance Profiler</a></li>
                    <li><a href="#">Debug Console</a></li>
                    <li><a href="#">Test Runner</a></li>
                    <li><a href="#">Build Tools</a></li>
                    <li><a href="#">Deployment Scripts</a></li>
                    <li><a href="#">Monitoring Dashboard</a></li>
                </ul>
            </div>
        `;
        
        this.loadContent();
    }
    
    async loadContent() {
        try {
            const response = await fetch('./templates/test-scrollable.html');
            const content = await response.text();
            document.getElementById('main-content').innerHTML = content;
        } catch (error) {
            document.getElementById('main-content').innerHTML = '<p>Error loading content</p>';
        }
    }
}

customElements.define('test-scrollable', TestScrollable);