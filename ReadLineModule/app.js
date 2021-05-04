const  readLine=require('readline');
var rl=readLine.createInterface({input:process.stdin,
                         output:process.stdout});


let num1=Math.floor((Math.random()*10)+1);                      
let num2=Math.floor((Math.random()*10)+1);  

let answer=num1+num2
rl.question(`What is ${num1} + ${num2}?\n`,(userinput)=>{
    if(userinput.trim()==answer){
        rl.close()
    }else{
        rl.setPrompt(`Incorrect answer Please try again\n`);
        rl.prompt();
        rl.on('line',(userinput)=>{
            if(userinput.trim()==answer){
                rl.close()
            }else{
                rl.setPrompt(`Your Answer of ${userinput} is incorrect\n`);
                rl.prompt()
            }

            
        });
    }

});
rl.on('close',()=>{
    console.log(`Correct!!!`)
});