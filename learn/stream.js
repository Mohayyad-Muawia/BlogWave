const fs = require('fs');

const readStream = fs.createReadStream('./files/blog1.txt', { encoding: 'utf-8' })
const writeStream = fs.createWriteStream('./files/blog2.txt')

// readStream.on('data', (chunk) => {
//     console.log('-----NEW CHUNK-----');
//     console.log(chunk);
    
//     writeStream.write(chunk);
// })

readStream.pipe(writeStream);