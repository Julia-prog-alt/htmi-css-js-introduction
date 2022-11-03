// let strNum1 =  "123";
// let strNum2 = "9";
// console.log(strNum1 + strNum2); // 1239
// console.log(strNum1 - strNum2); // 114
// //conversions from string to number
// console.log(strNum1 > strNum2); // false
// let num1 = +strNum1;
// let num2 = +strNum2;
// let strNumstr = '123ab';
// let numStr = +strNumstr;//из строки в число
// console.log(numStr); 
// let num = parseInt(strNumStr); // из строки в число
// if (isNaN(numStr)) {
//     console.log("numStr is NaN")
// }
// let num10 = 123;
// let strNum10 = "" + num10;
// let strNum16 = num10.toString(8);
// console.log(strNum10, strNum16);

// conversion from Morse code to number
// symbol "." -> 0;  symbol "-" -> 1
// function fromMorseToNumber (morseCode) {
//     let result = 0;
//     for(let i = 0; i < morseCode.length; i++){
//         let code = morseCode[i] == "." ? 0 : 1;//если это точка то 0,иначе 1
//         result = result*2 + code; 
//All numbers(result, code) are binary
// 1. result = 11;
// 2. result*2 => 110;
// 3. code = 1;
// 4. result+code = 101;
//     }
//     return result;
// }
// console.log(fromMorseToNumber("-.-...-.-..--"));
// function fromNumberToMorse(number){
//     number = Math.abs(number);
//     let res = "";
//     do {
//         let digit = number % 2;
//         let sym = digit == 0 ? '.' : '-';
//         res = sym + res;
//         number = Math.tranc(number / 2);// округление
//     }while(number != 0);
// }
// console.log(fromNumberToMorse(5203));
//делить не на 2 а на base

function getSymbol(digit){
    let codeA = 'a'.charCodeAt(); //Метод charCodeAt() возвращает числовое значение Юникода для символа по указанному индексу 
    if(digit > 9) {
        digit = String.fromCharCode(codeA + digit - 10); //Метод fromCharCode() преобразует значения Unicode в символы.

    }
    return digit;
    //31 - 10 + 97
}
function fromNumbertoString (number, base){
    number = Math.abs(number);
    let res = "";
    do{
        let digit = number % base;
        let sym = getSymbol(digit);
        res = sym+res;
        number = Math.trunc(number / base);

    }while(number != 0);
    return res;
} 


function getDigit(symbol) {
    let codeA = 'a'.charCodeAt();
    let res = symbol < '9' ? +symbol : symbol.charCodeAt() - codeA + 10;
    return res;
}
function fromStringToNumber(string, base){
    string = string.toLoverCase();//позволяет преобразовать строку в строчные буквы (нижний регистр)
    let = result = 0;
    for (let i = 0; i < string.length; i++){
        let digit = getDigit(string[i]);
        result = result * base + digit; 
    }
    return result;
}
console.log(String.fromCharCode(126))

console.log(fromNumbertoString(90590, 36))
console.log(fromStringToNumber("123", 10))
console.log(fromStringToNumber("10", 16))





// function fromNumberToString(number, base) {
//     console.log('number=', number, 'base=', base);
//     if(isBaseValid(base)){
//         return 'base='+base' is not valid';
//     }
//     if(isNaN(number)){
//         return 'number=' + number + ' isNaN';
//     }
//     let result = "";
//     let posNum = Math.abs(number);
//     while(posNum != 0) {
//         let rem = posNum % base;
//         if(rem > 9) {
//             //convert reminder to symbols for 'a' to 'z'
//             rem = String.fromCharCode(87+rem);  
//         }
//         result = rem + result;
//         posNum = Math.trunc(posNum / base);
//     }
//     return number < 0 ? ('-' + result): result;
// }
// function fromStringToNumber(string, base) {
//     //TODO
// }
// //detting code frome symbol
// console.log('abc'.charCodeAt(0))

// //getting symbol from code
// console.log(String.fromCharCode(99)){
// function isBaseValid(base)
// if(isNaN(base)){
//     return false;
// }
// if(typeof base == 'number' && base>=2 && base<=36){
//     return true;
// }
// }