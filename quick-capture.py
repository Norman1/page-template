#!/usr/bin/env python3
"""
Quick capture script that can run locally if Playwright is installed.
Install with: pip install playwright && playwright install chromium
"""

import asyncio
import sys
import os

# Add docker directory to path to import the capture script
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'docker'))

try:
    from capture_views import VisualCapture
except ImportError:
    print("Error: Could not import capture_views.py")
    print("Make sure the docker/capture-views.py file exists")
    sys.exit(1)

async def main():
    print("Quick Visual Capture - Local Mode")
    print("=================================")
    
    # Check if server is running
    import urllib.request
    try:
        urllib.request.urlopen('http://localhost:8080')
        print("✓ Server detected at http://localhost:8080")
    except:
        print("⚠ No server detected at http://localhost:8080")
        print("Please start the server first:")
        print("  python -m http.server 8080")
        sys.exit(1)
    
    # Create screenshots directory
    screenshots_dir = os.path.join(os.path.dirname(__file__), 'screenshots')
    os.makedirs(screenshots_dir, exist_ok=True)
    
    # Run capture
    capture = VisualCapture(
        base_url="http://localhost:8080",
        output_dir=screenshots_dir
    )
    
    await capture.run_capture_session()

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except ModuleNotFoundError as e:
        print(f"\nError: {e}")
        print("\nPlease install Playwright first:")
        print("  pip install playwright")
        print("  playwright install chromium")
    except Exception as e:
        print(f"\nError: {e}")
        sys.exit(1)