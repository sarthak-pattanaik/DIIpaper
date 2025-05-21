#!/bin/bash

# This script builds the frontend assets for Netlify deployment
echo "Building frontend assets for Netlify..."

# Run the client preparation script
node client-deploy.js

# Build the client application
cd client
npx vite build

# Make sure dist directory exists and is empty
mkdir -p ../dist
rm -rf ../dist/*

# Copy the client build to dist
cp -r dist/* ../dist/

echo "Build complete for Netlify deployment!"