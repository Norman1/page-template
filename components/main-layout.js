class MainLayout extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
      <style>
:host {
  display: block;
  height: 100vh;
  font-family: sans-serif;
}

header,
footer {
  background: #eeeeee;
  padding: 1rem;
}

.layout {
  display: grid;
  grid-template-columns: 200px 1fr 250px;
  gap: 1rem;
  padding: 1rem;
}

aside.left {
  background: #f9f9f9;
  position: sticky;
  top: 1rem;
  align-self: start;
  padding: 1rem;
}

main {
  background: #fcfcfc;
  padding: 1rem;
  min-width: 0;
}

aside.right {
  background: #f0f0f0;
  position: sticky;
  top: 1rem;
  align-self: start;
  padding: 1rem;
}

footer {
  padding: 1rem;
}


#sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 0.95rem;
}

.nav-section {
  border-bottom: 1px solid #ddd;
}

.nav-toggle {
  background: none;
  border: none;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  color: #333;
  text-align: left;
  width: 100%;
}

.nav-toggle:hover {
  color: #0055aa;
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
  color: #333;
  display: block;
  padding: 0.2rem 0;
  border-left: 2px solid transparent;
  padding-left: 0.5rem;
}

.nav-items a:hover {
  color: #0055aa;
  border-left-color: #ccc;
}

.nav-items a.active {
  font-weight: bold;
  color: #0055aa;
  border-left-color: #0055aa;
}


      </style>

       <header>
        <slot name="header"></slot>
      </header>

      <div class="layout">
        <aside class="left">
          <slot name="nav"></slot>
        </aside>

        <main>
          <slot name="main"></slot>
        </main>

        <aside class="right">
          <slot name="right"></slot>
        </aside>
      </div>

      <footer>
        <slot name="footer"></slot>
      </footer>
    `;
    }
}

customElements.define('main-layout', MainLayout);
