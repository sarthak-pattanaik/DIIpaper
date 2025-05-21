#!/bin/bash

# This script builds the frontend assets for Netlify deployment
echo "Building frontend assets for Netlify..."

# Ensure we have node modules (needed on Netlify)
echo "Installing dependencies..."
npm install

# Create simplified version for static deployment
echo "Creating static build..."

# Build the client application
echo "Building frontend application..."
cd client

# Create a simple public folder with redirects if it doesn't exist
mkdir -p public
echo "/* /index.html 200" > public/_redirects

# Run Vite build
npx vite build

# Make sure dist directory exists and is empty in root
echo "Preparing distribution directory..."
mkdir -p ../dist
rm -rf ../dist/*

# Copy the client build to dist
echo "Copying build files to distribution directory..."
cp -r dist/* ../dist/

# Also copy redirects if it wasn't included
if [ ! -f "../dist/_redirects" ]; then
  echo "Adding _redirects file for SPA routing..."
  echo "/* /index.html 200" > ../dist/_redirects
fi

echo "Build complete for Netlify deployment!"
echo "Your static landing page is ready to be deployed."