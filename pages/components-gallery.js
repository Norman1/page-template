import { generateTOC } from '../utils/toc-generator.js';

class ComponentsGallery extends HTMLElement {
    connectedCallback() {
        const layout = document.querySelector('main-layout');
        layout.setAttribute('with-right', '');

        // Clear old right sidebar content from layout
        layout.querySelectorAll('[slot="right"]').forEach(el => el.remove());

        // Set main content
        this.innerHTML = `
            <div class="content-area">
                <h1>Components Gallery</h1>
                
                <div class="intro-section">
                    <p>This page showcases all the styled components and UI elements available in the framework's global CSS. Use these as building blocks for consistent design across your application.</p>
                </div>
                
                <div class="tab-content">
                    <strong>Intro Section HTML:</strong>
                    <pre><code>&lt;div class="intro-section"&gt;
    &lt;p&gt;Your highlighted introduction text here.&lt;/p&gt;
&lt;/div&gt;</code></pre>
                </div>
                
                <h2>Typography</h2>
                
                <h1>Heading 1 - Main Page Title</h1>
                <h2>Heading 2 - Section Headers</h2>
                <h3>Heading 3 - Subsection Headers</h3>
                <h4>Heading 4 - Minor Headers</h4>
                
                <p>This is a regular paragraph with some <strong>bold text</strong> and <a href="#">a sample link</a>. The typography is optimized for readability with proper line height and spacing.</p>
                
                <h2>Code Elements</h2>
                
                <h3>Inline Code</h3>
                <p>Use inline code for short snippets: <code>const variable = 'value';</code></p>
                
                <div class="tab-content">
                    <strong>HTML:</strong>
                    <pre><code>&lt;p&gt;Use inline code for short snippets: &lt;code&gt;const variable = 'value';&lt;/code&gt;&lt;/p&gt;</code></pre>
                </div>
                
                <h3>Code Blocks</h3>
                <pre><code>// Code block example
function exampleFunction() {
    return 'This is a pre-formatted code block';
}

const result = exampleFunction();
console.log(result);</code></pre>
                
                <div class="tab-content">
                    <strong>HTML:</strong>
                    <pre><code>&lt;pre&gt;&lt;code&gt;// Code block example
function exampleFunction() {
    return 'This is a pre-formatted code block';
}

const result = exampleFunction();
console.log(result);&lt;/code&gt;&lt;/pre&gt;</code></pre>
                </div>
                
                <h2>Callout Boxes</h2>
                
                <p>Callout boxes provide visual emphasis for different types of information:</p>
                
                <div class="callout callout-info">
                    <strong>Info Callout:</strong> Use this for general information and tips.
                </div>
                
                <div class="tab-content">
                    <strong>HTML:</strong>
                    <pre><code>&lt;div class="callout callout-info"&gt;
    &lt;strong&gt;Info Callout:&lt;/strong&gt; Use this for general information and tips.
&lt;/div&gt;</code></pre>
                </div>
                
                <div class="callout callout-success">
                    <strong>Success Callout:</strong> Use this for positive feedback and completed actions.
                </div>
                
                <div class="tab-content">
                    <strong>HTML:</strong>
                    <pre><code>&lt;div class="callout callout-success"&gt;
    &lt;strong&gt;Success Callout:&lt;/strong&gt; Use this for positive feedback and completed actions.
&lt;/div&gt;</code></pre>
                </div>
                
                <div class="callout callout-warning">
                    <strong>Warning Callout:</strong> Use this for important cautions and potential issues.
                </div>
                
                <div class="tab-content">
                    <strong>HTML:</strong>
                    <pre><code>&lt;div class="callout callout-warning"&gt;
    &lt;strong&gt;Warning Callout:&lt;/strong&gt; Use this for important cautions and potential issues.
&lt;/div&gt;</code></pre>
                </div>
                
                <div class="callout callout-error">
                    <strong>Error Callout:</strong> Use this for errors and critical information.
                </div>
                
                <div class="tab-content">
                    <strong>HTML:</strong>
                    <pre><code>&lt;div class="callout callout-error"&gt;
    &lt;strong&gt;Error Callout:&lt;/strong&gt; Use this for errors and critical information.
&lt;/div&gt;</code></pre>
                </div>
                
                <h2>Form Elements</h2>
                
                <p>All form elements are automatically styled for the dark theme:</p>
                
                <div style="max-width: 400px; margin: 1rem 0;">
                    <label for="sample-input" style="display: block; margin-bottom: 0.5rem; color: #f0f6fc;">Sample Input:</label>
                    <input type="text" id="sample-input" placeholder="Enter some text..." style="width: 100%; margin-bottom: 1rem;">
                    
                    <label for="sample-textarea" style="display: block; margin-bottom: 0.5rem; color: #f0f6fc;">Sample Textarea:</label>
                    <textarea id="sample-textarea" placeholder="Enter multiple lines..." rows="3" style="width: 100%; margin-bottom: 1rem; resize: vertical;"></textarea>
                    
                    <label for="sample-select" style="display: block; margin-bottom: 0.5rem; color: #f0f6fc;">Sample Select:</label>
                    <select id="sample-select" style="width: 100%; margin-bottom: 1rem;">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select>
                    
                    <button type="button">Sample Button</button>
                </div>
                
                <div class="tab-content">
                    <strong>Form HTML:</strong>
                    <pre><code>&lt;label for="input-id"&gt;Input Label:&lt;/label&gt;
&lt;input type="text" id="input-id" placeholder="Enter text..."&gt;

&lt;label for="textarea-id"&gt;Textarea Label:&lt;/label&gt;
&lt;textarea id="textarea-id" placeholder="Enter multiple lines..." rows="3"&gt;&lt;/textarea&gt;

&lt;label for="select-id"&gt;Select Label:&lt;/label&gt;
&lt;select id="select-id"&gt;
    &lt;option&gt;Option 1&lt;/option&gt;
    &lt;option&gt;Option 2&lt;/option&gt;
&lt;/select&gt;

&lt;button type="button"&gt;Button Text&lt;/button&gt;</code></pre>
                </div>
                
                <h2>Tables</h2>
                
                <table>
                    <thead>
                        <tr>
                            <th>Component</th>
                            <th>Class Name</th>
                            <th>Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Intro Section</td>
                            <td><code>.intro-section</code></td>
                            <td>Highlighted introduction paragraphs</td>
                        </tr>
                        <tr>
                            <td>Info Callout</td>
                            <td><code>.callout.callout-info</code></td>
                            <td>General information boxes</td>
                        </tr>
                        <tr>
                            <td>Success Callout</td>
                            <td><code>.callout.callout-success</code></td>
                            <td>Success and positive feedback</td>
                        </tr>
                        <tr>
                            <td>Warning Callout</td>
                            <td><code>.callout.callout-warning</code></td>
                            <td>Warnings and cautions</td>
                        </tr>
                        <tr>
                            <td>Error Callout</td>
                            <td><code>.callout.callout-error</code></td>
                            <td>Errors and critical information</td>
                        </tr>
                    </tbody>
                </table>
                
                <h2>Lists</h2>
                
                <h3>Unordered List</h3>
                <ul>
                    <li>First item with <strong>bold emphasis</strong></li>
                    <li>Second item with <a href="#">a link</a></li>
                    <li>Third item with <code>inline code</code></li>
                    <li>Fourth item with regular text</li>
                </ul>
                
                <h3>Ordered List</h3>
                <ol>
                    <li>Step one of the process</li>
                    <li>Step two with detailed explanation</li>
                    <li>Step three to complete the task</li>
                    <li>Final step for verification</li>
                </ol>
                
                <h2>Available CSS Classes</h2>
                
                <p>Here's a quick reference of all available CSS classes:</p>
                
                <table>
                    <thead>
                        <tr>
                            <th>Class Name</th>
                            <th>Purpose</th>
                            <th>Usage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>.intro-section</code></td>
                            <td>Highlighted introduction boxes</td>
                            <td>Wrap important intro content</td>
                        </tr>
                        <tr>
                            <td><code>.callout</code></td>
                            <td>Base callout styling</td>
                            <td>Always combine with specific type</td>
                        </tr>
                        <tr>
                            <td><code>.callout-info</code></td>
                            <td>Blue information callouts</td>
                            <td>General tips and information</td>
                        </tr>
                        <tr>
                            <td><code>.callout-success</code></td>
                            <td>Green success callouts</td>
                            <td>Positive feedback, completed actions</td>
                        </tr>
                        <tr>
                            <td><code>.callout-warning</code></td>
                            <td>Orange warning callouts</td>
                            <td>Important cautions, potential issues</td>
                        </tr>
                        <tr>
                            <td><code>.callout-error</code></td>
                            <td>Red error callouts</td>
                            <td>Errors, critical information</td>
                        </tr>
                        <tr>
                            <td><code>.content-area</code></td>
                            <td>Content width optimization</td>
                            <td>Wrap main page content for better readability</td>
                        </tr>
                        <tr>
                            <td><code>.code-tabs</code></td>
                            <td>Code example containers</td>
                            <td>Group multiple code examples</td>
                        </tr>
                        <tr>
                            <td><code>.tab-content</code></td>
                            <td>Individual code examples</td>
                            <td>Contains labeled code blocks</td>
                        </tr>
                    </tbody>
                </table>
                
                <div class="callout callout-info">
                    <strong>Usage Note:</strong> All these components are automatically styled by the global CSS. Simply use the appropriate HTML elements and CSS classes to achieve consistent styling throughout your application.
                </div>
                
                <div class="tab-content">
                    <strong>Content Area Wrapper:</strong>
                    <pre><code>&lt;div class="content-area"&gt;
    &lt;!-- Your page content goes here --&gt;
    &lt;h1&gt;Page Title&lt;/h1&gt;
    &lt;p&gt;Page content...&lt;/p&gt;
&lt;/div&gt;</code></pre>
                </div>
            </div>
        `;

        // Generate TOC from headings and add to right sidebar
        const toc = generateTOC(this);
        const sidebar = document.createElement('div');
        sidebar.setAttribute('slot', 'right');
        sidebar.appendChild(toc);

        // Inject sidebar into layout
        layout.appendChild(sidebar);
    }
}

customElements.define('components-gallery', ComponentsGallery);
