/*
unit 100 -6
     200 -8
     300 -10
     400 -12
*/
let units = Number(prompt('Enter units'));
let amount=0;
if(units >400 ){
    amount = (units-400) * 12
    units = 400
}//400
if(units >200 && units<=400){
amount += (units-200) * 10
units=200
}//200
if(units >100 && units<=200){
amount += (units-100) * 8
units=100
}//100
amount += units * 6

console.log(amount);

