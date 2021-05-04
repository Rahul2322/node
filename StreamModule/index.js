const fs=require('fs');
const http=require('http');

const server=http.createServer();
//readstream inherits eventemitter class so we can use its methods
server.on('request',(req,res)=>{
    // fs.readFile('input.txt','utf-8',(err,data)=>{
    //     if(err) return console.error(err);
    //     res.end(data)
    // }) 2nd way

    // const rstream=fs.createReadStream('input.txt');
    // rstream.on('data',(chunkdata)=>{
    //     res.write(chunkdata)
    // });
    // rstream.on('end',()=>{
    //     res.end()
    // });
    // rstream.on('error',(err)=>{
    //     console.log(err)
    //     res.end('File not found')
    // })

    //3 way
    const rstream=fs.createReadStream('input.txt');
    rstream.pipe(res)
    
})

server.listen(8000,"127.0.0.1")

