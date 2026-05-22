import https from 'https';
import fs from 'fs';

const url = 'https://drive.google.com/uc?export=view&id=19_bMUViirt603Mr0BYryPJj-AZjdalMR';
const dest = './src/assets/images/new_logo.jpg';

function download(url: string, dest: string) {
  https.get(url, (res) => {
    if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      download(res.headers.location, dest);
      return;
    }
    const file = fs.createWriteStream(dest);
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Downloaded successfully');
    });
  }).on('error', (err) => {
    console.error('Error downloading:', err.message);
  });
}

download(url, dest);
