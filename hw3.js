"use strict";

//1. Сделано в дз2

//2. Напишите цикл, который выводит такой треугольник

for(var hash = "#"; hash.length <= 7; hash += "#"){
  console.log (hash + "\n");
}

/* 3. Напишите программу, создающую строку, содержащую решётку 8х8, 
в которой линии разделяются символами новой строки. 
На каждой позиции либо пробел, либо #. 
В результате должна получиться шахматная доска. */

//Вариант 1. Как не стоит делать :)
console.log (new Array(5).join 
             (new Array(5).join("# ") + "\n" + new Array(5).join(" #") + "\n")
            );
            
//Вариант 2. И так тоже не стоит.
var black = "#",
    white = " ",
    str0 = (black + white).repeat(4),
    str1 ='\u202E'+str0, // юникод: возвращает строку в перевернутом виде
    chess = (str0 + "\n" + str1 + "\n").repeat(4);
console.log (chess);

//Вариант 3. Шахматная доска.
function getField (square) {
  for (var i = 0; i < square; i++) {
    var row = "";
    for (var j = 0; j < square; j++) {
      row += ((i + j) % 2 == 0) ? "[ ]" : "[#]";
    }
    console.log(row);
  }
}
getField (8);


/* 
Практика переехала в отдельный файл:
https://github.com/craftyRusk/js_course_hw/blob/master/phonebook.js  
*/
