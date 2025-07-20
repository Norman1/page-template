import { updatePageMetadata } from './page-metadata.js';

const routes = {
    '#/page1': 'page-one',
    '#/page2': 'page-two',
    '#/tool-a': 'tool-a',
    '#/tool-b': 'tool-b',
    '#/about': 'page-about',
    '#/profile': 'user-profile',
    '#/privacy': 'privacy-policy',
    '#/test-with-sidebar': 'test-with-sidebar',
    '#/test-scrollable': 'test-scrollable',
    '#/test-minimal': 'test-minimal',
    '#/test-full': 'test-full',
    '#/test-404': 'not-found-page',
    // Add other pages here
};

export function initRouter() {
    const outlet = document.querySelector('#router-view');

    function render() {
        const path = location.hash || '#/page1';
        const tag = routes[path] || 'not-found-page';

        // Update page metadata for SEO
        updatePageMetadata(path);

        // Add simple fade transition
        outlet.style.opacity = '0';
        outlet.style.transition = 'opacity 0.15s ease';
        
        setTimeout(() => {
            outlet.innerHTML = '';
            const page = document.createElement(tag);
            outlet.appendChild(page);
            
            // Fade in new content
            requestAnimationFrame(() => {
                outlet.style.opacity = '1';
            });
        }, 75);
    }

    window.addEventListener('hashchange', render);
    window.addEventListener('DOMContentLoaded', render);
}
