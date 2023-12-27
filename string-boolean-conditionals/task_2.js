/*
Что нужно сделать
В переменных userName, userSurname даны имя и фамилия пользователя. При этом в строках беспорядок с большими и маленькими буквами, и нужно оформить строки единообразно. Для этого первые буквы имени и фамилии приведите к верхнему регистру (большие буквы), а оставшиеся — к нижнему (маленькие буквы). Запишите результат в новые переменные и выведите их значения с помощью console.log. С помощью тернарных операторов и console.log выведите сообщение «Имя было преобразовано» или «Имя осталось без изменений» для имени и фамилии в зависимости от того, были ли исходные строки равны преобразованным.

Проверка результата
Для любых имени и фамилии в любом регистре должны выводиться такие же имя и фамилия, но первая буква у них большая, а все остальные — маленькие.
*/

let userName = 'Ксения'
let userSurname = 'иЛьинЫх'

let first = userName.substring(0, 1)
let last = userName.substring(1)

let sfirst = userSurname.substring(0, 1)
let slast = userSurname.substring(1)

let correctName = first.toUpperCase() + last.toLowerCase();
let correctSurname = sfirst.toUpperCase() + slast.toLowerCase();

console.log(correctName);
console.log(correctSurname);

/*if (correctName !== userName) {
  console.log('Имя было преобразовано')
} else {
  console.log('Имя осталось без изменений')
}

if (correctSurname !== userSurname) {
  console.log('Фамилия была преобразована')
} else {
  console.log('Фамилия осталась без изменений')
}*/

userName !== correctName ? console.log('Имя было преобразовано') : console.log('Имя осталось без изменений');
userSurname !== correctSurname ? console.log('Фамилия была преобразована') : console.log('Фамилия осталась без изменений');
