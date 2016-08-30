"use strict";

//1. Сделано в дз2

//2. Напишите цикл,  выводит такой треугольник

for(var hash = "#"; hash.length <= 7; hash += "#"){
  console.log (hash + "\n");
}

/* 3. Напишите программу, создающую строку, содержащую решётку 8х8, 
в которой линии разделяются символами новой строки. 
На каждой позиции либо пробел, либо #. 
В результате должна получиться шахматная доска. */

//Вариант 1
console.log (new Array(5).join 
             (new Array(5).join("# ") + "\n" + new Array(5).join(" #") + "\n")
            );
            
//Вариант 2
var black = "#",
    white = " ",
    str0 = (black + white).repeat(4),
    str1 ='\u202E'+str0, // юникод: возвращает строку в перевернутом виде
    chess = (str0 + "\n" + str1 + "\n").repeat(4);
console.log (chess);

//Практика 

var users = [
  {
    firstName: "Lidiya",
    lastName: "Yakupova",
    birthDay: "26.05.1991",
    phones: [
      "89040000000",
      "83430000000"
    ]
  },
  {
    firstName: "Jack",
    lastName: "Daniels",
    birthDay: "01.01.1966",
    phones: [
      "89040000001",
      "83430000001"
    ]
  }
];

var user = {};

user.firstName = prompt ("Введите имя");
user.lastName = prompt ("Введите фамилию");
user.birthDay = prompt ("Введите дату рождения");
user.phones = [];
user.phones[0] = prompt ("Введите номер телефона");

users.push(user);

for (var i = 0; i < users.length; ++i) {
  console.log("Имя: " + users[i].firstName,
              "Фамилия: " + users[i].lastName,
              "Дата рождения: " + users[i].birthDay,
              "Телефоны: " + users[i].phones.join(', '));
}
