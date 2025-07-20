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
    
    // Set min-height to prevent layout shifts
    outlet.style.minHeight = 'calc(100vh - 60px)';
    outlet.style.position = 'relative';
    outlet.style.overflow = 'hidden';

    function render() {
        if (isTransitioning) return;
        
        const path = location.hash || '#/page1';
        const tag = routes[path] || 'not-found-page';

        // Update page metadata for SEO
        updatePageMetadata(path);

        isTransitioning = true;
        
        // Create new page element
        const newPage = document.createElement(tag);
        newPage.style.position = 'absolute';
        newPage.style.top = '0';
        newPage.style.left = '0';
        newPage.style.width = '100%';
        newPage.style.opacity = '0';
        newPage.style.transform = 'translateY(20px)';
        newPage.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
        
        // Prepare for animation for better performance
        prepareForAnimation(newPage, 'transform, opacity');
        
        // Add new page to DOM
        outlet.appendChild(newPage);
        
        // Force layout recalculation
        newPage.offsetHeight;
        
        // Transition in new page
        requestAnimationFrame(() => {
            newPage.style.opacity = '1';
            newPage.style.transform = 'translateY(0)';
            
            if (currentPage) {
                currentPage.style.opacity = '0';
                currentPage.style.transform = 'translateY(-20px)';
            }
        });
        
        // Clean up after transition
        setTimeout(() => {
            if (currentPage) {
                currentPage.remove();
            }
            newPage.style.position = 'static';
            currentPage = newPage;
            isTransitioning = false;
        }, 200);
    }

    window.addEventListener('hashchange', render);
    window.addEventListener('DOMContentLoaded', render);
}
