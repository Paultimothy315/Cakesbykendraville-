import https from 'https';

https.get('https://drive.google.com/thumbnail?id=19_bMUViirt603Mr0BYryPJj-AZjdalMR&sz=w500', (res) => {
  console.log('Status Code:', res.statusCode);
  console.log('Content-Type:', res.headers['content-type']);
});
