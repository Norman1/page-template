class NavSidebar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.setupCollapsibles();
        this.highlightActiveLink();
        window.addEventListener('hashchange', this.highlightActiveLink.bind(this));
        
        // Listen for auth changes
        window.addEventListener('google-signin', () => {
            this.render();
            this.setupCollapsibles();
            this.highlightActiveLink();
        });
        window.addEventListener('google-signout', () => {
            this.render();
            this.setupCollapsibles();
            this.highlightActiveLink();
        });
    }

    disconnectedCallback() {
        window.removeEventListener('hashchange', this.highlightActiveLink.bind(this));
    }

    render() {
        const isLoggedIn = this.isUserLoggedIn();
        
        this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-size: 0.95rem;
        }

        #sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .nav-section {
          border-bottom: 1px solid #30363d;
        }

        .nav-toggle {
          background: none;
          border: none;
          font-weight: bold;
          font-size: 1rem;
          padding: 0.5rem 0;
          cursor: pointer;
          color: #f0f6fc;
          text-align: left;
          width: 100%;
        }

        .nav-toggle:hover {
          color: #58a6ff;
        }

        .nav-items {
          list-style: none;
          margin: 0;
          padding: 0.25rem 0 0.5rem 0.75rem;
        }

        .nav-items li {
          margin: 0.2rem 0;
        }

        .nav-items a {
          text-decoration: none;
          color: #f0f6fc;
          display: block;
          padding: 0.3rem 0;
          border-left: 2px solid transparent;
          padding-left: 0.5rem;
          transition: all 0.2s ease;
        }

        .nav-items a:hover {
          color: #58a6ff;
          border-left-color: #58a6ff;
        }

        .nav-items a.active {
          font-weight: bold;
          color: #58a6ff;
          border-left-color: #58a6ff;
          background: rgba(88, 166, 255, 0.1);
        }
        
        .auth-indicator {
          font-size: 0.8rem;
          color: #7d8590;
          margin-left: 0.5rem;
        }
      </style>

      <div id="sidebar-nav">
        <div class="nav-section">
          <button class="nav-toggle">Getting Started</button>
          <ul class="nav-items">
            <li><a href="#/page1">Quick Start Guide</a></li>
            <li><a href="#/page2">Advanced Configuration</a></li>
          </ul>
        </div>

        <div class="nav-section">
          <button class="nav-toggle">Development Tools</button>
          <ul class="nav-items">
            <li><a href="#/tool-a">Component Generator</a></li>
            <li><a href="#/tool-b">Theme Customizer</a></li>
          </ul>
        </div>
        
        ${isLoggedIn ? `
        <div class="nav-section">
          <button class="nav-toggle">Account</button>
          <ul class="nav-items">
            <li><a href="#/profile">My Profile</a></li>
          </ul>
        </div>
        ` : ''}

        <div class="nav-section">
          <button class="nav-toggle">Resources</button>
          <ul class="nav-items">
            <li><a href="#/about">About Learning Hub</a></li>
            <li><a href="#/privacy">Privacy & Terms</a></li>
            <li><a href="#/test-404">Test 404</a></li>
          </ul>
        </div>
      </div>
    `;
        
        // Re-setup after render is handled in render method
    }

    setupCollapsibles() {
        this.shadowRoot.querySelectorAll('.nav-toggle').forEach(button => {
            const list = button.nextElementSibling;
            // Initially open all
            list.style.display = 'block';

            button.addEventListener('click', () => {
                list.style.display = list.style.display === 'none' ? 'block' : 'none';
            });
        });
    }

    highlightActiveLink() {
        const current = location.hash;
        this.shadowRoot.querySelectorAll('.nav-items a').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === current);
        });
    }
    
    isUserLoggedIn() {
        const saved = localStorage.getItem('googleUser');
        return !!saved;
    }
}

customElements.define('nav-sidebar', NavSidebar);
