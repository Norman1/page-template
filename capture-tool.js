// Visual capture tool using Puppeteer (if available) or html2canvas
// This tool can be used to capture screenshots of your changes

const captureConfig = {
    viewports: [
        { name: 'mobile', width: 375, height: 667 },
        { name: 'tablet', width: 768, height: 1024 },
        { name: 'desktop', width: 1200, height: 800 }
    ],
    pages: ['/', '/#about', '/#services', '/#contact'],
    outputDir: './screenshots'
};

// Browser-based capture using html2canvas
async function captureWithHtml2Canvas() {
    // This would need to be loaded in the browser
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
    document.head.appendChild(script);
    
    script.onload = async () => {
        const canvas = await html2canvas(document.body);
        const link = document.createElement('a');
        link.download = `screenshot-${Date.now()}.png`;
        link.href = canvas.toDataURL();
        link.click();
    };
}

// Node.js based capture using Puppeteer
const puppeteerCapture = `
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function captureScreenshots() {
    const browser = await puppeteer.launch();
    const outputDir = './screenshots';
    
    // Create output directory
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    
    for (const viewport of captureConfig.viewports) {
        for (const pagePath of captureConfig.pages) {
            const page = await browser.newPage();
            await page.setViewport(viewport);
            await page.goto(\`http://localhost:8080\${pagePath}\`);
            
            // Wait for components to load
            await page.waitForTimeout(1000);
            
            const filename = \`\${viewport.name}-\${pagePath.replace('/', '').replace('#', '') || 'home'}.png\`;
            await page.screenshot({ 
                path: path.join(outputDir, filename),
                fullPage: true 
            });
            
            console.log(\`Captured: \${filename}\`);
            await page.close();
        }
    }
    
    await browser.close();
}

captureScreenshots().catch(console.error);
`;

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { captureConfig, puppeteerCapture };
}