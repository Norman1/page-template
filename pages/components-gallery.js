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
                
                <h2>Scripture Quotes</h2>
                
                <p>Special components for Biblical content and quotations:</p>
                
                <h3>Standard Scripture Quote</h3>
                <div class="scripture-quote">
                    <blockquote>For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.</blockquote>
                    <cite>John 3:16 (NIV)</cite>
                </div>
                
                <div class="tab-content">
                    <strong>HTML:</strong>
                    <pre><code>&lt;div class="scripture-quote"&gt;
    &lt;blockquote&gt;For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.&lt;/blockquote&gt;
    &lt;cite&gt;John 3:16 (NIV)&lt;/cite&gt;
&lt;/div&gt;</code></pre>
                </div>
                
                <h3>Compact Scripture Quote</h3>
                <div class="scripture-quote compact">
                    <blockquote>Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.</blockquote>
                    <cite>Joshua 1:9 (NIV)</cite>
                </div>
                
                <div class="tab-content">
                    <strong>HTML:</strong>
                    <pre><code>&lt;div class="scripture-quote compact"&gt;
    &lt;blockquote&gt;Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.&lt;/blockquote&gt;
    &lt;cite&gt;Joshua 1:9 (NIV)&lt;/cite&gt;
&lt;/div&gt;</code></pre>
                </div>
                
                <h2>Video Embeds</h2>
                
                <p>Responsive video embedding for external content:</p>
                
                <h3>Standard Video Embed</h3>
                <div class="video-embed">
                    <iframe src="https://www.youtube.com/embed/jGwO_UgTS7I" title="Bach - Air on the G String"></iframe>
                    <p class="video-caption">Bach's Air on the G String - Example of embedded video content</p>
                </div>
                
                <div class="tab-content">
                    <strong>HTML:</strong>
                    <pre><code>&lt;div class="video-embed"&gt;
    &lt;iframe src="https://www.youtube.com/embed/VIDEO_ID" title="Video Title"&gt;&lt;/iframe&gt;
    &lt;p class="video-caption"&gt;Your video description here&lt;/p&gt;
&lt;/div&gt;</code></pre>
                </div>
                
                <h3>Responsive Video Embed</h3>
                <div class="video-embed responsive">
                    <iframe src="https://www.youtube.com/embed/jGwO_UgTS7I" title="Bach - Air on the G String"></iframe>
                    <p class="video-caption">Responsive version that maintains 16:9 aspect ratio</p>
                </div>
                
                <div class="tab-content">
                    <strong>HTML:</strong>
                    <pre><code>&lt;div class="video-embed responsive"&gt;
    &lt;iframe src="https://www.youtube.com/embed/VIDEO_ID" title="Video Title"&gt;&lt;/iframe&gt;
    &lt;p class="video-caption"&gt;Your video description here&lt;/p&gt;
&lt;/div&gt;</code></pre>
                </div>
                
                <h2>Interactive Form Elements</h2>
                
                <h3>Specialized Buttons</h3>
                <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin: 1rem 0;">
                    <button class="btn-commit">Save Changes</button>
                    <button class="btn-cancel">Cancel</button>
                    <button class="btn-abort">Delete</button>
                    <button class="btn-primary">Continue</button>
                    <button class="btn-secondary">Learn More</button>
                </div>
                
                <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin: 1rem 0;">
                    <button class="btn-commit" disabled>Save Changes</button>
                    <button class="btn-cancel" disabled>Cancel</button>
                    <button class="btn-abort" disabled>Delete</button>
                    <button class="btn-primary" disabled>Continue</button>
                    <button class="btn-secondary" disabled>Learn More</button>
                </div>
                
                <div class="tab-content">
                    <strong>Button HTML:</strong>
                    <pre><code>&lt;button class="btn-commit"&gt;Save Changes&lt;/button&gt;
&lt;button class="btn-cancel"&gt;Cancel&lt;/button&gt;
&lt;button class="btn-abort"&gt;Delete&lt;/button&gt;
&lt;button class="btn-primary"&gt;Continue&lt;/button&gt;
&lt;button class="btn-secondary"&gt;Learn More&lt;/button&gt;

&lt;!-- Disabled state --&gt;
&lt;button class="btn-commit" disabled&gt;Save Changes&lt;/button&gt;</code></pre>
                </div>
                
                <h3>Checkboxes</h3>
                <div class="checkbox-wrapper">
                    <input type="checkbox" id="check1" checked>
                    <label for="check1">I agree to the terms and conditions</label>
                </div>
                <div class="checkbox-wrapper">
                    <input type="checkbox" id="check2">
                    <label for="check2">Send me updates via email</label>
                </div>
                <div class="checkbox-wrapper disabled">
                    <input type="checkbox" id="check3" disabled>
                    <label for="check3">This option is disabled</label>
                </div>
                
                <div class="tab-content">
                    <strong>Checkbox HTML:</strong>
                    <pre><code>&lt;div class="checkbox-wrapper"&gt;
    &lt;input type="checkbox" id="check1" checked&gt;
    &lt;label for="check1"&gt;I agree to the terms and conditions&lt;/label&gt;
&lt;/div&gt;

&lt;!-- Disabled --&gt;
&lt;div class="checkbox-wrapper disabled"&gt;
    &lt;input type="checkbox" id="check3" disabled&gt;
    &lt;label for="check3"&gt;This option is disabled&lt;/label&gt;
&lt;/div&gt;</code></pre>
                </div>
                
                <h3>Radio Buttons</h3>
                <div class="radio-wrapper">
                    <input type="radio" id="radio1" name="difficulty" value="easy" checked>
                    <label for="radio1">Easy</label>
                </div>
                <div class="radio-wrapper">
                    <input type="radio" id="radio2" name="difficulty" value="medium">
                    <label for="radio2">Medium</label>
                </div>
                <div class="radio-wrapper">
                    <input type="radio" id="radio3" name="difficulty" value="hard">
                    <label for="radio3">Hard</label>
                </div>
                <div class="radio-wrapper disabled">
                    <input type="radio" id="radio4" name="difficulty2" value="expert" disabled>
                    <label for="radio4">Expert (disabled)</label>
                </div>
                
                <div class="tab-content">
                    <strong>Radio Button HTML:</strong>
                    <pre><code>&lt;div class="radio-wrapper"&gt;
    &lt;input type="radio" id="radio1" name="difficulty" value="easy" checked&gt;
    &lt;label for="radio1"&gt;Easy&lt;/label&gt;
&lt;/div&gt;

&lt;!-- Disabled --&gt;
&lt;div class="radio-wrapper disabled"&gt;
    &lt;input type="radio" id="radio4" disabled&gt;
    &lt;label for="radio4"&gt;Expert (disabled)&lt;/label&gt;
&lt;/div&gt;</code></pre>
                </div>
                
                <h3>Text Inputs</h3>
                <div class="input-wrapper">
                    <label for="input-small">Small Input:</label>
                    <input type="text" id="input-small" class="input-small" placeholder="Short text">
                </div>
                <div class="input-wrapper">
                    <label for="input-medium">Medium Input:</label>
                    <input type="text" id="input-medium" class="input-medium" placeholder="Medium length text">
                </div>
                <div class="input-wrapper">
                    <label for="input-large">Large Input:</label>
                    <input type="text" id="input-large" class="input-large" placeholder="Longer text input">
                </div>
                <div class="input-wrapper">
                    <label for="input-full">Full Width Input:</label>
                    <input type="text" id="input-full" class="input-full" placeholder="Full width input">
                </div>
                <div class="input-wrapper">
                    <label for="input-disabled">Disabled Input:</label>
                    <input type="text" id="input-disabled" class="input-medium" placeholder="Cannot edit this" disabled>
                </div>
                
                <div class="tab-content">
                    <strong>Text Input HTML:</strong>
                    <pre><code>&lt;div class="input-wrapper"&gt;
    &lt;label for="input-small"&gt;Small Input:&lt;/label&gt;
    &lt;input type="text" id="input-small" class="input-small" placeholder="Short text"&gt;
&lt;/div&gt;

&lt;!-- Available sizes: input-small, input-medium, input-large, input-full --&gt;
&lt;!-- Disabled state --&gt;
&lt;input type="text" class="input-medium" disabled&gt;</code></pre>
                </div>
                
                <h3>Custom Dropdowns</h3>
                <div class="select-wrapper">
                    <label for="select-small">Small Select:</label>
                    <select id="select-small" class="select-small">
                        <option>Choose option...</option>
                        <option>Genesis</option>
                        <option>Exodus</option>
                        <option>Leviticus</option>
                    </select>
                </div>
                <div class="select-wrapper">
                    <label for="select-medium">Medium Select:</label>
                    <select id="select-medium" class="select-medium">
                        <option>Choose difficulty...</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                    </select>
                </div>
                <div class="select-wrapper">
                    <label for="select-disabled">Disabled Select:</label>
                    <select id="select-disabled" class="select-medium" disabled>
                        <option>Cannot change this</option>
                    </select>
                </div>
                
                <div class="tab-content">
                    <strong>Dropdown HTML:</strong>
                    <pre><code>&lt;div class="select-wrapper"&gt;
    &lt;label for="select-small"&gt;Small Select:&lt;/label&gt;
    &lt;select id="select-small" class="select-small"&gt;
        &lt;option&gt;Choose option...&lt;/option&gt;
        &lt;option&gt;Genesis&lt;/option&gt;
        &lt;option&gt;Exodus&lt;/option&gt;
    &lt;/select&gt;
&lt;/div&gt;

&lt;!-- Available sizes: select-small, select-medium, select-large, select-full --&gt;</code></pre>
                </div>
                
                <h3>Enhanced Textareas</h3>
                <div class="textarea-wrapper">
                    <label for="textarea-small">Small Textarea:</label>
                    <textarea id="textarea-small" class="textarea-small input-full" placeholder="Short notes..."></textarea>
                </div>
                <div class="textarea-wrapper">
                    <label for="textarea-medium">Medium Textarea:</label>
                    <textarea id="textarea-medium" class="textarea-medium input-full" placeholder="Study notes..."></textarea>
                </div>
                <div class="textarea-wrapper">
                    <label for="textarea-large">Large Textarea:</label>
                    <textarea id="textarea-large" class="textarea-large input-full" placeholder="Detailed commentary..."></textarea>
                </div>
                <div class="textarea-wrapper">
                    <label for="textarea-disabled">Disabled Textarea:</label>
                    <textarea id="textarea-disabled" class="textarea-medium input-full" placeholder="Cannot edit this" disabled></textarea>
                </div>
                
                <div class="tab-content">
                    <strong>Textarea HTML:</strong>
                    <pre><code>&lt;div class="textarea-wrapper"&gt;
    &lt;label for="textarea-medium"&gt;Study Notes:&lt;/label&gt;
    &lt;textarea id="textarea-medium" class="textarea-medium input-full" placeholder="Study notes..."&gt;&lt;/textarea&gt;
&lt;/div&gt;

&lt;!-- Available sizes: textarea-small, textarea-medium, textarea-large, textarea-auto --&gt;</code></pre>
                </div>
                
                <h3>Toggle Switches</h3>
                <div class="toggle-wrapper">
                    <div class="toggle-switch">
                        <input type="checkbox" id="toggle1" checked>
                        <span class="toggle-slider"></span>
                    </div>
                    <label for="toggle1">Enable notifications</label>
                </div>
                <div class="toggle-wrapper">
                    <div class="toggle-switch">
                        <input type="checkbox" id="toggle2">
                        <span class="toggle-slider"></span>
                    </div>
                    <label for="toggle2">Show hints during quiz</label>
                </div>
                <div class="toggle-wrapper disabled">
                    <div class="toggle-switch">
                        <input type="checkbox" id="toggle3" disabled>
                        <span class="toggle-slider"></span>
                    </div>
                    <label for="toggle3">Premium feature (disabled)</label>
                </div>
                
                <div class="tab-content">
                    <strong>Toggle Switch HTML:</strong>
                    <pre><code>&lt;div class="toggle-wrapper"&gt;
    &lt;div class="toggle-switch"&gt;
        &lt;input type="checkbox" id="toggle1" checked&gt;
        &lt;span class="toggle-slider"&gt;&lt;/span&gt;
    &lt;/div&gt;
    &lt;label for="toggle1"&gt;Enable notifications&lt;/label&gt;
&lt;/div&gt;

&lt;!-- Disabled --&gt;
&lt;div class="toggle-wrapper disabled"&gt;
    &lt;div class="toggle-switch"&gt;
        &lt;input type="checkbox" id="toggle3" disabled&gt;
        &lt;span class="toggle-slider"&gt;&lt;/span&gt;
    &lt;/div&gt;
    &lt;label for="toggle3"&gt;Premium feature (disabled)&lt;/label&gt;
&lt;/div&gt;</code></pre>
                </div>
                
                <h2>Progress Bars</h2>
                
                <h3>Standard Progress Bars</h3>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 65%"></div>
                    <div class="progress-text">65%</div>
                </div>
                
                <div class="progress-bar success">
                    <div class="progress-fill" style="width: 100%"></div>
                    <div class="progress-text">Complete!</div>
                </div>
                
                <div class="progress-bar warning">
                    <div class="progress-fill" style="width: 25%"></div>
                    <div class="progress-text">25%</div>
                </div>
                
                <div class="progress-bar danger">
                    <div class="progress-fill" style="width: 10%"></div>
                    <div class="progress-text">10%</div>
                </div>
                
                <h3>Thin Progress Bar</h3>
                <div class="progress-bar thin">
                    <div class="progress-fill" style="width: 45%"></div>
                </div>
                
                <h3>Reading Progress Example</h3>
                <div class="reading-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 73%"></div>
                        <div class="progress-text">Day 267</div>
                    </div>
                    <div class="progress-label">267 of 365 days</div>
                </div>
                
                <div class="tab-content">
                    <strong>Progress Bar HTML:</strong>
                    <pre><code>&lt;div class="progress-bar"&gt;
    &lt;div class="progress-fill" style="width: 65%"&gt;&lt;/div&gt;
    &lt;div class="progress-text"&gt;65%&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Variants: success, warning, danger --&gt;
&lt;div class="progress-bar success"&gt;
    &lt;div class="progress-fill" style="width: 100%"&gt;&lt;/div&gt;
    &lt;div class="progress-text"&gt;Complete!&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Thin version --&gt;
&lt;div class="progress-bar thin"&gt;
    &lt;div class="progress-fill" style="width: 45%"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Reading progress with label --&gt;
&lt;div class="reading-progress"&gt;
    &lt;div class="progress-bar"&gt;
        &lt;div class="progress-fill" style="width: 73%"&gt;&lt;/div&gt;
        &lt;div class="progress-text"&gt;Day 267&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="progress-label"&gt;267 of 365 days&lt;/div&gt;
&lt;/div&gt;</code></pre>
                </div>
                
                <h2>Badges & Tags</h2>
                
                <h3>Standard Badges</h3>
                <div style="margin: 1rem 0;">
                    <span class="badge badge-primary">Primary</span>
                    <span class="badge badge-success">Success</span>
                    <span class="badge badge-warning">Warning</span>
                    <span class="badge badge-danger">Danger</span>
                    <span class="badge badge-secondary">Secondary</span>
                </div>
                
                <h3>Large Badges</h3>
                <div style="margin: 1rem 0;">
                    <span class="badge badge-primary badge-large">Large Primary</span>
                    <span class="badge badge-success badge-large">Large Success</span>
                </div>
                
                <h3>Pill Badges</h3>
                <div style="margin: 1rem 0;">
                    <span class="badge badge-primary badge-pill">Pill Shape</span>
                    <span class="badge badge-warning badge-pill">Round Badge</span>
                </div>
                
                <h3>Biblical Study Badges</h3>
                <div style="margin: 1rem 0;">
                    <span class="badge badge-difficulty-beginner">Beginner</span>
                    <span class="badge badge-difficulty-intermediate">Intermediate</span>
                    <span class="badge badge-difficulty-advanced">Advanced</span>
                </div>
                <div style="margin: 1rem 0;">
                    <span class="badge badge-topic">Historical Context</span>
                    <span class="badge badge-topic">Theology</span>
                    <span class="badge badge-completed">Completed</span>
                </div>
                
                <div class="tab-content">
                    <strong>Badge HTML:</strong>
                    <pre><code>&lt;span class="badge badge-primary"&gt;Primary&lt;/span&gt;
&lt;span class="badge badge-success"&gt;Success&lt;/span&gt;
&lt;span class="badge badge-warning"&gt;Warning&lt;/span&gt;
&lt;span class="badge badge-danger"&gt;Danger&lt;/span&gt;

&lt;!-- Large badges --&gt;
&lt;span class="badge badge-primary badge-large"&gt;Large Primary&lt;/span&gt;

&lt;!-- Pill shape --&gt;
&lt;span class="badge badge-primary badge-pill"&gt;Pill Shape&lt;/span&gt;

&lt;!-- Biblical study specific --&gt;
&lt;span class="badge badge-difficulty-beginner"&gt;Beginner&lt;/span&gt;
&lt;span class="badge badge-topic"&gt;Historical Context&lt;/span&gt;
&lt;span class="badge badge-completed"&gt;Completed&lt;/span&gt;</code></pre>
                </div>
                
                <h2>Feedback Messages</h2>
                
                <div class="message message-success">
                    Correct! You successfully answered the question.
                </div>
                
                <div class="message message-error">
                    Incorrect answer. Please try again.
                </div>
                
                <div class="message message-warning">
                    Warning: You have 2 attempts remaining.
                </div>
                
                <div class="message message-info">
                    Hint: This event took place in the first century AD.
                </div>
                
                <div class="message message-success compact">
                    Quiz completed successfully!
                </div>
                
                <div class="tab-content">
                    <strong>Message HTML:</strong>
                    <pre><code>&lt;div class="message message-success"&gt;
    Correct! You successfully answered the question.
&lt;/div&gt;

&lt;div class="message message-error"&gt;
    Incorrect answer. Please try again.
&lt;/div&gt;

&lt;div class="message message-warning"&gt;
    Warning: You have 2 attempts remaining.
&lt;/div&gt;

&lt;div class="message message-info"&gt;
    Hint: This event took place in the first century AD.
&lt;/div&gt;

&lt;!-- Compact version --&gt;
&lt;div class="message message-success compact"&gt;
    Quiz completed successfully!
&lt;/div&gt;</code></pre>
                </div>
                
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
                        <tr>
                            <td><code>.scripture-quote</code></td>
                            <td>Biblical quotations with citation</td>
                            <td>Styled blockquotes for scripture passages</td>
                        </tr>
                        <tr>
                            <td><code>.scripture-quote.compact</code></td>
                            <td>Smaller scripture quotes</td>
                            <td>More compact version for shorter verses</td>
                        </tr>
                        <tr>
                            <td><code>.video-embed</code></td>
                            <td>Video embedding container</td>
                            <td>Contains iframe and caption for videos</td>
                        </tr>
                        <tr>
                            <td><code>.video-embed.responsive</code></td>
                            <td>Responsive video container</td>
                            <td>Maintains 16:9 aspect ratio on all screen sizes</td>
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

        // Make toggle switches interactive
        this.setupToggleSwitches();
    }

    setupToggleSwitches() {
        // Add click handlers to toggle switches
        this.querySelectorAll('.toggle-switch input[type="checkbox"]').forEach(toggle => {
            toggle.addEventListener('change', function() {
                // The CSS handles the visual state change automatically
                // This is where you could add custom logic if needed
                console.log(`Toggle ${this.id} is now: ${this.checked ? 'ON' : 'OFF'}`);
            });
        });

        // Make the wrapper clickable too (better UX)
        this.querySelectorAll('.toggle-wrapper').forEach(wrapper => {
            if (!wrapper.classList.contains('disabled')) {
                wrapper.addEventListener('click', function(e) {
                    // Only handle clicks on the wrapper itself, not the input
                    if (e.target === this || e.target.classList.contains('toggle-slider')) {
                        const toggle = this.querySelector('input[type="checkbox"]');
                        if (toggle && !toggle.disabled) {
                            toggle.checked = !toggle.checked;
                            // Trigger change event
                            toggle.dispatchEvent(new Event('change'));
                        }
                    }
                });
            }
        });
    }
}

customElements.define('components-gallery', ComponentsGallery);
