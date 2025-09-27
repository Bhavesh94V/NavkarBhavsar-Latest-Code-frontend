const fs = require('fs');
const path = require('path');

const urls = [
    'https://biharishahco.com/',
    'https://biharishahco.com/services',
    'https://biharishahco.com/contact',
];

const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `
   <url>
      <loc>${url}</loc>
      <priority>0.8</priority>
   </url>`).join('')}
</urlset>`;

if (!fs.existsSync(path.join(__dirname, 'public'))) {
    fs.mkdirSync(path.join(__dirname, 'public'));
}

fs.writeFileSync(sitemapPath, sitemap, 'utf8');
console.log('Sitemap generated ✅ at', sitemapPath);
