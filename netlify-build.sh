#!/bin/bash

# This script builds the frontend assets for Netlify deployment
echo "Building frontend assets..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the client application
echo "Building frontend application..."
npm run build

echo "Build complete!"