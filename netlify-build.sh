#!/bin/bash

# This script builds the frontend assets for Netlify deployment
echo "Building frontend assets for Netlify..."

# Ensure we have node modules (needed on Netlify)
echo "Installing dependencies..."
npm install

# Run the client preparation script
echo "Preparing client data..."
node client-deploy.js

# Build the client application
echo "Building frontend application..."
cd client
npx vite build

# Make sure dist directory exists and is empty
echo "Preparing distribution directory..."
mkdir -p ../dist
rm -rf ../dist/*

# Copy the client build to dist
echo "Copying build files to distribution directory..."
cp -r dist/* ../dist/

# Include redirects for SPA routing
echo "Creating _redirects file for SPA routing..."
echo "/* /index.html 200" > ../dist/_redirects

echo "Build complete for Netlify deployment!"
echo "Your static landing page is ready to be deployed."