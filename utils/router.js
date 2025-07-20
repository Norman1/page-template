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
    
    // Set styles to prevent scrollbar issues  
    outlet.style.flex = '1';

    function render() {
        if (isTransitioning) return;
        
        const path = location.hash || '#/page1';
        const tag = routes[path] || 'not-found-page';

        // Update page metadata for SEO
        updatePageMetadata(path);

        isTransitioning = true;
        
        // Create new page element
        const newPage = document.createElement(tag);
        newPage.style.opacity = '0';
        newPage.style.transition = 'opacity 0.15s ease';
        
        // Add new page to DOM
        outlet.appendChild(newPage);
        
        // Force layout recalculation
        newPage.offsetHeight;
        
        // Transition in new page
        requestAnimationFrame(() => {
            newPage.style.opacity = '1';
            
            if (currentPage) {
                currentPage.style.opacity = '0';
            }
        });
        
        // Clean up after transition
        setTimeout(() => {
            if (currentPage) {
                currentPage.remove();
            }
            currentPage = newPage;
            
            // Check if content needs scrolling and add appropriate class
            const mainElement = outlet.closest('main');
            if (mainElement) {
                // Check if content height exceeds container
                const needsScrolling = newPage.scrollHeight > mainElement.clientHeight - 120; // Account for footer
                mainElement.classList.toggle('has-long-content', needsScrolling);
            }
            
            isTransitioning = false;
        }, 150);
    }

    window.addEventListener('hashchange', render);
    window.addEventListener('DOMContentLoaded', render);
}
