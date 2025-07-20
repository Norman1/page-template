#!/usr/bin/env python3
"""
Simple screenshot capture using pyautogui for immediate testing.
This doesn't require Docker - just pip install pyautogui
"""

import time
import os
import webbrowser
import subprocess
import sys
from datetime import datetime

def install_requirements():
    """Install required packages if not available."""
    try:
        import pyautogui
        import PIL
        return True
    except ImportError:
        print("Installing required packages...")
        subprocess.run([sys.executable, "-m", "pip", "install", "pyautogui", "pillow"])
        try:
            import pyautogui
            import PIL
            return True
        except ImportError:
            print("Failed to install requirements. Please install manually:")
            print("pip install pyautogui pillow")
            return False

def capture_website():
    """Simple capture workflow."""
    if not install_requirements():
        return
    
    import pyautogui
    
    # Create screenshots directory
    screenshots_dir = os.path.join(os.path.dirname(__file__), 'screenshots')
    os.makedirs(screenshots_dir, exist_ok=True)
    
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    
    print("🎯 Simple Visual Capture Tool")
    print("=" * 40)
    print("This will:")
    print("1. Start a web server")
    print("2. Open your browser")
    print("3. Wait 5 seconds for you to position the window")
    print("4. Take a screenshot")
    print()
    
    # Start web server
    print("Starting web server...")
    try:
        server_process = subprocess.Popen(
            [sys.executable, '-m', 'http.server', '8080'],
            cwd=os.path.dirname(__file__),
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL
        )
        time.sleep(2)
        
        # Open browser
        print("Opening browser...")
        webbrowser.open('http://localhost:8080')
        
        print()
        print("⏰ PLEASE:")
        print("1. Position your browser window nicely")
        print("2. Navigate to different pages if desired")
        print("3. Wait for the countdown...")
        print()
        
        # Countdown
        for i in range(5, 0, -1):
            print(f"Screenshot in {i} seconds...")
            time.sleep(1)
        
        # Take screenshot
        screenshot_path = os.path.join(screenshots_dir, f"{timestamp}_manual_capture.png")
        screenshot = pyautogui.screenshot()
        screenshot.save(screenshot_path)
        
        print()
        print(f"✅ Screenshot saved: {screenshot_path}")
        print()
        
        # Multiple captures option
        response = input("Take another screenshot? (y/n): ")
        if response.lower() == 'y':
            for i in range(3, 0, -1):
                print(f"Next screenshot in {i} seconds...")
                time.sleep(1)
            
            screenshot_path2 = os.path.join(screenshots_dir, f"{timestamp}_manual_capture_2.png")
            screenshot2 = pyautogui.screenshot()
            screenshot2.save(screenshot_path2)
            print(f"✅ Second screenshot saved: {screenshot_path2}")
        
        # Stop server
        server_process.terminate()
        print("🛑 Server stopped")
        
    except Exception as e:
        print(f"Error: {e}")
        if 'server_process' in locals():
            server_process.terminate()

if __name__ == "__main__":
    capture_website()