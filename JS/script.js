//"use strict";

//alert("Hello");

//const result = confirm("Are you here?");
//console.log(result);

//const answer = prompt("Вам есть 18?", "18");
//console.log(answer);

 //const answers =[];

//answers[0] = prompt('what is your name?', "");
//answers[1] = prompt('What is your familija?', "");
//answers[2] = prompt('Ili mash lat?', "");

//document.write(answers);
//const category ='toys';

//console.log(`https://someurl.com/${category}/5`);

//const user= "Olek";

//alert(`Hello,${user}`);

//let incr = 10,
   // decr = 10;

//incr++;
//decr--;

 //console.log(incr);
//console.log(decr);

//const isChecked = true,
      //isClose = true;

//console.log(isChecked && isClose);

const number0fFilm = +prompt('Skolko filmov wi uge posmotreli?','');

const personalMovieDB = {
   count: number0fFilm,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

const a = prompt('Odin iz poslednih filmov?', ''),
      b = prompt('Na skolko ocenite ego?',''),
      c = prompt('Odin iz poslednih filmov?', ''),
      d = prompt('Na skolko ocenite ego?', '');

personalMovieDB.movies [a] = b;   
personalMovieDB.movies [c] = d;

console.log (personalMovieDB);