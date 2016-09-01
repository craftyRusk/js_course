"use strict";

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
