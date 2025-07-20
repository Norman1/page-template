@echo off
echo ===================================
echo Visual Capture Tool for Page Layout
echo ===================================
echo.

:: Check if Docker is installed
where docker >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Docker is not installed or not in PATH
    echo Please install Docker Desktop from https://www.docker.com/products/docker-desktop
    pause
    exit /b 1
)

:: Check if Docker is running
docker info >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Docker is not running
    echo Please start Docker Desktop and try again
    pause
    exit /b 1
)

echo [1/4] Building Docker image with Playwright...
docker-compose build visual-capture

echo.
echo [2/4] Starting services...
docker-compose up -d web-server

echo.
echo [3/4] Waiting for server to be ready...
timeout /t 3 /nobreak >nul

echo.
echo [4/4] Running visual capture...
docker-compose run --rm visual-capture

echo.
echo ===================================
echo Visual capture complete!
echo Screenshots saved in: .\screenshots\
echo ===================================
echo.

:: Ask if user wants to stop the server
set /p stop="Stop the web server? (y/n): "
if /i "%stop%"=="y" (
    docker-compose down
    echo Server stopped.
) else (
    echo Server still running at http://localhost:8080
    echo Run 'docker-compose down' to stop it later.
)

pause