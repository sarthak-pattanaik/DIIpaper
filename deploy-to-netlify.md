# Deploy to Netlify Instructions

This document explains how to deploy your Digital Interaction Intelligence Playbook landing page to Netlify.

## Pre-Deployment Setup

1. The repository already contains the necessary configuration files:
   - `netlify.toml` - Configuration for Netlify build settings
   - `netlify-build.sh` - Build script for creating the static site
   - `client-deploy.js` - Helper script for preparing client-side data

## Deployment Steps

### Option 1: Deploy via Netlify UI

1. Create an account on [Netlify](https://www.netlify.com/) if you don't have one
2. Click the "New site from Git" button
3. Connect your Git repository where this code is hosted
4. In the build settings:
   - Build command: `chmod +x netlify-build.sh && ./netlify-build.sh`
   - Publish directory: `dist`
5. Click "Deploy site"
6. Netlify will automatically build and deploy your landing page

### Option 2: Deploy via Netlify CLI

1. Install Netlify CLI: `npm install -g netlify-cli`
2. Login to your Netlify account: `netlify login`
3. Initialize your site: `netlify init`
4. Follow the prompts to either create a new site or choose an existing one
5. When asked for the build command, enter: `chmod +x netlify-build.sh && ./netlify-build.sh`
6. When asked for the publish directory, enter: `dist`
7. Deploy your site: `netlify deploy --prod`

## Post-Deployment

After deployment, Netlify will provide you with a URL where your site is hosted. You can:

1. Configure a custom domain in the Netlify dashboard
2. Set up SSL encryption (automatically provided by Netlify)
3. Configure additional environment variables if needed

## Troubleshooting

- If you encounter build errors, check the build logs in the Netlify dashboard
- Make sure all the files referenced in the build scripts exist
- Verify that the build configuration in `netlify.toml` is correct
- Ensure `npm` dependencies are correctly installed during the build

## Important Notes

- This deployment is for a static site only
- The backend functionality is not included in this deployment
- For a full-stack deployment that includes the Express server, additional configuration would be needed