// /*Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6 */


// // let string='ifkhchlhfd';
// // for(char of string){
// //     console.log(typeof(char.charCodeAt()))
// // }

// let str='ABC'.split('').map((data)=>{return(data.charCodeAt())});
// console.log(str)
// let total1=str.join('')
// console.log(total1)
// let total2=total1.replace(/7/g,1)
// console.log(total2)
// total1=total1.split('').reduce((a,b)=>(parseInt(a)+parseInt(b)))
// total2=total2.split('').reduce((a,b)=>(parseInt(a)+parseInt(b)))
// console.log(total1-total2)




// function calc(x){
//     let str=x.split('').map((data)=>{return(data.charCodeAt())});
//   let total1=str.join('')
//   let total2=total1.replace(/7/g,1)
//   total1=total1.split('').reduce((a,b)=>(parseInt(a)+parseInt(b)))
//   total2=total2.split('').reduce((a,b)=>(parseInt(a)+parseInt(b)))
//   return total1-total2
  
//   }
//   console.log(calc('ABC'))
//   console.log(typeof(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')))


// let x='EFGSHKj'  

// console.log([...x])

// //Another persons code
// function calc(x){
//     let sum = n => [...n].reduce((a,b) => +a + +b);
//     let total1 = x.replace(/./g, x => x.charCodeAt(0));
//     let total2 = total1.replace(/7/g,'1');
//     return sum(total1) - sum(total2);
//   }
  



// // function sumDigits(n) {
// //     return (n - 1) % 9 + 1;
// //   }
// //   console.log(sumDigits(2568))



//this below code is related to node to know how to pass arguments in terminal

// var myArgs = process.argv.slice(2);
// console.log('myArgs: ', myArgs);

// switch (myArgs[0]) {
// case 'insult':
//     console.log(myArgs[1], 'smells quite badly.');
//     break;
// case 'compliment':
//     console.log(myArgs[1], 'is really cool.');
//     break;
// default:
//     console.log('Sorry, that is not something I know how to do.');
// }

// console.log('My %s has %d years', 'cat', 2.356)

// const oranges = ['orange', 'orange']
// const apples = ['just one apple']
// oranges.forEach(fruit => {
//   console.count(fruit)
// })
// apples.forEach(fruit => {
//   console.count(fruit)
// })


//Take a string of len n and intger k which is factor of n ,split str into n/k and print it remove duplictes frm substr

// const str=(input,k)=>{
//   let n=input.length/k
//   for(let i=0,o=0;i<k;i++,o+=n){
    
//     console.log (input.substr(o,n).split('').
//     filter((ele,indx,arr1)=>{
//     return arr1.indexOf(ele)==indx
//     }).join(''))
//   }

  
// }
// str('AABCAAADA',3)


function primeNumbers(n) {
  array = [];
  
  for (var i = 2; array.length < n; i++) {
    var divisorFound = false;
      for (var count = 2; count < i; count++) {
          
          if (i % count === 0) {
              divisorFound = true;
              break;
          }
      }
      if (divisorFound == false) {array.push(i);}
  }
  return array.reduce((a,b)=>(a*b));
}
console.log(primeNumbers(5))