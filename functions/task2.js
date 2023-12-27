
/*
Напишите функцию filter(), которая создаёт массив email-адресов, не попавших в чёрный список. В качестве аргументов функция должна принимать два массива: массив строк с исходными email-адресами и массив строк с email-адресами в чёрном списке.


Выведите результат выполнения функции в консоль в виде массива:

['my-email@gmail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru'].

Рекомендации к выполнению
Задачу можно решить двумя способами: удалением лишних элементов из массива белого списка или созданием нового массива с адресами, которых нет в массиве чёрного списка. Второй вариант предпочтительнее и проще.

*/

function filter(whiteList, blackList) {
  let validList = [];

  for (let i = 0; i < whiteList.length; i++) {
    if (!blackList.includes(whiteList[i])) {
      validList.push(whiteList[i]);
    }
  }
  return validList;
}


let whiteList = ['my-email@gmail.ru', 'jsfunc@mail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru', 'goodday@day.ru']
let blackList = ['jsfunc@mail.ru','goodday@day.ru']
let result = filter(whiteList, blackList)
console.log(result)

