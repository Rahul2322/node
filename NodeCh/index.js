const fs=require('fs');

// // fs.mkdirSync('Rahul');//creating  a new folder

// // fs.writeFileSync('Rahul/bio.txt','My name is Rahul');

// fs.appendFileSync('Rahul/bio.txt',' I am inevitable')

// // const data=fs.readFileSync('Rahul/bio.txt','utf-8');
// // console.log(data)

// fs.renameSync('Rahul/bio.txt','Rahul/myBio.txt')

// fs.unlinkSync('Rahul/myBio.txt') //deletes a file


// fs.rmdirSync('Rahul') //removes directory


//if a folder has more then one filr you need to loop through itto delete
fs.mkdir('example',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Created successfully')
    }
});
fs.writeFile('a.txt','this',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('File created')
    }

});

fs.writeFile('b.txt','this',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('File created')
    }

});

fs.readdir('example',(err,Files)=>{//gives array of files in dir
    if(err){
        console.log(err)
        
    }else{
        console.log(files);
        for(let file of files){
            fs.unlink('./example/'+file,(err)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log('Files deleted successfully')
                }
            })
        }
    }
})