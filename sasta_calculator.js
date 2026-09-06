let output= Number(prompt('press 1 for +,press 2 for -,press 3 for x,press 4 for /'))

if(output===1){
let a = Number(prompt('value of a'))
let b = Number(prompt('value of b'))
console.log(a+b);

}else if(output ===2){
let a = Number(prompt('value of a'))
let b = Number(prompt('value of b'))
console.log(a-b);
}else if(output===3){
let a = Number(prompt('value of a'))
let b = Number(prompt('value of b'))
console.log(a*b);
}else{
let a = Number(prompt('value of a'))
let b = Number(prompt('value of b'))
console.log(a/b);
}
