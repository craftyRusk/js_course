"use strict";

/* Задание 1. 
Напишите функцию min
принимающую два аргумента
возвращающую минимальный из них. */

function min () {
  var i = prompt ("Введите первое число"),
      j = prompt ("Введите второе число");
  console.log (i < j ? i : j);
}
min ();

/* Задание 2. Напишите функцию countBs, 
которая принимает строку в качестве аргумента, 
и возвращает количество символов “B”, содержащихся в строке.
*/

function countBs() { 
  var text = prompt("Введите текст"), 
      i = 0; 
  for (var j = 0; j < text.length; j++){ 
    if (text.charAt(j) == "B") { 
      i++; 
    } 
  } 
  console.log (i); 
} 
countBs(); 

/* Затем напишите функцию countChar:
принимает второй параметр — символ, который мы будем искать в строке  
*/

function countChar() {
  var text = prompt ("Введите текст"),
      target = prompt ("Введите искомый символ"),
      i = 0; 
  for (var j = 0; j < text.length; j++){ 
    if (text.charAt(j) == target) { 
      i++; 
    } 
  } 
  console.log (i); 
} 
countChar();

/* Задание 3. Не доделано.

function isEven() {
  var num = prompt ("Введите число");
  console.log (num % 2 == 0 ? "четное" : "нечетное");
}
isEven();

*/
