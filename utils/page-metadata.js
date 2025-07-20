// Page metadata for SEO
const pageMetadata = {
    '#/page1': {
        title: 'Page 1 | My App',
        description: 'Learn about our framework and core concepts on Page 1.',
        keywords: 'framework, web development, page 1'
    },
    '#/page2': {
        title: 'Page 2 | My App', 
        description: 'Discover advanced features and functionality on Page 2.',
        keywords: 'advanced features, functionality, page 2'
    },
    '#/tool-a': {
        title: 'Tool A | My App',
        description: 'Powerful Tool A for enhanced productivity and workflow.',
        keywords: 'tool a, productivity, workflow'
    },
    '#/tool-b': {
        title: 'Tool B | My App',
        description: 'Essential Tool B for streamlined development processes.',
        keywords: 'tool b, development, processes'
    },
    '#/about': {
        title: 'About | My App',
        description: 'Learn more about our mission, team, and company values.',
        keywords: 'about, company, mission, team'
    },
    '#/profile': {
        title: 'User Profile | My App',
        description: 'Manage your user profile, settings, and account information.',
        keywords: 'profile, user account, settings'
    },
    '#/privacy': {
        title: 'Privacy & Terms | My App',
        description: 'Our privacy policy and terms of service for using our application.',
        keywords: 'privacy policy, terms of service, data protection'
    },
    // Default/fallback metadata
    'default': {
        title: 'My App - Web Application Framework',
        description: 'A modern web application framework with powerful tools and features.',
        keywords: 'web app, framework, tools, development'
    }
};

export function updatePageMetadata(path) {
    const metadata = pageMetadata[path] || pageMetadata['default'];
    
    // Update document title
    document.title = metadata.title;
    
    // Update or create meta description
    updateMetaTag('description', metadata.description);
    
    // Update or create meta keywords
    updateMetaTag('keywords', metadata.keywords);
    
    // Update Open Graph meta tags for social sharing
    updateMetaTag('og:title', metadata.title, 'property');
    updateMetaTag('og:description', metadata.description, 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:url', window.location.href, 'property');
}

function updateMetaTag(name, content, attribute = 'name') {
    let meta = document.querySelector(`meta[${attribute}="${name}"]`);
    
    if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
    }
    
    meta.setAttribute('content', content);
}

export function getPageMetadata(path) {
    return pageMetadata[path] || pageMetadata['default'];
}