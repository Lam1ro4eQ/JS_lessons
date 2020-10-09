'use strict';





let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Название последнего фильма', ''),
                  b = prompt('Оценка последнего фильма', '');
            
                if (a != null && a.length < 50 && b != null && a != '' && b != '') {
                    personalMovieDB.movies[a] = b;
                } else { 
                    i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    writeYourGenres: function() {
        // for (let i = 1; i < 4; i++) {
        //     const agent = prompt(`Ваш любимый жанр под номером ${i}`);

        //     if (agent != null && agent !='') {
        //         personalMovieDB.genres[i - 1] = agent;
        //     } else {
        //         i--;
        //     }
        // }
        for (let i = 1; i < 2; i++) {
            const agent = prompt(`Напишите ваши любимые жанры через запятую`).toLowerCase();
            if (agent != null && agent !='') {
                        personalMovieDB.genres = agent.split(",");
                        personalMovieDB.genres.sort();
                    } else {
                         i--;
                    }
        }
        personalMovieDB.genres.forEach(function(item, element) {
            console.log(`Любимый жанр № ${element+1} - это ${item}`);
        });
    },
    showMyDB: function() {
        if(personalMovieDB.privat !== true) {
            console.log(personalMovieDB);
        } 
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        } else if(personalMovieDB.privat == true) {
            personalMovieDB.privat = false;
        }
    }    
};
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();



