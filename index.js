// Create an instance of Bookshelf
// Fill it with books by creating instances of each book in the bookData array

// need to access the key of each object in the array and set it equal to the parameter of the constructor function
// Loop through each element of the bookData array and set the key to the corresponding parameter in my constructor function

// Create an instance of the Bookshelf
const bookshelf = new Bookshelf();

// ORIGINAL CODE FOR CREATING THE BOOKSHELF & BOOKS
// I retooled this becuase I wanted books to populate one at a time using a button instead of having all the books populate at once

// Create instances of each book in the bookData array
// add each book to the array that holds the books

// loop through the array bookData which holds all the book information
// for (let i = 0; i < bookData.length; i++) {
//   // create a book using the key values title, author, language, and subject
//   const book = new Book(
//     bookData[i]["title"],
//     bookData[i]["author"],
//     bookData[i]["language"],
//     bookData[i]["subject"].join(", ")
//   );
//   //access the method through the instance of the class
//   bookshelf.addBook(book);
// }

// render the bookshelf
// bookshelf.render();
// END ORIGINAL CODE FOR CREATING BOOKS

// CODE TO POPULATE ONE BOOK AT A TIME (Event listener function)
// create a count to keep track of which book should populate next
let countOfBooksCreated = 0;
function renderOneBook() {
  // instantiate a book
  const book = new Book(
    bookData[countOfBooksCreated]["title"],
    bookData[countOfBooksCreated]["author"],
    bookData[countOfBooksCreated]["language"],
    bookData[countOfBooksCreated]["subject"].join(", ")
  );
  // add it to the bookshelf array
  bookshelf.addBook(book);
  // increase the count by one so that we know to add the book at the next index the next time the button is clicked
  countOfBooksCreated += 1;
  // render our bookshelf, but had to change append to replaceChildren so that a new bookshelf doesn't populate everytime the button is clicked
  bookshelf.render();
}
// targetting the button
const addBookButton = document.querySelector("button");
// adding the event listener function to the button
addBookButton.addEventListener("click", renderOneBook);
