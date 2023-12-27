/* Напишите генератор двух случайных чисел в диапазоне между n и m включительно.

n = 0, m = 100;
n = 2, m = 5;
n = 100, m = −5;
n = -3, m = −10.
*/

let n = -3;
let m = -10;

let range = Math.abs(m-n);
let numberInRange = Math.round(Math.random() * range)
let min = Math.min(n, m)
let max = Math.max(n, m)

console.log(min + numberInRange, max - numberInRange)
console.log('Первое число больше', min + numberInRange > max - numberInRange)
console.log('Первое число меньше', min + numberInRange < max - numberInRange)
console.log('Первое число больше или равно второму', min + numberInRange >= max - numberInRange)
console.log('Первое число меньше или равно второму', min + numberInRange <= max - numberInRange)
console.log('Числа равны', min + numberInRange === max - numberInRange)
console.log('Числа не равны', min + numberInRange !== max - numberInRange)
