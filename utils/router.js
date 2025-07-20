import { updatePageMetadata } from './page-metadata.js';
import { prepareForAnimation } from './performance-utils.js';

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

let currentPage = null;
let isTransitioning = false;

export function initRouter() {
    const outlet = document.querySelector('#router-view');
    
    // Set styles to prevent layout shifts
    outlet.style.flex = '1';
    outlet.style.display = 'block';

    function render() {
        if (isTransitioning) return;
        
        const path = location.hash || '#/page1';
        const tag = routes[path] || 'not-found-page';

        // Update page metadata for SEO
        updatePageMetadata(path);

        isTransitioning = true;
        
        // Remove old content immediately to prevent position conflicts
        if (currentPage) {
            currentPage.remove();
        }
        
        // Create new page element
        const newPage = document.createElement(tag);
        newPage.style.opacity = '0';
        newPage.style.transition = 'opacity 0.1s ease';
        newPage.style.margin = '0';
        newPage.style.padding = '0';
        newPage.style.position = 'static';
        
        // Add new page to DOM
        outlet.appendChild(newPage);
        
        // Force layout recalculation
        newPage.offsetHeight;
        
        // Transition in new page immediately
        requestAnimationFrame(() => {
            newPage.style.opacity = '1';
        });
        
        // Clean up after transition
        setTimeout(() => {
            currentPage = newPage;
            
            // Check if content needs scrolling and add appropriate class
            const mainElement = outlet.closest('main');
            if (mainElement) {
                // Check if content height exceeds container
                const needsScrolling = newPage.scrollHeight > mainElement.clientHeight - 120; // Account for footer
                mainElement.classList.toggle('has-long-content', needsScrolling);
            }
            
            isTransitioning = false;
        }, 100);
    }

    window.addEventListener('hashchange', render);
    window.addEventListener('DOMContentLoaded', render);
}
