const os=require('os');

console.log(os.arch())
console.log(os.type())
console.log(os.platform())
console.log(os.tmpdir())
console.log(os.hostname())

const totalMemory=os.totalmem()
console.log(totalMemory)//bytes
console.log(`${totalMemory/1024/1024/1024}`)//gb of ram

const freeMemory=os.freemem();
console.log(`${freeMemory/1024/1024/1024}`)//gb of free ram