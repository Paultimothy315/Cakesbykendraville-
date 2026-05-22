import fs from 'fs';

const buffer = fs.readFileSync('./src/assets/images/new_logo.jpg');
const base64 = buffer.toString('base64');
const content = `export const logoImage = "data:image/jpeg;base64,${base64}";\n`;
fs.writeFileSync('./src/assets/logo-data.ts', content);

console.log('done');
