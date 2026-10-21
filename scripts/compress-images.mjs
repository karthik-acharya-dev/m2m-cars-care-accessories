import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const imagesDir = path.join(projectRoot, 'public', 'images');

function getFolderSize(dir) {
  let total = 0;
  if (!fs.existsSync(dir)) return 0;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      total += getFolderSize(full);
    } else if (entry.isFile()) {
      total += fs.statSync(full).size;
    }
  }
  return total;
}

function formatBytes(bytes) {
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

function walkImages(dir) {
  let files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(walkImages(full));
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        files.push(full);
      }
    }
  }
  return files;
}

console.log('--- M2M Car Care Image Compression ---');
const beforeTotal = getFolderSize(imagesDir);
console.log(`Initial images folder size: ${formatBytes(beforeTotal)}`);

const allImages = walkImages(imagesDir);
console.log(`Found ${allImages.length} images to optimize.`);

let processedCount = 0;

for (const imgPath of allImages) {
  const ext = path.extname(imgPath).toLowerCase();
  const rel = path.relative(projectRoot, imgPath);
  const sizeBefore = fs.statSync(imgPath).size;

  try {
    if (imgPath.includes('m2m-fortuner-suv.png')) {
      // Car image is displayed at 176px - 224px. Max 640px is perfect for 3x Retina.
      execSync(`sips -Z 640 "${imgPath}"`, { stdio: 'ignore' });
    } else if (imgPath.includes('logo.png')) {
      // Keep brand logo as-is (already small 26KB)
    } else if (['.jpg', '.jpeg'].includes(ext)) {
      // Crisp HD web compression: max 1280px dimension at 78 quality
      execSync(`sips -Z 1280 -s formatOptions 78 "${imgPath}"`, { stdio: 'ignore' });
    }

    const sizeAfter = fs.statSync(imgPath).size;
    processedCount++;
    if (sizeBefore > sizeAfter) {
      const saved = ((sizeBefore - sizeAfter) / (1024 * 1024)).toFixed(2);
      console.log(`✓ [${processedCount}/${allImages.length}] ${rel}: ${(sizeBefore / 1024).toFixed(0)}KB -> ${(sizeAfter / 1024).toFixed(0)}KB (saved ${saved}MB)`);
    } else {
      console.log(`- [${processedCount}/${allImages.length}] ${rel}: already optimal`);
    }
  } catch (err) {
    console.error(`Error processing ${rel}:`, err.message);
  }
}

// Clean up unused 1.3MB duplicate in public/logo if present
const unusedCarPng = path.join(projectRoot, 'public', 'logo', 'White M2M Fortuner-Style SUV Side Profile.png');
if (fs.existsSync(unusedCarPng)) {
  fs.unlinkSync(unusedCarPng);
  console.log('✓ Removed unreferenced duplicate: public/logo/White M2M Fortuner-Style SUV Side Profile.png');
}

const afterTotal = getFolderSize(imagesDir);
console.log('\n--- Compression Summary ---');
console.log(`Before: ${formatBytes(beforeTotal)}`);
console.log(`After:  ${formatBytes(afterTotal)}`);
console.log(`Total saved: ${formatBytes(beforeTotal - afterTotal)} (${((1 - afterTotal / beforeTotal) * 100).toFixed(1)}% reduction!)`);
