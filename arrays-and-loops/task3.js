/* Научиться искать индекс (порядковый номер) нужного элемента в массиве.

Что нужно сделать
С помощью цикла найдите индекс (порядковый номер) элемента массива из предыдущего задания с числом n. Если такой элемент не будет найден, то выведите соответствующее сообщение на экран.

Проверка результата
Для любых значений массива из второго задания и числа n вы должны получать индекс элемента в массиве или сообщение о том, что такого элемента нет.
 */

let array = [];
let count = 5;

for (let i = 1; i <= count; ++i) {
  array.push (i);
}

let arrMix = [1,2,3,4,5];

for (let i = 0; i < arrMix.length; i++) {
  let j = Math.floor(Math.random() * (i + 1));
  let temp = arrMix[i];
  arrMix[i] = arrMix[j];
  arrMix[j] = temp;
}

let n = 45;
let index = arrMix.indexOf(n);

if (index < 0) {
  console.log('Элемент не найден')
} else {
  console.log('Индекс элемента', index);
}
