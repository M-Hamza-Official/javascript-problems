//left order
let arr = [1, 2, 3, 4, 5, 6];
//[2,3,4,5,6,1]
let copy = arr[0];
for (let i = 0; i < arr.length - 1; i++) {
  arr[i] = arr[i + 1];
}
arr[arr.length - 1] = copy;
// console.log('rotate left by one position',arr);
//right order
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
let copy2 = arr2[arr2.length - 1];
for (let i = arr2.length - 1; i > 0; i--) {
  arr2[i] = arr2[i - 1];
}
arr2[0] = copy2;
// console.log('rotate right by one position',arr2);
//left rotation by k length
let arr3 = [2, 3, 4, 5, 6, 7, 8, 9];
let k = Number(prompt("enter the k value"));
k = k % arr3.length;
for (let j = 0; j < k; j++) {
  let copy = arr3[0];
  for (let i = 0; i < arr3.length - 1; i++) {
    arr3[i] = arr3[i + 1];
  }
  arr3[arr3.length - 1] = copy;
}
// console.log(arr3);
//left rotation by k homework
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8];
let k5 = Number(prompt("enter the k value"));
k5 = k5 % arr5.length;
for (let j = 0; j < k; j++) {
  let copy = arr5[0];
  for (let i = 0; i < arr3.length - 1; i++) {
    arr5[i+1] = arr5[i];
  }
  arr5[arr5.length - 1] = copy;
}
//left  rotation by k element by algorithm
//by using algorithm
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let temp = new Array(arr4.length);
let k2 = Number(prompt("Enter value of k2"));
for (let i = 0; i < arr4.length; i++) {
  temp[i] = arr4[(i + k2) % arr4.length];
}
// console.log(`array left rotation by ${k2}`,temp);
