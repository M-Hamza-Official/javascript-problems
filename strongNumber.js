let n = Number(prompt("Enter any number"));
if (n === null) {
  console.log("cancelled");
} else {
  if (isNaN(n)) {
    console.log("Please enter a valid number");
  } else {
    if (n > 0) {
     let sum =0
     var copy = n
     while(n>0){
         var fact =1
        let rem = n%10
        for (let i = 1; i <=rem ; i++) {
            fact = fact*i;
            
        }
        sum = sum + fact;
       n= Math.floor(n/10)

     }
     if(copy ===sum){
        console.log('its strong');
        
     }else{
        console.log('not strong');
        
     }
    }else{
      console.log('number should be positive and more than 0');
      
    }
  }
}