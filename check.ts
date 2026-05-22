import fs from 'fs';
const stats = fs.statSync('./src/assets/images/new_logo.jpg');
console.log('Size:', stats.size);
const buffer = fs.readFileSync('./src/assets/images/new_logo.jpg');
console.log('Start:', buffer.toString('utf8', 0, 50));
