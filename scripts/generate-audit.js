// scripts/generate-audit.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const manifestPath = path.resolve(__dirname, '..', 'image_manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

const imagesDir = path.resolve(__dirname, '..', 'public', 'images');
const previewDir = path.resolve(__dirname, '..', 'previews');
if (!fs.existsSync(previewDir)) fs.mkdirSync(previewDir);

let md = '# Image Audit\n\n';
md += '| File | Place | Source URL | Original Size | New Size | Preview |\n';
md += '|------|-------|------------|---------------|----------|---------|\n';

(async () => {
  for (const { file, place } of manifest) {
    const filePath = path.join(imagesDir, file);
    let sourceUrl = 'N/A'; // In this simplified version we don't store source URL, could be added later.
    let originalSize = 'N/A';
    let newSize = 'N/A';
    try {
      const meta = await sharp(filePath).metadata();
      newSize = `${meta.width}x${meta.height}`;
      const stats = fs.statSync(filePath);
      originalSize = `${stats.size} bytes`;
    } catch (_) {}
    // generate thumbnail
    const thumbPath = path.join(previewDir, `${file}_thumb.png`);
    try {
      await sharp(filePath).resize(120, 80, { fit: 'cover' }).png().toFile(thumbPath);
    } catch (_) {}
    const relThumb = `./previews/${file}_thumb.png`;
    md += `| ${file} | ${place} | ${sourceUrl} | ${originalSize} | ${newSize} | ![thumb](${relThumb}) |\n`;
  }
  fs.writeFileSync(path.resolve(__dirname, '..', 'image-audit.md'), md, 'utf8');
  console.log('Audit written to image-audit.md');
})();
