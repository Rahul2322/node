// The http.createserver() method includes request and response

// the request object can be used to get information about the current http request
// eg.url,request header,and data

// the response object can be used to send a response for a current http request

// if the response from the http server is supposed to be displayed as html,
// you should include an http header with the current content type:

// const http=require('http');
// const server=http.createServer((req,res)=>{
//     res.end('Hello from the other side ')
// });

// server.listen(8000,'127.0.0.1',()=>{
//     console.log('Listening to the port no 8000')
// });

