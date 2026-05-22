import fs from 'fs';

async function download() {
  const url = 'https://drive.google.com/uc?export=download&id=19_bMUViirt603Mr0BYryPJj-AZjdalMR';
  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    fs.writeFileSync('src/assets/images/logo.png', Buffer.from(buffer));
    console.log('Downloaded size: ', buffer.byteLength);
  } catch (e) {
    console.error(e);
  }
}
download();
