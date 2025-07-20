# Use official Playwright image which includes browsers
FROM mcr.microsoft.com/playwright:v1.40.0-focal

# Install Python (already included in base image)
# Set working directory
WORKDIR /app

# Install Python dependencies
RUN python -m pip install --upgrade pip
RUN pip install playwright pytest-playwright

# Copy the automation scripts
COPY docker/capture-views.py /app/

# Create directory for screenshots
RUN mkdir -p /app/screenshots

# Install additional tools
RUN apt-get update && apt-get install -y \
    python3-pip \
    netcat \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Set environment variables
ENV PYTHONUNBUFFERED=1
ENV DISPLAY=:99

# Default command
CMD ["python3", "capture-views.py"]