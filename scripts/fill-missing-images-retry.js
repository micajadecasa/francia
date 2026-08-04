// scripts/fill-missing-images-retry.js
// Attempts to replace tiny placeholder images with Unsplash images.
// Retries up to 3 times per image with a 3‑second delay between attempts.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const manifestPath = path.resolve(__dirname, '..', 'image_manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

const imagesDir = path.resolve(__dirname, '..', 'public', 'images');
if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function downloadUnsplash(place, dest) {
  const url = `https://source.unsplash.com/600x400/?${encodeURIComponent(place)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Unsplash request failed: ${res.status}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buffer);
}

(async () => {
  for (const { file, place } of manifest) {
    const filePath = path.join(imagesDir, file);
    const needsReplace = (!fs.existsSync(filePath)) || (fs.statSync(filePath).size < 10000);
    if (!needsReplace) continue;
    console.log(`Attempting Unsplash for "${place}" -> ${file}`);
    let success = false;
    for (let attempt = 1; attempt <= 3 && !success; attempt++) {
      try {
        await downloadUnsplash(place, filePath);
        console.log(`Saved Unsplash image for ${file} (attempt ${attempt})`);
        success = true;
      } catch (e) {
        console.warn(`Attempt ${attempt} failed for ${place}: ${e.message}`);
        if (attempt < 3) await sleep(3000); // wait 3 s before next try
      }
    }
    if (!success) console.error(`❌ Could not obtain Unsplash image for ${place}`);
  }
  console.log('Unsplash retry step finished');
})();
