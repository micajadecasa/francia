// scripts/process-images.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.resolve(__dirname, '..', 'public', 'images');
const tmpDir = path.resolve(__dirname, '..', 'tmp');
if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);

function padToSquare(buffer) {
  return sharp(buffer)
    .metadata()
    .then(meta => {
      const maxSide = Math.max(meta.width, meta.height);
      return sharp(buffer)
        .extend({
          top: Math.floor((maxSide - meta.height) / 2),
          bottom: Math.ceil((maxSide - meta.height) / 2),
          left: Math.floor((maxSide - meta.width) / 2),
          right: Math.ceil((maxSide - meta.width) / 2),
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .toBuffer();
    });
}

(async () => {
  const files = fs.readdirSync(imagesDir).filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg'));
  for (const file of files) {
    const filePath = path.join(imagesDir, file);
    const stats = fs.statSync(filePath);
    // If already >10KB and exactly 600x400, assume good and skip
    if (stats.size > 10000) {
      try {
        const meta = await sharp(filePath).metadata();
        if (meta.width === 600 && meta.height === 400) {
          console.log(`Skipping ${file}, already 600x400`);
          continue;
        }
      } catch (_) {}
    }
    console.log(`Processing ${file}`);
    const buffer = fs.readFileSync(filePath);
    try {
      const squared = await padToSquare(buffer);
      const resized = await sharp(squared)
        .resize(600, 400, { fit: 'cover' })
        .png({ compressionLevel: 9 })
        .toBuffer();
      fs.writeFileSync(filePath, resized);
      console.log(`Saved resized ${file}`);
    } catch (e) {
      console.error(`Failed processing ${file}:`, e.message);
    }
  }
  console.log('Processing step completed');
})();
