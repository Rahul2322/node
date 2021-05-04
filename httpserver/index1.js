// const http=require('http');
// const server=http.createServer((req,res)=>{
//    console.log( req.url);
//     if(req.url=='/'){
//         res.end('hello,there')
//     }else if(req.url=='/about'){
//         res.end('About this...')
//     }else if(req.url=='/contact'){
//         res.end('ContactUs for enquiry')
//     }else{
//         res.writeHead(400,{"Content-type":"text/html"})
//         res.end("<h1>404 error page.Page doesn't exist</h1>")
//     }
// })
// server.listen(8000,'127.0.0.1',()=>{
//     console.log('listening to the port no 8000')
// })




const http=require('http');
const fs=require('fs');



const server=http.createServer((req,res)=>{
    const data=fs.readFileSync(`${__dirname}/userapi/api.json`,'utf-8');//here it loads once only
    const objData=JSON.parse(data)

    if(req.url=='/'){
        res.end('Hello,Welcome to our Page');
    }else if(req.url=='/contact'){
        res.end('You will find about the company contacts here ');
    }else if(req.url=='/userapi'){
        // fs.readFile(`${__dirname}/userapi/api.json`,'utf-8',(err,data)=>{//asynchronously here it needs calling again and again
        //     console.log(data)

        // })
        res.writeHead(200,{"content-type":"application/json"})
        console.log(objData[1].id)//here i am getting the data on console
        // res.end(objData)//not able to get data by res.end() on webpage
        res.end(data)

    }else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end('<h1>404 error page.Page does not exist</h1>');
    }
});



server.listen(8000,"127.0.0.1",()=>{
    console.log('Listening to the port no 8000')
});