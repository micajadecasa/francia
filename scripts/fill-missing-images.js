// scripts/fill-missing-images.js
// This script looks for image files in public/images that are smaller than 10 KB (likely placeholders)
// and replaces them with a 600x400 image fetched from Unsplash using the place name as query.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const manifestPath = path.resolve(__dirname, '..', 'image_manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

const imagesDir = path.resolve(__dirname, '..', 'public', 'images');
if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });

async function downloadUnsplash(place, dest) {
  // Unsplash source URL returns a random relevant image at the exact dimensions.
  const unsplashUrl = `https://source.unsplash.com/600x400/?${encodeURIComponent(place)}`;
  const res = await fetch(unsplashUrl);
  if (!res.ok) throw new Error(`Unsplash request failed: ${res.status}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buffer);
}

(async () => {
  for (const { file, place } of manifest) {
    const filePath = path.join(imagesDir, file);
    // If file does not exist or is tiny (<10KB), replace it.
    const needsReplace = (!fs.existsSync(filePath)) || (fs.statSync(filePath).size < 10000);
    if (!needsReplace) continue;
    console.log(`Replacing missing/placeholder image for "${place}" -> ${file}`);
    try {
      await downloadUnsplash(place, filePath);
      console.log(`Saved Unsplash image for ${file}`);
    } catch (e) {
      console.error(`Failed to fetch Unsplash for ${place}:`, e.message);
    }
  }
  console.log('Unsplash replacement step completed');
})();
