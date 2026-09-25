//max findin in array
/*let arr = [1, 2, 3, 4, 5, 99];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}
// console.log(max);
//second max finding

let arr2 = [12, 13, 14, 15, 16, 17, 18, 19];
let max2 = Math.max(arr[0], arr[1]); //13
let smax2 = Math.min(arr[0], arr[1]); //12
for (let i = 2; i < arr2.length; i++) {
  if (max2 < arr2[i]) {
    smax2 = max2;
    max2 = arr2[i];
  } else if (smax2 < arr2[i]) {
    smax2 = arr2[i];
  }
}
// console.log(smax2);
//swaping the array
let arr3=[1,2,3,4,5,6]
let temp = new Array(arr3.length)

// let j=0;
for (let i= arr3.length-1;i>=0; i--) {
temp[j]= arr3[i];
j++
  
}
// console.log(temp);
//swapping arrays without space
let arr4=[1,2,3,4,5,6,7]
let i=0
let j=arr4.length-1
while(i!=j){
  let temp=arr4[i]
  arr4[i]=arr4[j]
  arr4[j]=temp
  i++
  j--

}
console.log(arr4);*/
//separating 0 and 1
let arr5=[1,0,1,1,1,0,0,0,1,1,1,0]
let i5=0
let j5=0
while(i5!=arr5.length){
  if(arr5[i5]==0){
    let temp=arr5[i5]
    arr5[i5]=arr5[j5]
    arr5[j5]=temp
    j5++
  }
  i5++
}
console.log(arr5);
