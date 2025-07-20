const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function captureScreenshots() {
    const outputDir = './screenshots';
    
    // Create screenshots directory
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').split('T')[0] + '_' + 
                     new Date().toTimeString().split(' ')[0].replace(/:/g, '');
    
    console.log('🎯 Starting screenshot capture...');
    
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const viewports = [
        { name: 'mobile', width: 375, height: 667 },
        { name: 'tablet', width: 768, height: 1024 },
        { name: 'desktop', width: 1200, height: 800 }
    ];
    
    const pages = [
        { name: 'home', path: '/' },
        { name: 'page-one', path: '/#page1' },
        { name: 'about', path: '/#about' }
    ];
    
    for (const viewport of viewports) {
        const page = await browser.newPage();
        await page.setViewport(viewport);
        
        for (const pageInfo of pages) {
            const url = `http://localhost:8081${pageInfo.path}`;
            console.log(`📱 Capturing ${pageInfo.name} at ${viewport.name} (${viewport.width}x${viewport.height})`);
            
            try {
                await page.goto(url, { waitUntil: 'networkidle0', timeout: 10000 });
                await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for any animations
                
                const filename = `${timestamp}_${pageInfo.name}_${viewport.name}.png`;
                const filepath = path.join(outputDir, filename);
                
                await page.screenshot({
                    path: filepath,
                    fullPage: true
                });
                
                console.log(`  ✅ Saved: ${filename}`);
            } catch (error) {
                console.log(`  ❌ Error capturing ${pageInfo.name}: ${error.message}`);
            }
        }
        
        await page.close();
    }
    
    await browser.close();
    console.log(`\n🎉 All screenshots saved to: ${outputDir}/`);
}

captureScreenshots().catch(console.error);