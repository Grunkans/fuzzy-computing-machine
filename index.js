// import { books } from "./books.js";

import books from "./books.js";

// console.log(books);

/*1 Hur många böcker finns det i affären?
Förklaring: ni ska skriva ut hur många objekt det finns i listan.
Exempel: "Det finns 527 böcker i affären."*/

console.log("Fråga 1:", "Det finns ", books.length, " böcker i affären");
console.log();

/*2 Skriv ut namnen på alla böcker. (Skapa först en lista som bara innehåller namnen.)*/

let titlar = books.map((books) => books.title);
console.log("Fråga 2: Här är alla titlar på böckerna i affären: ", titlar);
console.log();

/*3 Skriv ut namn och pris för alla böcker av typen "Fantasy".*/
for (let i = 0; i < books.length; i++) {
  if (books[i].genre.includes("Fantasy")) {
    console.log("Fråga 3:", books[i].title, books[i].price);
  }
}
console.log();

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
console.log();

/*5 Skriv ut namn och pris för alla böcker som kostar över $10.*/

for (let i = 0; i < books.length; i++)
  if (books[i].price > 10) {
    console.log("Fråga 5:", books[i].title, books[i].price);
  }
console.log();

/*6 Hur mycket är hela bokinnehavet värt? (Vad är det totala priset, om man skulle sälja alla böcker?)*/

let sum = 0;
for (let i = 0; i < books.length; i++) {
  let pris = books[i].price;
  sum = sum + pris;
}
sum = Math.round(sum);

console.log("Fråga 6: ", "summan av alla böckers värde är,", sum, "kr");
console.log();

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
console.log();

/*8 Skriv ut namnen på alla böcker i bokstavsordning.*/

titlar.sort();
console.log("Fråga 8: ", titlar);
console.log();

//9 Vilken bok finns det en dubblett av?

const dubletter = titlar.filter(
  (title, index, array) => array.indexOf(title) !== index
);

console.log("Fråga 9:", "Dubletter i titlar:", dubletter);
console.log();

// 10 Vilka författare har ett namn som består av mer än 2 ord? Ta inte med författare som har punkter i sina namn.

let Author = [];
for (let i = 0; i < books.length; i++) {
  let författare = books[i].author;
  let Delar = författare.split(" ");
  if (Delar.length > 2 && !författare.includes(".")) {
    Author.push(författare);
  }
}
console.log("Fråga 10:", "Författare med mer än 2 ord i namnet:", Author);
console.log();

//11 Skriv ut namnen på alla författare i bokstavsordning. Sortera efter författarens efternamn.

function sortAuthorsByLastName(a, b) {
  let NamesA = a.author.split(" ");
  const lastNameA = NamesA[NamesA.length - 1];
  let NamesB = b.author.split(" ");
  const lastNameB = NamesB[NamesB.length - 1];

  if (lastNameA < lastNameB) {
    return -1;
  }
  if (lastNameA > lastNameB) {
    return 1;
  }
  return 0;
}
let sortedBooks = books.sort(sortAuthorsByLastName);

sortedBooks.forEach((book) => {
  const authorName = book.author;
  console.log("Fråga 11:", authorName);
});
console.log();

//12 Skriv ut namnen på alla böcker vars titel inte börjar med "The".*/

let The = [];
let lista = [];

for (let i = 0; i < titlar.length; i++) {
  if (titlar[i].startsWith("The")) {
    The.push(titlar[i]);
  } else {
    lista.push(titlar[i]);
  }
}
console.log("Fråga 12: ", lista);
console.log();

/*13 Skriv ut böckernas titel, sorterat efter titelns längd, i stigande ordning.*/
// sort, function, return, titlar.sort, legnth

titlar.sort(function (a, b) {
  return a.length - b.length;
});
console.log("Fråga: 13:", titlar);
console.log();

// 14 Skriv färdigt funktionen, som ska kunna lägga till en ny bok sist i listan.

function addBook(list, title, author, genre, price) {
  let newBook = {
    id: list.length + 1,
    title: title,
    author: author,
    genre: genre,
    price: price,
  };

  list.push(newBook);
}

addBook(books, "Twilight", "Stephenie Meyer", "Fantasy", 9.99);
books.sort(function (a, b) {
  return a.id - b.id;
});
console.log("Fråga 14:", books);
console.log();

//Tips
// Egenskaper och metoder för listor, som kan underlätta lösningen på uppgifterna.
// length
// forEach
// map
// filter
// find
// sort
// reduce
// push

// Egenskaper och metoder för strängar:
// length
// includes
// startsWith
// endsWith
// toLowerCase
// toUpperCase
// substring
// split
