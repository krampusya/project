/* eslint-disable no-redeclare */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
 
"use strict"
 
// /* eslint-disable no-unused-vars */
// const arr = ['a', 'b', 'c'];

// arr[10] = '3456';

// console.log(arr);

// const arrObj = {
//     a: 'a',
//     '1': 'b',
//     2: 'c',
//     abc: {
//         df: [{}, {}],
//         def: {

//         }
//     }
// };

// const b = 'b';

// // arrObj.b = '1234';
// arrObj['b'] = [];


// console.log(arrObj['b']);
// console.log(arrObj.b);

// console.log(arr[1]);
// console.log(arrObj[1]);

// // const obj = {a: 1, b: 2};
// const obj = {
//     'Anna': 500,
//     'Alice': 800
// };




// const storeName = 'Krampus';

// const storeDescription = {
//     budget: 10000,
//     employees: ['Oleg', 'Oktavian', 'Kolya'],
//     products: {
//         'iphone': 1000,
//         'macbook': 2000
//     },
//     open: true

// };

// alert('Hello');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = +prompt('Вам є 18?', '18');
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('Яке ваше імʼя?', '');
// answers[1] = prompt('Яке ваше прізвище?', '');
// answers[2] = prompt('Скільки вам років?', '');

// console.log(typeof(answers));
// console.log(typeof(null));

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = 'Oleg';

// alert(`Привіт, ${user}`);

// practice
// const numberOfFilms = +prompt('Скільки фільмів Ви вже подивились?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const lastMovie1 = prompt('Один з останніх переглянутих фільмів?', '');
// const ratingOfFilm1 = prompt('На скільки оціните його', '');
// const lastMovie2 = prompt('Один з останніх переглянутих фільмів?', '');
// const ratingOfFilm2 = prompt('На скільки оціните його', '');

// personalMovieDB.movies[lastMovie1] = ratingOfFilm1;
// personalMovieDB.movies[lastMovie2] = ratingOfFilm2;

// console.log(personalMovieDB);

// Умови

// if (4 == 9) {
//     console.log('ok!');
// } else{
//     console.log('error');
// }



// if (num < 49) {
//     console.log('Ну і лапа');
// } else if (num>100) {
//     console.log('to much');
// } else {
//     console.log('ok!');
// }

// (num === 50) ? console.log('ok!') : console.log('error');

// const num = 50;

// switch (num) {
//     case 49: 
//         console.log('Ну і лапа');
//         break;
//     case 100:
//         console.log('Ну і лапа');
//         break;
//     case 51:
//         console.log('Nice');
//         break;
//     default: 
//         console.log('Не влазиш');
//         break;
// }

// Логічні оператори

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola 1 && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'ok');
 
// if (hamburger === 3 && cola === 1 && fries) {
//     console.log('Ви їсте');
// } else {
//     console.log('Ми йдемо');

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola 1 && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'ok');
 
// if (hamburger === 3 && cola === 1 && fries) {
//     console.log('Ви їсте');
// } else {
//     console.log('Ми йдемо');

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

 
// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log('Ви їсте');
// } else {
//     console.log('Ми йдемо');
// }

// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);


// let johnReport, alexReport, samReaport, mariaReport = "done";

// console.log(johnReport || alexReport || samReaport || mariaReport);

// console.log(!0);

// Цикли



// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }

// while (num < 55);

// let num = 50;

// for (let i = 1; i < 0; i++) {
//     console.log(num);
//     num++;
// }

// Цикли додадковий 

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++){
//         console.log(j);
//     }
// }

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i; j++) {
//     result += '*';
//     }

//     result += '\n';
// }

// console.log(result);

// fitst: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++){
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++){
//             if (k === 2) break fitst;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

// let num = 5;
// while (num <= 10) {
//     console.log(num);
//     num++;
// }

// for (let i = 20; i > 10; i--) {
//     console.log(i);
//     if (i === 13) break;
// }

// for (let m = 2; m <= 10; m += 2) {
//     console.log(m);
// }

// let j = 2;

// while (j <= 16) {
//     if (j % 2 === 0) {
//         j++;
//         continue;
//     } else {
//         console.log(j);
//     }
//     j++;
// }

// let arr = [];

// for (let k = 5; k <=10; k++) {
//     arr.push(k);
// }

// console.log(arr);

// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }
//     console.log(result);
//     // Не трогаем
//     return result;
// }


// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут
    
//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         } else if (typeof(data[i]) === 'string') {
//             data[i] = `${data[i]} - done`;
//         }
//     }

//     console.log(data);
    
//     // Не трогаем
//     return data;
// }

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// // Пишем решение вот тут
// for (let i = data.length - 1; i >= 0; i--) {
//     result.push(data[i]);
// }
    
// // Не трогаем
// console.log(result); // This line is just for testing the output
// return result;



// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i; j++) {
//     result += '*';
//     }

//     result += '\n';
// }

// console.log(result);

// practice 2

// const numberOfFilms = +prompt('Скільки фільмів Ви вже подивились?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// // const a = prompt('Один з останніх переглянутих фільмів?', '');
// // const b = prompt('На скільки оціните його', '');
// // const c = prompt('Один з останніх переглянутих фільмів?', '');
// // const d = prompt('На скільки оціните його', '');

// // personalMovieDB.movies[a] = b;
// // personalMovieDB.movies[c] = d;

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один з останніх переглянутих фільмів?', ''),
//     b = prompt('На скільки оціните його', '');
// if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('done');
// } else {
//     console.log('error');
//     i--;
// }
// }

// if (personalMovieDB.count < 10) {
//     console.log('Переглянуто доволі мало фільмів');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
//     console.log('Ви класичний глядач');
// } else if (personalMovieDB.count > 30){
//     console.log('Ви кіноман');
// } else {
//     console.log('Відбулась помилка')
// }


// console.log(personalMovieDB);

// Функції
// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     console.log(num);
// }

// showFirstMessage('Hello Wolrd');
// console.log(num);

// function calc(a, b) {
//     return a + b;

// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function ret() {
//     let num = 50;

//     //

//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);


// const logger = function() {
//     console.log('Hello');
// };

// logger();

// const calc = (a, b) => { 
//     console.log('1');
//     return a + b

// };
// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// Аргументи Функції

// const usdCurr = 28;
// const eurCurr = 32;

// function convert (amount, curr) {
//     console.log(curr * amount);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);

// return 

// const usdCurr = 28;
// const discount = 0.9;

// function convert (amount, curr) {
//     return curr * amount;
// }

// function promotion (result) {
//     console.log(result * discount);
//     return function(){
//     }
// }

// const res = convert(500, usdCurr);
// promotion(res);

// function test(){
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) return
//     }
//     console.log('Done');
// }

// test();

// function doNothing() {};
// console.log(doNothing() == undefined);


// function getMathResult(data, progress) {
//     for (let i = 0; i < 2; i==){
//         console.log(i);
//     }
// }

// методи і властивості 

// const str = 'teSt';

// // console.log(str[2] = 'd')

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// let fruit = 'Some fruit';

// console.log(fruit.indexOf('q'));

// const logg = 'Hello world';

// // console.log(logg.slice(6, 11));

// // console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 5));

// const num = 12.2;

// console.log(Math.round(num));

// const test = '12.2px';
// console.log(parseInt(test));
// console.log(parseFloat(test));

// practice 3


// let numberOfFilms;

// function start(){
//     numberOfFilms = +prompt('Скільки фільмів Ви вже подивились?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Скільки фільмів Ви вже подивились?', '');
//     }
// }

// start();


// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// function rememberMyFilms(){
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один з останніх переглянутих фільмів?', ''),
//         b = prompt('На скільки оціните його', '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
//     }
// }

// rememberMyFilms();

// function detectedPersonalLevel(){
//     if (personalMovieDB.count < 10) {
//         console.log('Переглянуто доволі мало фільмів');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
//         console.log('Ви класичний глядач');
//     } else if (personalMovieDB.count > 30){
//         console.log('Ви кіноман');
//     } else {
//         console.log('Відбулась помилка')
//     }
// }

// detectedPersonalLevel();

// function showMyDB(hidden){
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres(){
//     for (let i = 1; i <= 3; i++) {
        
//         personalMovieDB.genres[i - 1] = prompt(`Ваш улюблений жанр під номером ${i}`);
//     }
// }

// writeYourGenres();

// console.log(personalMovieDB);

// metod trim!!!!!

// let numberOfFilms;

// function start(){
//     numberOfFilms = +prompt('Скільки фільмів Ви вже подивились?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Скільки фільмів Ви вже подивились?', '');
//     }
// }

// start();


// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// function rememberMyFilms(){
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один з останніх переглянутих фільмів?', '').trim(),
//               b = prompt('На скільки оціните його?', '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
//     }
// }

// rememberMyFilms();

// function detectedPersonalLevel(){
//     if (personalMovieDB.count < 10) {
//         console.log('Переглянуто доволі мало фільмів');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
//         console.log('Ви класичний глядач');
//     } else if (personalMovieDB.count > 30){
//         console.log('Ви кіноман');
//     } else {
//         console.log('Відбулась помилка')
//     }
// }

// detectedPersonalLevel();

// function showMyDB(hidden){
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres(){
//     for (let i = 1; i <= 3; i++) {
        
//         personalMovieDB.genres[i - 1] = prompt(`Ваш улюблений жанр під номером ${i}`);
//     }
// }

// writeYourGenres();

// callback !!!

// function fitst(){
//     // Do something
//     setTimeout(function(){
//         console.log(1);
//     }, 500);
// }

// function second(){
//     // Do something
//     console.log(2);

// }
// fitst();
// second();

// function learnJS(lang, callback){
//     console.log(`Я вчу: ${lang}`);
//     callback();
// }

// function done(){
//     console.log('Я закінчив');
// }

// learnJS('JavaScript', done);

// Обєкти, деструктуризація обєктів

// const obj = new Object();
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function(){
//         console.log('Test');
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// console.log(Object.keys(options).length); // Outputs the number of keys in the options object

// let counter = 0;

// for (let key in options) {
//     if (typeof options[key] === 'object') {
//         for (let i in options[key]) {
//             console.log(`Властивість: ${i}, значення: ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Властивість: ${key}, значення: ${options[key]}`);
//         counter++;
//     }
// }

// console.log(counter); // Outputs the count of non-object properties in the options object

// Масиви та псевдомасиви

// const arr = [2, 13, 26, 8, 10];
// arr.sort(compareNum);
// console.log(arr); // Outputs the

// function compareNum(a, b) {
//     return a - b;
// }
// arr.sort(compareNum);

// arr[99] = 0;

// console.log(arr.length); //

// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} в середині масиву ${arr}`);
// });

// arr.pop();
// arr.push(10);

// console.log(arr); // Outputs the count of non-object properties in the options object

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));

// !! Перелача даних по посиланню та значенню, Spread оператор (ES6-ES9) !!

// let a = 5,
//     b = a;

// b = b + 5;
// console.log(b); // Outputs 10
// console.log(a); // Outputs 5

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; //Посилання

// copy.a = 10;

// console.log(copy); // Outputs
// console.log(obj); // Outputs

// function copy (mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// // console.log(newNumbers);
// // console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// // console.log(add);
// // console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'fuck';

// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'netflix'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'instagram', 'facebook'];

// console.log(internet);

// function log(a, b, c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ['a', 'b', 'c'];

// const newAarray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {
//     ...q
// };







