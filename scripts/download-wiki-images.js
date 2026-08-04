// scripts/download-wiki-images.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { image_search } from 'duckduckgo-images-api';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const manifestPath = path.resolve(__dirname, '..', 'image_manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

const imagesDir = path.resolve(__dirname, '..', 'public', 'images');
if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });

async function fetchWikiImage(place) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&piprop=original&titles=${encodeURIComponent(place)}`;
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!res.ok) return null;
  const data = await res.json();
  const pages = data.query && data.query.pages;
  if (!pages) return null;
  for (const key in pages) {
    const page = pages[key];
    if (page.original && page.original.source) return page.original.source;
  }
  return null;
}

async function fetchDDGImage(query) {
  try {
    const results = await image_search({ query, moderate: true });
    if (results && results.length > 0) return results[0].image;
  } catch (_) {}
  return null;
}

async function downloadImage(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed download');
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buffer);
}

(async () => {
  for (const { file, place } of manifest) {
    const destPath = path.join(imagesDir, file);
    // Skip if already a reasonably sized image (>10KB)
    if (fs.existsSync(destPath) && fs.statSync(destPath).size > 10000) {
      console.log(`Skipping ${file}, already present.`);
      continue;
    }
    console.log(`Fetching image for ${place} -> ${file}`);
    let imgUrl = await fetchWikiImage(place);
    if (!imgUrl) {
      console.log(`No Wikipedia image for ${place}, trying DuckDuckGo...`);
      imgUrl = await fetchDDGImage(place);
    }
    if (!imgUrl) {
      console.log(`No image found for ${place}, skipping.`);
      continue;
    }
    try {
      await downloadImage(imgUrl, destPath);
      console.log(`Saved ${file}`);
    } catch (e) {
      console.error(`Failed to download ${place}:`, e.message);
    }
  }
  console.log('Download step completed');
})();
