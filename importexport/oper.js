const add=(a,b)=>{
    return a+b
}


const sub=(a,b)=>{
    return a-b
}

const mult=(a,b)=>{
    return a*b
}

const name='rahul'


// module.exports=add  // this method allow us to access one func only

//or

module.exports.add1=add
module.exports.sub1=sub
module.exports.mult1=mult


// // //or

// module.exports={add,sub,mult,name}//object destructurring


