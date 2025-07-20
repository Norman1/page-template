@echo off
echo Starting development server...
echo.
echo Available options:
echo 1. Python server (if Python is installed)
echo 2. Node.js server (if Node.js is installed)
echo 3. Open visual test tool in browser
echo.

:: Check if Python is available
where python >nul 2>&1
if %errorlevel%==0 (
    echo Starting Python server on http://localhost:8080
    start cmd /k "python -m http.server 8080"
    timeout /t 2 >nul
    start http://localhost:8080/visual-test.html
) else (
    :: Check if Node.js is available
    where node >nul 2>&1
    if %errorlevel%==0 (
        echo Starting Node.js server on http://localhost:8080
        start cmd /k "node dev-server.js"
    ) else (
        echo Neither Python nor Node.js found. Please install one of them.
        echo Or use VS Code Live Server extension.
        pause
    )
)