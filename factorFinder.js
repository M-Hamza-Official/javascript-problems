let n = Number(prompt("Enter any number"));
if (n == null) {
  console.log("cancelled");
} else {
  if (isNaN(n)) {
    console.log("Please enter a valid number");
  } else {
    if (n > 0) {
      for (var i = 0; Math.floor(i <= n/2); i++) {
        if (n % i === 0) {
          console.log(i);
        }
      }
      console.log(n);
    }else{
      console.log('number should be positive and more than 0');
      
    }
  }
}
