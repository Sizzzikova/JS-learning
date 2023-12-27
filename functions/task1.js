/*
Что нужно сделать
Создайте функцию с названием getAge(), которая будет рассчитывать возраст по году рождения. У функции будет всего один аргумент (параметр), который нужно передать в функцию. Функция должна сделать расчёт возраста по текущему году. После расчёта функция должна вернуть результат с помощью команды return.
*/



function getAge(year) {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  return currentYear - year;
}

console.log(getAge(1988));