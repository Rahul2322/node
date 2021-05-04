// JSON stands for Javascript Object Notification.Js is lightweight format for storing and transporting data
// JSON is often used to send data from a server to webpage


const fs=require('fs')
const bioData={name:'vinod',
               age:27,

            };


// 1.convert to JSON
// 2.Add in another file.
// 3.Read file
// 4.again convert back to js obj 
// 5.console.log


const jsonData=JSON.stringify(bioData);
// fs.writeFile('json1.json',jsonData,(err)=>{
//     console.log('Done')
// })

fs.readFile('json1.json','UTF-8',(err,data)=>{
    console.log(data);
    const objData=JSON.parse(jsonData);
    console.log(objData)
})
