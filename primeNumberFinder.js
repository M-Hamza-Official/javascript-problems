let n = Number(prompt("Enter any number"));
if (n == null) {
  console.log("cancelled");
} else {
  if (isNaN(n)) {
    console.log("Please enter a valid number");
  } else {
    if (n > 0) {
     console.log(isPrime(n))
    }else{
      console.log('number should be positive and more than 0');
      
    }
  }
}
function isPrime(n){
if (n ===1) return false;
if (n===2) return true
if(n%2==0) return false
for (let i = 3; i < Math.sqrt(n); i+=2) {
if(n%i == 0) return false  

}
return true
}