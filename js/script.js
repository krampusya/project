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

const num = 50;

switch (num) {
    case 49: 
        console.log('Ну і лапа');
        break;
    case 100:
        console.log('Ну і лапа');
        break;
    case 51:
        console.log('Nice');
        break;
    default: 
        console.log('Не влазиш');
        break;
}



