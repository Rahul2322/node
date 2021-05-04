const fs=require('fs');
const readStream=fs.createReadStream('index.js','utf8');
const writeStream=fs.createWriteStream('example.txt');

// readStream.on('data',(chunk)=>{
//     writeStream.write(chunk)//here i can start writing this chunk of data to other file without waiting for whole data to load it first whilereading the file
// })
// //or simply just use pipe
// readStream /*(source)*/.pipe(writeStream)/*destination*/
