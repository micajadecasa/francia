import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { image_search } from 'duckduckgo-images-api';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function downloadImage(url, dest) {
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' }});
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  const arrayBuffer = await res.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  fs.writeFileSync(dest, buffer);
}

async function run() {
  const content = fs.readFileSync('./src/data/places.js', 'utf8');
  const cjsContent = content.replace('export const daysData =', 'const daysData =') + '\nmodule.exports = { daysData };';
  fs.writeFileSync('./temp_places.cjs', cjsContent);

  const { daysData } = await import('./temp_places.cjs');
  fs.unlinkSync('./temp_places.cjs');

  const imagesDir = path.join(__dirname, 'public', 'images');
  
  const tasks = [];
  for (const dayKey of Object.keys(daysData)) {
    const day = daysData[dayKey];
    if (day.image) tasks.push({ path: day.image, text: day.title.replace(/[^a-zA-Z0-9\s-ñáéíóúÁÉÍÓÚ]/g, '').trim() });
    if (day.places) {
      for (const place of day.places) {
        if (place.images && place.images.length > 0) {
          tasks.push({ path: place.images[0], text: place.name });
        }
      }
    }
  }

  for (const task of tasks) {
    if (task.path.startsWith('/images/')) {
      const fileName = task.path.replace('/images/', '');
      const dest = path.join(imagesDir, fileName);
      
      if (fs.existsSync(dest)) {
        const stats = fs.statSync(dest);
        if (stats.size > 10000) {
          console.log(`Skipping ${fileName}, already a real image (size: ${stats.size}).`);
          continue;
        }
      }

      console.log(`Searching DDG for ${fileName} (${task.text})...`);
      
      try {
        const query = task.text.toLowerCase().includes('louvre') || task.text.toLowerCase().includes('paris') || task.text.toLowerCase().includes('dame')
          ? task.text 
          : task.text + ' Paris';
          
        const results = await image_search({ query: query, moderate: true });
        
        if (results && results.length > 0) {
          let success = false;
          for (let i = 0; i < Math.min(3, results.length); i++) {
             try {
                await downloadImage(results[i].image, dest);
                console.log(`Saved ${fileName} from DDG`);
                success = true;
                break;
             } catch(e) {
             }
          }
          if(!success) console.log(`Failed to download any image for ${fileName}`);
        } else {
          console.log(`No DDG results for ${task.text}`);
        }
      } catch(e) {
        console.error(`Error searching DDG for ${fileName}:`, e.message);
      }
    }
  }
  console.log('Done!');
}

run();
