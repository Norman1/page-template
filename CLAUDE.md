# Project: Page Layout - Learning Hub Template

## Visual Testing Setup

### Quick Start
- Run `start-dev.bat` to automatically start development server and open visual test tool
- Or manually start a server and navigate to `http://localhost:8080/visual-test.html`

### Available Development Servers
1. **Python**: `python -m http.server 8080`
2. **Node.js**: `node dev-server.js` (auto-opens browser)
3. **VS Code Live Server**: Right-click on `index.html` � "Open with Live Server"

### Visual Test Tool Features
- **Multi-viewport preview**: See mobile (375px), tablet (768px), and desktop (1200px) simultaneously
- **One-click refresh**: Update all viewports at once
- **Activity logging**: Track when views are loaded/refreshed
- Located at: `visual-test.html`

### Testing Workflow
1. Start development server using any method above
2. Open `http://localhost:8080/visual-test.html` 
3. Make code changes
4. Click "Refresh All Views" to see changes instantly across all viewports
5. Use this to verify responsive design and visual changes

### Project Structure
- Vanilla JavaScript with Web Components
- No build process required (runs directly in browser)
- ES6 modules require a local server (CORS restrictions)
- Component-based architecture in `/components/`
- Page components in `/pages/`
- Templates in `/templates/`

### Key Commands
- **Lint/Type checking**: Not configured (vanilla JS project)
- **Testing**: Manual visual testing via visual-test.html
- **Build**: No build process needed

## Automated Visual Capture (Docker-based)

### Overview
Docker-based browser automation using Playwright to capture screenshots across multiple viewports without installing anything on your system.

### Quick Start
1. **Windows**: Run `run-visual-capture.bat`
2. **Mac/Linux**: Run `sh run-visual-capture.sh`

This will:
- Build a Docker container with Playwright
- Start the web server
- Capture screenshots at multiple viewports (mobile, tablet, desktop, wide)
- Save screenshots to `./screenshots/` directory
- Generate an HTML report with all captures

### Manual Docker Commands
```bash
# Start services
docker-compose up -d web-server

# Run visual capture
docker-compose run --rm visual-capture

# Stop services
docker-compose down
```

### Local Capture (without Docker)
If you have Python and Playwright installed locally:
```bash
# Install dependencies
pip install playwright
playwright install chromium

# Start web server
python -m http.server 8080

# Run capture
python quick-capture.py
```

### Captured Viewports
- **Mobile**: 375×667 (iPhone 12)
- **Tablet**: 768×1024 (iPad)
- **Desktop**: 1200×800
- **Wide**: 1920×1080 (Full HD)

### Output
- Screenshots saved to `./screenshots/` directory
- Naming format: `{timestamp}_{page}_{viewport}.png`
- Full page captures and viewport-only captures
- HTML report: `{timestamp}_report.html`
- Metadata JSON: `{timestamp}_metadata.json`

## What's Actually Installed & Running

### Docker Containers (visible in Docker Desktop)
1. **page-layout-web-server-1** (running)
   - **Purpose**: Serves the website at http://localhost:8081
   - **Image**: python:3.9-slim  
   - **Command**: `python -m http.server 8080`
   - **Status**: Should be running when doing visual testing

2. **open-webui** (running) 
   - **Purpose**: Unrelated to this project - likely your other Docker setup
   - **Action**: Leave this alone, it's separate

### Successfully Working Tools

#### 1. Node.js + Puppeteer (WORKING ✅)
- **Location**: `capture-simple.js`
- **Dependencies**: `package.json` with puppeteer@22.15.0
- **Usage**: `node capture-simple.js`
- **What it does**: Takes screenshots at 3 viewports (mobile/tablet/desktop) for 3 pages
- **Output**: Saves PNG files to `./screenshots/` folder
- **Status**: ✅ CONFIRMED WORKING - Claude can view the captured screenshots

#### 2. Docker + Playwright (PARTIAL ❌)
- **Location**: `docker/Dockerfile`, `docker-compose.yml`
- **Status**: Built but had pip issues, not currently used
- **Note**: The Node.js method works better anyway

#### 3. Manual Test Page (WORKING ✅)
- **Location**: `test-button.html` 
- **Purpose**: Side-by-side comparison of button designs
- **Access**: http://localhost:8081/test-button.html

### Current Visual Testing Workflow (WORKING)
1. **Start server**: `docker-compose up -d web-server` (creates page-layout container)
2. **Capture screenshots**: `node capture-simple.js` 
3. **Claude views**: Screenshots appear in `./screenshots/` folder
4. **Verify**: You can open the PNG files yourself to confirm

### Project Changes Made
- **Login button improved**: Changed from white/transparent to professional GitHub blue
- **File**: `components/custom-auth.js` - lines 19-48 updated with new button styling
- **Visual result**: Confirmed via screenshot that button now looks professional

### Next Time You Start
1. Check Docker Desktop - `page-layout-web-server-1` should be running on port 8081
2. If not running: `docker-compose up -d web-server`
3. To capture new screenshots: `node capture-simple.js`
4. Screenshots will be in `./screenshots/` folder for both you and Claude to view

### Files You Can Ignore
- `selenium-capture.py` (failed - Chrome version issues)
- `simple-capture.py` (failed - Unicode issues) 
- `docker/capture-views.py` (not used - Node.js works better)
- `run-visual-capture.bat` (uses Docker method that's not working yet)