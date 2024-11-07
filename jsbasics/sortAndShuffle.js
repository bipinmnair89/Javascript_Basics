//sorting in Javascript.

const alphabetsList = ["J", "Q", "N", "G", "Z", "X", "H", "K", "O", "C", "M", "V", "L", "F", "T", "I", "D", "A", "E", "W", "Y", "S", "R", "P", "U", "B"];
console.log(alphabetsList);
const sortedAlphabets = alphabetsList.sort();
console.log(sortedAlphabets);
const reverseSortedAlphabets = sortedAlphabets.reverse();
console.log(reverseSortedAlphabets);

//Sorting is performed Lexicographically in Javascript hence only alphabets will get sorted with default sort method.
const numberList = [5,6,2,7,3,1,4,10,9,8];
console.log(numberList);
const sortedNumbersTrial = numberList.sort();
console.log(sortedNumbersTrial); //this wont work like alphabets.

//below is the process to sort numbers
const sortedNumbers = numberList.sort((a,b) => a - b);
console.log(sortedNumbers);

const reverseSortedNumbers = sortedNumbers.sort((a,b) => b - a);
console.log(reverseSortedNumbers);

//sorting array of objects
const bookDetails = [
    {
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "year": 1960,
      "genre": "Fiction"
    },
    {
      "title": "1984",
      "author": "George Orwell",
      "year": 1949,
      "genre": "Dystopian"
    },
    {
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "year": 1925,
      "genre": "Classics"
    }
  ]

bookDetails.forEach(titleData => console.log(`${titleData.title}`));

console.log(bookDetails.sort((a,b) => a.year - b.year)); //sort based on year (number)
console.log(bookDetails.sort((a,b) => b.genre.localeCompare(a.genre))); //sort based on String 


//Shuffling elements in Javascript - Fisher Yates Algorithm.

const cards =['A',2,3,4,5,6,7,'X','Q',10,'B',1];
shuffle(cards); //hoisting possible for function declaration.
console.log(cards);


function shuffle(array) {
  for(let i= array.length-1;i>0;i--) {
    const random = Math.floor(Math.random() *i);
    [array[i],array[random]] = [array[random],array[i]];
  }
}