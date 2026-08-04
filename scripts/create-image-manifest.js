// scripts/create-image-manifest.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directly import the daysData export from the source file (ESM)
import { daysData } from '../src/data/places.js';

const manifest = [];
for (const dayKey of Object.keys(daysData)) {
  const day = daysData[dayKey];
  if (day.image) {
    const file = day.image.replace('/images/', '');
    manifest.push({ file, place: day.title });
  }
  if (day.places) {
    for (const p of day.places) {
      if (p.images && p.images.length > 0) {
        const file = p.images[0].replace('/images/', '');
        manifest.push({ file, place: p.name });
      }
    }
  }
}

fs.writeFileSync(path.resolve(__dirname, '..', 'image_manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');
console.log('Manifest written with', manifest.length, 'entries');
