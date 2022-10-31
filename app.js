/*console.log("Hello world");
for(var i=0; i<3; i++) {
    setTimeout(function(){console.log(i) });
}//333
for(let i=0; i<3; i++) {
    setTimeout(function(){console.log(i) });
}// 012
function sum(op1, op2) {
    let res = op1 + op2;
    return res;
}
let op1 = 10;
let op2 = 20;
console.log(sum(op1, op2))*/


//HW #11
function sumDigits(n) {
    //compute sum of digits for the integer numbers
   number = Math.abs(number);//сделали положительным
   let sum = 0;
   number = Math.trunc(number); // get rid of the fractional part
   do{
    let digit = number % 10; 
    number = (number - digit) / 10;
    sum += digit;
   }while(number !=0);
   return sum;

}
//Example
let sum = sumDigits(-47767);
console.log(sum); //should be printed out 6