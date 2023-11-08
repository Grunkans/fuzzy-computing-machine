<<<<<<< HEAD
import books from "./books.js"

=======
// import { books } from "./books.js";

import books from "./books.js";

// console.log(books);
>>>>>>> c207547418649439ab013fb6a8175932b204d00b

/*1 Hur många böcker finns det i affären?
Förklaring: ni ska skriva ut hur många objekt det finns i listan.
Exempel: "Det finns 527 böcker i affären."*/

console.log("Fråga 1:", "Det finns ", books.length, " böcker i affären");


/*2 Skriv ut namnen på alla böcker. (Skapa först en lista som bara innehåller namnen.)*/
let titlar = books.map((books) => books.title);
console.log("Fråga 2: ", titlar);



/*3 Skriv ut namn och pris för alla böcker av typen "Fantasy".*/
for (let i = 0; i < books.length; i++) {
  if (books[i].genre.includes("Fantasy")) {
    console.log("Fråga 3:", books[i].title, books[i].price);
  }
}

/*4 Skriv ut namn och genre för alla klassiker, dystopier och mysterieböcker.*/
for (let i = 0; i < books.length; i++) {
  if (
    books[i].genre.includes("Dystopian") ||
    books[i].genre.includes("Mystery") ||
    books[i].genre.includes("Classic")
  ) {
    console.log("Fråga 4:", books[i].title, books[i].genre);
  }
}

/*5 Skriv ut namn och pris för alla böcker som kostar över $10.*/
for (let i = 0; i < books.length; i++)
  if (books[i].price > 10) {
    console.log("Fråga 5:", books[i].title, books[i].price);
  }

/*6 Hur mycket är hela bokinnehavet värt? (Vad är det totala priset, om man skulle sälja alla böcker?)*/
let sum = 0;
for (let i = 0; i < books.length; i++) {
  let pris = books[i].price;
  sum = sum + pris;
}
sum = Math.round(sum);

console.log("Fråga 6: ", "summan av alla böckers värde är,", sum, "kr");

/*7 Vilka böcker är sammanlagt värda mest, dystopian eller mystery?*/

let Dystopian = 0;
let Mystery = 0;

for (let i = 0; i < books.length; i++) {
  if (books[i].genre === "Dystopian") {
    Dystopian += books[i].price;
  }
  if (books[i].genre === "Mystery") {
    Mystery += books[i].price;
  }
}
function Boook(Mystery, Dystopian) {
  let max = 0;
  if (Mystery < Dystopian) {
    max = Dystopian;
  } else {
    max = Mystery;
  }
  return max;
}
console.log("Fråga 7", Boook("Mystery", "Dystopian"));

/*8 Skriv ut namnen på alla böcker i bokstavsordning.*/

titlar.sort();
console.log("Fråga 8: ", titlar);

/*9 Vilken bok finns det en dubblett av?
Tips: ni kan skapa en ny lista och använda metoden includes.*/
function dubblett(titlar) {
  let tidigareBöcker = {};

  for (let bok of titlar) {
    if (tidigareBöcker[bok]) {
      return bok;
    }
    tidigareBöcker[bok] = true;
  }
  return null;
}
let dubblettBok = dubblett(titlar);
if (dubblettBok) {
  console.log("Fråga 9:", "Det finns en dubblett av: " + dubblettBok);
}

// 10 Vilka författare har ett namn som består av mer än 2 ord? Ta inte med författare som har punkter i sina namn.
const Author = [];

for (let i = 0; i < books.length; i++) {
  const författare = books[i].author;
  const Delar = författare.split(" ");

  if (Delar.length > 2) {
    Author.push(författare);
  }
}
console.log("Fråga 10:", "Författare med mer än 2 ord i namnet:", Author);

/*11 Skriv ut namnen på alla författare i bokstavsordning. Sortera efter författarens efternamn.
Tips: strängmetoden split.*/
let NamnFörfattre = books.map((books) => books.author);

console.log(NamnFörfattre);

/*12 Skriv ut namnen på alla böcker vars titel inte börjar med "The".*/

/*13 Skriv ut böckernas titel, sorterat efter titelns längd, i stigande ordning.*/

/*14 Skriv färdigt funktionen, som ska kunna lägga till en ny bok sist i listan.
function addBook(list, title, author, genre, price) {
 din kod här.. 
}

-------------------*/

/*Tips
Egenskaper och metoder för listor, som kan underlätta lösningen på uppgifterna.
length
forEach
map
filter
find
sort
reduce
push

Egenskaper och metoder för strängar:
length
includes
startsWith
endsWith
toLowerCase
toUpperCase
substring
split*/
