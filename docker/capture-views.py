#!/usr/bin/env python3
"""
Visual capture tool using Playwright for browser automation.
Captures screenshots at different viewport sizes and saves them for analysis.
"""

import asyncio
import os
import json
from datetime import datetime
from playwright.async_api import async_playwright

# Configuration
VIEWPORTS = [
    {"name": "mobile", "width": 375, "height": 667, "device": "iPhone 12"},
    {"name": "tablet", "width": 768, "height": 1024, "device": "iPad"},
    {"name": "desktop", "width": 1200, "height": 800, "device": "Desktop"},
    {"name": "wide", "width": 1920, "height": 1080, "device": "Desktop HD"}
]

PAGES = [
    {"name": "home", "path": "/", "wait_for": "main-layout"},
    {"name": "page-one", "path": "/#page1", "wait_for": "page-one"},
    {"name": "page-two", "path": "/#page2", "wait_for": "page-two"},
    {"name": "about", "path": "/#about", "wait_for": "page-about"},
]

class VisualCapture:
    def __init__(self, base_url="http://host.docker.internal:8080", output_dir="/app/screenshots"):
        self.base_url = base_url
        self.output_dir = output_dir
        self.timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        
    async def capture_page(self, browser, page_config, viewport):
        """Capture a single page at a specific viewport size."""
        context = await browser.new_context(
            viewport={"width": viewport["width"], "height": viewport["height"]},
            device_scale_factor=2,  # High DPI screenshots
        )
        
        page = await context.new_page()
        
        try:
            # Navigate to page
            url = f"{self.base_url}{page_config['path']}"
            print(f"Capturing {page_config['name']} at {viewport['name']} ({viewport['width']}x{viewport['height']})")
            
            await page.goto(url, wait_until="networkidle")
            
            # Wait for specific element if specified
            if page_config.get('wait_for'):
                await page.wait_for_selector(page_config['wait_for'], timeout=5000)
            
            # Additional wait for any animations
            await asyncio.sleep(1)
            
            # Take screenshot
            filename = f"{self.timestamp}_{page_config['name']}_{viewport['name']}.png"
            filepath = os.path.join(self.output_dir, filename)
            
            await page.screenshot(
                path=filepath,
                full_page=True,
                animations="disabled"
            )
            
            # Also capture just the viewport (not full page)
            viewport_filename = f"{self.timestamp}_{page_config['name']}_{viewport['name']}_viewport.png"
            viewport_filepath = os.path.join(self.output_dir, viewport_filename)
            
            await page.screenshot(
                path=viewport_filepath,
                full_page=False,
                animations="disabled"
            )
            
            # Capture specific elements if needed
            await self.capture_elements(page, page_config, viewport)
            
            print(f"✓ Captured {filename}")
            
            return {"success": True, "file": filename}
            
        except Exception as e:
            print(f"✗ Error capturing {page_config['name']} at {viewport['name']}: {str(e)}")
            return {"success": False, "error": str(e)}
            
        finally:
            await context.close()
    
    async def capture_elements(self, page, page_config, viewport):
        """Capture specific page elements."""
        elements_to_capture = {
            "home": ["app-header", "nav-sidebar", "main-layout"],
            "page-one": [".toc-container", ".content-with-toc"],
        }
        
        if page_config['name'] in elements_to_capture:
            for selector in elements_to_capture[page_config['name']]:
                try:
                    element = await page.query_selector(selector)
                    if element:
                        element_filename = f"{self.timestamp}_{page_config['name']}_{viewport['name']}_{selector.replace('.', '').replace('#', '')}.png"
                        element_filepath = os.path.join(self.output_dir, element_filename)
                        await element.screenshot(path=element_filepath)
                        print(f"  ✓ Captured element {selector}")
                except:
                    pass
    
    async def run_capture_session(self):
        """Run a complete capture session for all pages and viewports."""
        os.makedirs(self.output_dir, exist_ok=True)
        
        results = {
            "timestamp": self.timestamp,
            "base_url": self.base_url,
            "captures": []
        }
        
        async with async_playwright() as p:
            # Use Chromium for best compatibility
            browser = await p.chromium.launch(
                headless=True,
                args=['--no-sandbox', '--disable-setuid-sandbox']
            )
            
            print(f"\n🎯 Starting visual capture session at {self.timestamp}")
            print(f"📁 Output directory: {self.output_dir}")
            print(f"🌐 Base URL: {self.base_url}\n")
            
            # Capture each page at each viewport
            for page_config in PAGES:
                for viewport in VIEWPORTS:
                    result = await self.capture_page(browser, page_config, viewport)
                    results["captures"].append({
                        "page": page_config['name'],
                        "viewport": viewport['name'],
                        "dimensions": f"{viewport['width']}x{viewport['height']}",
                        **result
                    })
            
            await browser.close()
        
        # Save results metadata
        metadata_file = os.path.join(self.output_dir, f"{self.timestamp}_metadata.json")
        with open(metadata_file, 'w') as f:
            json.dump(results, f, indent=2)
        
        print(f"\n✅ Capture session complete!")
        print(f"📊 Metadata saved to: {metadata_file}")
        
        # Generate summary report
        await self.generate_report(results)
        
        return results
    
    async def generate_report(self, results):
        """Generate an HTML report of the captured screenshots."""
        report_html = f"""<!DOCTYPE html>
<html>
<head>
    <title>Visual Capture Report - {self.timestamp}</title>
    <style>
        body {{ 
            font-family: Arial, sans-serif; 
            margin: 20px;
            background: #f5f5f5;
        }}
        .header {{
            background: #333;
            color: white;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
        }}
        .captures {{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
        }}
        .capture {{
            background: white;
            border-radius: 8px;
            padding: 15px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }}
        .capture img {{
            width: 100%;
            height: auto;
            border: 1px solid #ddd;
            border-radius: 4px;
        }}
        .capture h3 {{
            margin: 10px 0;
            color: #333;
        }}
        .capture .meta {{
            color: #666;
            font-size: 0.9em;
        }}
        .success {{ color: green; }}
        .error {{ color: red; }}
    </style>
</head>
<body>
    <div class="header">
        <h1>Visual Capture Report</h1>
        <p>Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}</p>
        <p>Base URL: {self.base_url}</p>
    </div>
    
    <div class="captures">
"""
        
        for capture in results["captures"]:
            if capture.get("success"):
                status_class = "success"
                status_text = "✓ Success"
                img_tag = f'<img src="{capture["file"]}" alt="{capture["page"]} - {capture["viewport"]}" loading="lazy">'
            else:
                status_class = "error"
                status_text = f"✗ Error: {capture.get('error', 'Unknown error')}"
                img_tag = '<div style="padding: 50px; background: #f0f0f0; text-align: center;">Failed to capture</div>'
            
            report_html += f"""
        <div class="capture">
            <h3>{capture["page"].title()} - {capture["viewport"].title()}</h3>
            <div class="meta">
                <span class="{status_class}">{status_text}</span><br>
                Dimensions: {capture["dimensions"]}
            </div>
            {img_tag}
        </div>
"""
        
        report_html += """
    </div>
</body>
</html>"""
        
        report_file = os.path.join(self.output_dir, f"{self.timestamp}_report.html")
        with open(report_file, 'w') as f:
            f.write(report_html)
        
        print(f"📄 HTML report saved to: {report_file}")

async def main():
    # Check if running in Docker or locally
    if os.path.exists("/.dockerenv"):
        print("🐳 Running in Docker container")
        capture = VisualCapture()
    else:
        print("💻 Running locally")
        capture = VisualCapture(base_url="http://localhost:8080")
    
    await capture.run_capture_session()

if __name__ == "__main__":
    asyncio.run(main())