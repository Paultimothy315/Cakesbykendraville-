import https from 'https';
import fs from 'fs';
import path from 'path';

const url = 'https://drive.google.com/uc?export=view&id=19_bMUViirt603Mr0BYryPJj-AZjdalMR';
const dest = path.join(process.cwd(), 'src/assets/images/new_logo.jpg');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      const dir = path.dirname(dest);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

download(url, dest)
  .then(() => console.log('Logo downloaded successfully'))
  .catch(err => console.error('Error downloading logo:', err));
