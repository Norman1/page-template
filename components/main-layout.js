class MainLayout extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
      <style>
:host {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #0f1419;
  color: #f0f6fc;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100vh;
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: border-box;
}

/* Non-sticky header */
header {
  position: relative;
  height: 60px;
  background: #161b22;
  border-bottom: 1px solid #30363d;
}

/* Content wrapper with sidebars */
.content-wrapper {
  display: flex;
  flex: 1;
}

/* Fixed left sidebar */
aside.left {
  position: sticky;
  top: 0;
  width: 200px;
  height: 100vh;
  background: #161b22;
  border-right: 1px solid #30363d;
  overflow-y: auto;
  padding: 1rem;
  flex-shrink: 0;
}

/* Fixed right sidebar */
aside.right {
  position: sticky;
  top: 0;
  width: 220px;
  height: 100vh;
  background: #161b22;
  border-left: 1px solid #30363d;
  overflow-y: auto;
  padding: 1rem;
  flex-shrink: 0;
}

:host(:not([with-right])) .right {
  display: none;
}

/* Main content area - scrollable */
main {
  flex: 1;
  background: #161b22;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

/* Footer within main content */
footer {
  background: #21262d;
  padding: 1rem;
  margin: auto -1.5rem -1.5rem -1.5rem;
  border-top: 1px solid #30363d;
  margin-top: auto;
}

/* Mobile menu toggle */
.menu-toggle {
  display: none;
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1000;
  padding: 0.5rem;
  line-height: 1;
}

.menu-toggle:hover {
  background: rgba(0,0,0,0.1);
  border-radius: 4px;
}

/* Mobile styles */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }
  
  aside.left {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 250px;
    transform: translateX(-100%);
    z-index: 999;
    box-shadow: 2px 0 10px rgba(0,0,0,0.1);
  }
  
  :host([mobile-menu-open]) aside.left {
    transform: translateX(0);
  }
  
  /* Hide right sidebar on mobile */
  aside.right {
    display: none;
  }
  
  main {
    margin-left: 0;
    margin-right: 0;
    padding: 1rem;
  }
  
  /* Overlay when menu is open */
  .mobile-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 998;
  }
  
  :host([mobile-menu-open]) .mobile-overlay {
    display: block;
  }
}


#sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 0.95rem;
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
}


      </style>

      <header>
        <button class="menu-toggle" aria-label="Toggle menu">☰</button>
        <slot name="header"></slot>
      </header>

      <div class="content-wrapper">
        <aside class="left">
          <slot name="nav"></slot>
        </aside>

        <main>
          <slot name="main"></slot>
          
          <footer>
            <slot name="footer"></slot>
          </footer>
        </main>

        <aside class="right">
          <slot name="right"></slot>
        </aside>
      </div>
      
      <div class="mobile-overlay"></div>
    `;
    
        this.setupMobileMenu();
        this.setupSwipeGestures();
    }
    
    setupMobileMenu() {
        const menuToggle = this.shadowRoot.querySelector('.menu-toggle');
        const overlay = this.shadowRoot.querySelector('.mobile-overlay');
        
        menuToggle.addEventListener('click', () => {
            this.toggleAttribute('mobile-menu-open');
        });
        
        overlay.addEventListener('click', () => {
            this.removeAttribute('mobile-menu-open');
        });
    }

    setupSwipeGestures() {
        let touchStartX = 0;
        let touchStartY = 0;
        let isSwiping = false;

        // Listen for touch events on the main content area
        const main = this.shadowRoot.querySelector('main');
        
        main.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            isSwiping = false;
        });
        
        main.addEventListener('touchmove', (e) => {
            if (!touchStartX || !touchStartY) return;
            
            const touchCurrentX = e.touches[0].clientX;
            const touchCurrentY = e.touches[0].clientY;
            
            const diffX = touchStartX - touchCurrentX;
            const diffY = touchStartY - touchCurrentY;
            
            // Only trigger if horizontal swipe is more significant than vertical
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                isSwiping = true;
                
                // Swipe right (showing menu) - only if menu is closed
                if (diffX < -50 && !this.hasAttribute('mobile-menu-open')) {
                    this.setAttribute('mobile-menu-open', '');
                }
                // Swipe left (hiding menu) - only if menu is open  
                else if (diffX > 50 && this.hasAttribute('mobile-menu-open')) {
                    this.removeAttribute('mobile-menu-open');
                }
            }
        });
        
        main.addEventListener('touchend', () => {
            touchStartX = 0;
            touchStartY = 0;
            isSwiping = false;
        });
    }
}

customElements.define('main-layout', MainLayout);
