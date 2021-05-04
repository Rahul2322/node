// const fs=require('fs');
// fs.writeFile('read.txt','Welcome',()=>{
//     console.log('File is created')
// })

// fs.appendFile('read.txt',' Rahul',(err)=>{
//     console.log('New data added');
//     console.log(err)
// })

// fs.readFile('read.txt','UTF-8',(err,data)=>{
//     console.log(data)
// })

function calc(x){
    let sum = n => [...n].reduce((a,b) => +a + +b);
    let total1 = x.replace(/./g, x => x.charCodeAt());
    console.log(total1)
    let total2 = total1.replace(/7/g,'1');
    return sum(total1) - sum(total2);
  }
  console.log(calc('ABC'))