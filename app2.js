let ar =[];
ar[10000] = 100;
ar[1] = [1,2,3];
console.log("length of array = ", ar.length);
ar[0] = "hello";
console.log("10000-th lement = ", ar[10000]);
console.log("0-th element = ", ar[0]);
console.log("1-th elemrnt = ", ar[1]);
let str = "Hello";
let arStr = Array.from(str) //getting array of the string's symbols. Функция Array.from() создаёт новый массив на основе переданного объекта.
console.log("String 'Hello' -> array is ", arStr);
//for(let i = 0; i < arStr.length; i++){
//    console.log("element at index ", i, arStr[i] );
//}
function println(element, index, array) {
    console.log("element at index ", index, element);
}


arStr.forEach(println);//Метод forEach позволяет последовательно перебрать все элементы массива.
let arCodeAsci = arStr.map(function(symbol, index){
    return index % 2 == 0 ? symbol.charCodeAt() : symbol; 
})
/*Метод .map() — один из самых популярных методов. 
Метод .map() создает массив, вызывая определенную функцию для каждого элемента родительского массива. 
Метод .map() не использует мутацию и создает новый массив, в отличие от мутационных методов, 
которые вносят изменения в вызывающий массив.
Метод charCodeAt() возвращает числовое значение Юникода для символа по указанному индексу
*/


