const fs=require('fs');
// const data=fs.readFileSync('read.txt','UTF-8');
// console.log(data)
// console.log('After the data')

//happens synchronously


const data=fs.readFile('read.txt','UTF-8',(err,data)=>{
    console.log(data)
})

console.log('After data')

//happens asynchronously prints second console first