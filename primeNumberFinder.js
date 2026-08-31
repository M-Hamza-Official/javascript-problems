let n = Number(prompt("Enter any number"));
if (n == null) {
  console.log("cancelled");
} else {
  if (isNaN(n)) {
    console.log("Please enter a valid number");
  } else {
    if (n > 0) {
     isPrime(n)
    }else{
      console.log('number should be positive and more than 0');
      
    }
  }
}
function isPrime(n){
if (n ===1) return false;
if (n===2) return 
}