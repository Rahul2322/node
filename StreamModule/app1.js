const fs=require('fs');
const zlib=require('zlib')//The zlib module provides compression functionality implemented using Gzip, Deflate/Inflate, and Brotli.

// const gzip=zlib.createGzip();//zipping
const gunzip=zlib.createGunzip();//unzipping


// const readStream=fs.createReadStream('./1.txt','utf8');
// const writeStream=fs.createWriteStream('2.txt.gz');


const readStream=fs.createReadStream('2.txt.gz');
const writeStream=fs.createWriteStream('uncompressed.txt');



readStream.pipe(gunzip).pipe(writeStream);
