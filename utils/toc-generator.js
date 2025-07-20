export function generateTOC(fromElement) {
    const headings = fromElement.querySelectorAll('h2, h3');
    const toc = document.createElement('ul');
    
    // Simple, clean styling
    toc.style.listStyle = 'none';
    toc.style.padding = '0';
    toc.style.margin = '0';

    headings.forEach((heading, index) => {
        if (!heading.id) {
            heading.id = `auto-heading-${index}`;
        }

        const li = document.createElement('li');
        li.style.marginLeft = heading.tagName === 'H3' ? '1rem' : '0';
        li.style.marginBottom = '0.5rem';

        const link = document.createElement('a');
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent;
        link.style.textDecoration = 'none';
        link.style.color = '#f0f6fc';
        link.style.fontSize = '0.9rem';
        link.style.display = 'block';
        link.style.padding = '0.25rem 0';
        link.style.borderLeft = '2px solid transparent';
        link.style.paddingLeft = '0.5rem';
        link.style.transition = 'all 0.2s';

        // Hover styles
        link.addEventListener('mouseenter', () => {
            link.style.color = '#58a6ff';
            link.style.borderLeftColor = '#58a6ff';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.color = '#f0f6fc';
            link.style.borderLeftColor = 'transparent';
        });

        // Smooth scroll navigation
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById(heading.id)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        });

        li.appendChild(link);
        toc.appendChild(li);
    });

    return toc;
}
