const fs=require('fs');
// fs.mkdir('rahul',()=>{
//     console.log('folder is created')
// })

// fs.writeFile('rahul/bio.txt','Hey,Rahul',()=>{
//     console.log('File is created')
// })

// fs.appendFile('rahul/bio.txt',' Whats up!',(err)=>{
//     err?console.log(err):console.log('data added')
// })



// const data=fs.readFile('rahul/bio.txt','UTF-8',(err,data)=>{
//     console.log(data)
// })


// fs.rename('rahul/bio.txt','rahul/myBio.txt',()=>{
//     console.log('File name has been changed')
// })


// fs.unlink('rahul/myBio.txt',()=>{
//     console.log('File has been deleted')
// })


fs.rmdir('rahul',()=>{
    console.log('Folder has been deleted')
})