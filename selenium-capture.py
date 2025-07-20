#!/usr/bin/env python3
"""
Selenium-based screenshot capture - more reliable than pyautogui
"""

import os
import sys
import time
import subprocess
from datetime import datetime

def install_selenium():
    """Install selenium and webdriver-manager"""
    try:
        from selenium import webdriver
        from selenium.webdriver.chrome.options import Options
        from webdriver_manager.chrome import ChromeDriverManager
        return True
    except ImportError:
        print("Installing Selenium and ChromeDriver...")
        subprocess.run([sys.executable, "-m", "pip", "install", "selenium", "webdriver-manager"])
        try:
            from selenium import webdriver
            from selenium.webdriver.chrome.options import Options
            from webdriver_manager.chrome import ChromeDriverManager
            return True
        except ImportError:
            return False

def capture_screenshots():
    """Capture screenshots using Selenium"""
    if not install_selenium():
        print("Failed to install Selenium")
        return False
    
    from selenium import webdriver
    from selenium.webdriver.chrome.options import Options
    from selenium.webdriver.chrome.service import Service
    from webdriver_manager.chrome import ChromeDriverManager
    
    # Create screenshots directory
    screenshots_dir = os.path.join(os.path.dirname(__file__), 'screenshots')
    os.makedirs(screenshots_dir, exist_ok=True)
    
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    
    # Start web server
    print("Starting web server...")
    server_process = subprocess.Popen(
        [sys.executable, '-m', 'http.server', '8080'],
        cwd=os.path.dirname(__file__),
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL
    )
    
    try:
        time.sleep(3)  # Wait for server to start
        
        # Setup Chrome options
        chrome_options = Options()
        chrome_options.add_argument("--headless")  # Run in background
        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument("--disable-dev-shm-usage")
        chrome_options.add_argument("--window-size=1200,800")
        
        # Setup ChromeDriver
        service = Service(ChromeDriverManager().install())
        driver = webdriver.Chrome(service=service, options=chrome_options)
        
        viewports = [
            {"name": "desktop", "width": 1200, "height": 800},
            {"name": "tablet", "width": 768, "height": 1024},
            {"name": "mobile", "width": 375, "height": 667}
        ]
        
        pages = [
            {"name": "home", "path": "/"},
            {"name": "page-one", "path": "/#page1"},
            {"name": "about", "path": "/#about"}
        ]
        
        print(f"📸 Capturing screenshots...")
        
        for viewport in viewports:
            driver.set_window_size(viewport["width"], viewport["height"])
            
            for page in pages:
                url = f"http://localhost:8080{page['path']}"
                print(f"  📱 {page['name']} at {viewport['name']} ({viewport['width']}x{viewport['height']})")
                
                driver.get(url)
                time.sleep(2)  # Wait for page to load
                
                filename = f"{timestamp}_{page['name']}_{viewport['name']}.png"
                filepath = os.path.join(screenshots_dir, filename)
                
                driver.save_screenshot(filepath)
                print(f"    ✅ Saved: {filename}")
        
        driver.quit()
        print(f"\n🎉 All screenshots saved to: {screenshots_dir}")
        return True
        
    except Exception as e:
        print(f"❌ Error: {e}")
        return False
    finally:
        server_process.terminate()
        print("🛑 Server stopped")

if __name__ == "__main__":
    success = capture_screenshots()
    if not success:
        print("\n💡 Alternative: Try the Docker method with:")
        print("   docker-compose build visual-capture")
        print("   docker-compose run --rm visual-capture")