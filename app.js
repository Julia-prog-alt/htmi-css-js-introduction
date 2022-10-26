console.log("Hello world");
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
console.log(sum(op1, op2))