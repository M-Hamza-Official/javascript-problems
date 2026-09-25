let prompt= require('prompt-sync')()
const n =prompt('enter n' + ' ')
Number(n)

// for (let i = 1; i <= n; i++) {
//     let ascii=65
// for (let j = 1; j <= i; j++) {

//     process.stdout.write(String.fromCharCode(ascii) + ' ')
//     ascii++
// }    
// console.log();

// }
// for (let i = 1; i <= n; i++) {
//     // let ascii=65
// for (let j = 1; j <= n-i+1; j++) {

//     process.stdout.write('* ')
//     // ascii++
// }    
// console.log();

// }
for (let i = 1; i <= n; i++) {
    // let ascii=65
for (let j = n; j > i; j--) {

    process.stdout.write('* ')
    // ascii++
}    
console.log();

}