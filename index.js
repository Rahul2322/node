//Node modules fs(filesystem)
const fs=require('fs')
// fs.writeFileSync('read.txt','Welcome to Node');
// This creates a new file if that file is not present and write data to it

// fs.writeFileSync('read.txt','Node is a runtime engine');
//If the file is present then it overwrites it 

// fs.appendFileSync('read.txt',' Node is a javascipt runtime engine')
//append adds the data in the file already present

const buf_data=fs.readFileSync('read.txt')
console.log(buf_data)

// //<Buffer 4e 6f 64 65 20 69 73 20 61 20 72 75 6e 74 69 6d 65 20 65 6e 67 69 6e 65 20 20 4e 6f 64 65 20 69 73 20 61 20 6a 61 76 61 73 63 69 70 74 20 
// 72 75 6e 74 ... 10 more bytes>

//Node.js includes additional data type called buffer(not available in browser js)
//Buffer is mainly used to store binary data
//while reading from a file or receiving packets from the network

console.log(buf_data.toString())
//to read data convert it into  string

fs.renameSync('read.txt','readwrite.txt')

// https://www.freecodecamp.org/news/do-you-want-a-better-understanding-of-buffer-in-node-js-check-this-out-2e29de2968e8/