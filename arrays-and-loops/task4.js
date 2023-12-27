/*
Цель задания
Научиться обрабатывать массивы одним циклом.

Напишите программу, которая будет объединять два массива: arr1 и arr2. Результат объединения нужно вывести в консоль с помощью команды console.log в таком виде:

[2, 2, 17, 21, 45, 12, 54, 31, 53, 12, 44, 23, 5]

  Важно: для выполнения этого задания можно использовать только один цикл. Программа должна корректно работать с массивами любой длины. Нельзя переприсвоить массивы целиком друг в друга
*/

let arr1 = [2, 2, 17, 21, 45, 12, 54, 31, 53];
let arr2 = [12, 44, 23, 5];
let arr1Length = arr1.length;

let length = arr1Length + arr2.length;
let result = new Array (length);


for(let i = 0; i < length; ++i) {
 if (i < arr1Length){
  result[i] = arr1[i];
 } else {
  result[i] = arr2[i - arr1Length]
}
}

console.log(result);
