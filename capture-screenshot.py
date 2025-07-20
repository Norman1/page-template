import subprocess
import time
import os

# Start the server
print("Starting server...")
server_process = subprocess.Popen(['python', '-m', 'http.server', '8080'], 
                                 cwd=r'C:\Files\Misc\Projects\page-layout')

# Give server time to start
time.sleep(2)

# Open browser and take screenshot using Windows screenshot tool
print("Opening browser...")
subprocess.run(['start', 'http://localhost:8080'], shell=True)

# Wait for page to load
time.sleep(3)

print("\nServer is running on http://localhost:8080")
print("Please take a screenshot manually and save it to the project folder")
print("Press Ctrl+C to stop the server")

try:
    server_process.wait()
except KeyboardInterrupt:
    print("\nStopping server...")
    server_process.terminate()