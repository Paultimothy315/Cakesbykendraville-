import fs from 'fs';
const buf = fs.readFileSync('src/assets/images/logo.png');
console.log(buf.slice(0, 10).toString('hex'));
