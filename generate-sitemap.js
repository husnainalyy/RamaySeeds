// generate-sitemap.js
const Sitemap = require('react-router-sitemap').default;
const path = require('path');

// Import your React app's router configuration
const router = require('./src/App').default;

// Define the path to save the sitemap
const savePath = path.resolve(__dirname, './public/sitemap.xml');

// Generate the sitemap
const generateSitemap = () => {
    new Sitemap(router)
        .build('https://ramay-seeds.vercel.app') // Your website URL
        .save(savePath);
};

generateSitemap();
