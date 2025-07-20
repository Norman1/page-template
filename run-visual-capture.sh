#!/bin/bash

echo "==================================="
echo "Visual Capture Tool for Page Layout"
echo "==================================="
echo

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "ERROR: Docker is not installed"
    echo "Please install Docker from https://www.docker.com/products/docker-desktop"
    exit 1
fi

# Check if Docker is running
if ! docker info &> /dev/null; then
    echo "ERROR: Docker is not running"
    echo "Please start Docker and try again"
    exit 1
fi

echo "[1/4] Building Docker image with Playwright..."
docker-compose build visual-capture

echo
echo "[2/4] Starting services..."
docker-compose up -d web-server

echo
echo "[3/4] Waiting for server to be ready..."
sleep 3

echo
echo "[4/4] Running visual capture..."
docker-compose run --rm visual-capture

echo
echo "==================================="
echo "Visual capture complete!"
echo "Screenshots saved in: ./screenshots/"
echo "==================================="
echo

# Ask if user wants to stop the server
read -p "Stop the web server? (y/n): " stop
if [[ $stop == "y" || $stop == "Y" ]]; then
    docker-compose down
    echo "Server stopped."
else
    echo "Server still running at http://localhost:8080"
    echo "Run 'docker-compose down' to stop it later."
fi