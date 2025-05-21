// This is a helper script for Netlify deployment
// It copies the necessary files and prepares the build

const fs = require('fs');
const path = require('path');

// Create a static file with the necessary client-side data
console.log('Preparing client-side files for Netlify deployment...');

// Create a static version of any API data needed for the landing page
const staticData = {
  version: '1.0.0',
  buildTime: new Date().toISOString()
};

// Write this to a JSON file that can be imported by the client
fs.writeFileSync(
  path.join(__dirname, 'client', 'src', 'staticData.json'), 
  JSON.stringify(staticData, null, 2)
);

console.log('Client-side preparation complete!');