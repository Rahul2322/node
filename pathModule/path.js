const path=require('path');

console.log(path.dirname('D:/NodeJs/pathModule/path.js'))
console.log(path.extname('D:/NodeJs/pathModule/path.js'))
console.log(path.basename('D:/NodeJs/pathModule/path.js'))


const mypath=path.parse('D:/NodeJs/pathModule/path.js')
console.log(mypath)
console.log(mypath.root)