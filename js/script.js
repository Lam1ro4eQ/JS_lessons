'use strict';

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Название последнего фильма', ''),
//           b = prompt('Оценка последнего фильма', '');
    
//         if (a != null && a.length < 50 && b != null && a != '' && b != '') {
//             personalMovieDB.movies[a] = b;
//         } else { 
//             i--;
//     }
// }

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);



let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


let i = 0;
do {
    const a = prompt('Название последнего фильма', ''),
          b = prompt('Оценка последнего фильма', '');
          personalMovieDB.movies[a] = b;
          i++;
          if (a != null && a.length < 50 && b != null && a != '' && b != '') {
                    personalMovieDB.movies[a] = b;
                  } else { 
                    i--;
}
 } while (i < 2);





if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

console.log(personalMovieDB);


