/*
* Для a = 13,123456789, b = 2,123, n = 5 дробные части: 12345, 12300.
* Для a = 13,890123, b = 2,891564, n = 2 дробные части: 89, 89.
* Для a = 13,890123, b = 2,891564, n = 3 дробные части: 890, 891.
*/

let a = 13.890123;
let b = 2.891564;
let n = 2;

let aNormalized = Math.round(
  a % 1 * Math.pow(10, n)
);
let bNormalized = Math.round(
  b % 1 * Math.pow(10, n)
);

console.log(aNormalized, bNormalized)
console.log('Первое число больше', aNormalized > bNormalized)
console.log('Первое число меньше', aNormalized < bNormalized)
console.log('Первое число больше или равно второму', aNormalized >= bNormalized)
console.log('Первое число меньше или равно второму', aNormalized <= bNormalized)
console.log('Числа равны', aNormalized === bNormalized)
console.log('Числа не равны', aNormalized !== bNormalized)
