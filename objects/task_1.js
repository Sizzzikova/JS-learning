// Обязательная часть задания
let user1={
  name: 'Игорь',
  age: 17
}

let user2={
  name: 'Оля',
  age: 21
}

function getOlderUser(userOne, userTwo){
  // Здесь решение задачи

  if (userOne > userTwo){
    return userOne.name;
  } else {
    return userTwo.name
  }
}

let result = getOlderUser(user1, user2)
console.log('Старший пользователь:',result);


// // Не обязательная часть задания
let allUsers=[
  {
    name: 'Валя',
    age: 11
  },
  {
    name: 'Таня',
    age: 24
  },
  {
    name: 'Рома',
    age: 21
  },
  {
    name: 'Надя',
    age: 34
  },
  {
    name: 'Антон',
    age: 7
  }
]

function getOlderUserArray(usersArray){
// //   // Здесь решение задачи
  let oldestUser = usersArray[0];

  for (let i = 1; i < usersArray.length; ++i) {
    if (oldestUser.age < usersArray[i].age) {
      oldestUser = usersArray[i];
    }
  }
  return oldestUser.name;
}

let result2 = getOlderUserArray(allUsers)
console.log('Старший пользователь:',result2);
