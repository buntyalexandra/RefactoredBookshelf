/*
- Render a book card for each book in bookData
- add the books to the bookshelf
- Favorite button for each book
- Function that uses reduce to count the total number of fave books
- search text input field 
    - accepts author, title, or tpoic
- and search button
    - returns books that match the query
- "Sort by" drop-down menu
- sort alphabetically by title 
- sort alphabetically by author
- sort by number of topics
*/

// a variable to hold the array of books
const bookList = bookData;
// my bookshelf section
const bookshelfSection = document.querySelector(".bookshelfSection");

//-------ADD A BOOK FEATURE-------
const addBookButton = document.querySelector(".addBookButton");
// what needs to happen when the addBookButton is clicked:
// an object is created from the input values
// the object is added to the front of the bookList (array of books)
// the page is re-rendered with the added book

//querySelect the input values of the fields
const titleInput = document.querySelector(".titleInput");
const authorInput = document.querySelector(".authorInput");
const subjectInput = document.querySelector(".subjectInput");
const languageInput = document.querySelector(".languageInput");

// listener function for the addBookButton to execute on click
function addABook() {
  // make a new object according to the input values
  let newBookObject = {};
  newBookObject.author = authorInput.value; 
  newBookObject.language = languageInput.value; 
  newBookObject.subject = subjectInput.value; 
  newBookObject.title = titleInput.value; 
  // put it at the front of our array of books
  bookList.unshift(newBookObject); 
  // render all books in the bookList 
  const elements = bookList.map(renderBook);
  bookshelfSection.replaceChildren(...elements);
}
// add listener function to the addBookButton
addBookButton.addEventListener("click", addABook);

//------SEARCH FEATURE------
const searchInput = document.querySelector(".searchInput");
const searchButton = document.querySelector(".searchButton");
// what we want our search button to do:
// check the search query against the bookList
// render any books that match the search query

const filterBooks = (books) =>
  books.filter((book) => book.author.toString().toLowerCase().includes(searchInput.value.toLowerCase()) || book.title.toLowerCase().includes(searchInput.value.toLowerCase()) || book.subject.toString().toLowerCase().includes(searchInput.value.toLowerCase())
  );
// Search Button Event Listener
searchButton.addEventListener("click", () => {
console.log(bookList[0]);
renderAllBooks(filterBooks(bookList))
}
);

//------SORT FEATURE-------
const sortMenu = document.querySelector(".sortMenu");

sortMenu.addEventListener("change", () => {
  // if sortMenu.value === "Sort by author.."
  if (sortMenu.value === "Sort by Title from A-Z") {
    // call the corresponding function
    renderAllBooks(sortBooksByTitleAZ(bookList));
  }
  if (sortMenu.value === "Sort by Title from Z-A") {
    renderAllBooks(sortBooksByTitleZA(bookList));
  }
  if (sortMenu.value === "Sort by Author from A-Z") {
    renderAllBooks(sortBooksByAuthorAZ(bookList));
  }
  if (sortMenu.value === "Sort by Author from Z-A") {
    renderAllBooks(sortBooksByAuthorZA(bookList));
  }
  if (sortMenu.value === "Sort by Number of Topics, High to Low") {
    renderAllBooks(sortBooksByNumTopicsHighLow(bookList));
  }
  if (sortMenu.value === "Sort by Number of Topics, Low to High")renderAllBooks(sortBooksByNumTopicsLowHigh(bookList));
}
);
const sortBooksByNumTopicsHighLow = (books) => {
  console.log("I'm sorting by number of book topics");
  return books.sort((a, b) => (a.subject.length > b.subject.length ? -1 : 1));
};

const sortBooksByNumTopicsLowHigh = (books) => {
  console.log("I'm sorting by number of book topics");
  return books.sort((a, b) => (a.subject.length < b.subject.length ? -1 : 1));
};

const sortBooksByAuthorAZ = (books) => {
  console.log("I'm sorting by author A to Z");
  return books.sort((a, b) => (a.author < b.author ? -1 : 1));
};

const sortBooksByAuthorZA = (books) => {
  console.log("I'm sorting by author A to Z");
  return books.sort((a, b) => (a.author > b.author ? -1 : 1));
};

const sortBooksByTitleAZ = (books) => {
  console.log("I'm sorting by title A to Z");
  return books.sort((a, b) => (a.title < b.title ? -1 : 1));
};

const sortBooksByTitleZA = (books) => {
  console.log("I'm sorting by title A to Z");
  return books.sort((a, b) => (a.title > b.title ? -1 : 1));
};

//-------COUNTER FEATURE--------
// TDD 5 Alternate: `reduce` is used to implement a counter on the page of the number of non-English books in the collection
// unit05 bookshelf solution 
// Button that when clicked shows the number of non-English books  


//-----FAVORITE BUTTON------
// the button renders in the book render function
const favoriteBooks = [];
// function to add the book to the favoriteBooks array and to rerender all the books
const labelAsFavorite = (book) => {
  favoriteBooks.push(book);
  console.log(favoriteBooks);
  renderAllBooks(bookList);
};

//------RENDERING ONE BOOK-----------
const renderBook = (book) => {
  const { author, language, subject, title } = book;
  const bookCard = document.createElement("section");
  bookCard.className = "card";
  const bookTitle = document.createElement("h1");
  bookTitle.className = "titleCard";
  bookTitle.textContent = title;
  const bookAuthor = document.createElement("h2");
  bookAuthor.className = "authorCard";
  bookAuthor.textContent = author;
  const bookLanguage = document.createElement("p");
  bookLanguage.className = "language";
  bookLanguage.textContent = `Language: ${language}`;
  const bookSubjectTags = document.createElement("p");
  bookSubjectTags.className = "subjectTags";
  bookSubjectTags.textContent = `Subject tags include: ${subject}`;
  bookCard.append(bookTitle, bookAuthor, bookLanguage, bookSubjectTags);
  // Favorite switch
  const bookFavorited = document.createElement("h1");
  bookFavorited.className = "favoritedBook";
  bookFavorited.textContent = "FAVE";
  const favoriteButton = document.createElement("button");
  favoriteButton.className = "favoriteButton";
  favoriteButton.textContent = "Favorite this book";
  favoriteButton.addEventListener("click", () => labelAsFavorite(book));
  const elementToAdd = favoriteBooks.includes(book)
    ? bookFavorited
    : favoriteButton;
  bookCard.append(elementToAdd);
  // Comment feature 
  const commentSection = document.createElement("section");
  const commentButton = document.createElement("button");
  commentButton.className = "commentButton";
  commentButton.textContent = "Leave a comment";
  const commentSectionHeader = document.createElement("h1");
  commentSectionHeader.textContent = "COMMENTS SECTION";
  const comment = document.createElement("p");
  comment.textContent = book.comment;
  commentSection.append(commentSectionHeader, comment, commentButton);
  bookCard.append(commentSection);

  commentButton.addEventListener("click", () => {console.log("comment button was clicked")
  const commentField = document.createElement("input");
  const sendButton = document.createElement("button");
  sendButton.textContent = "Send";
  commentField.maxLength = "280";
  bookCard.append(commentField, sendButton); 
  commentButton.remove();
  sendButton.addEventListener("click", () => {
    console.log("send button was clicked");
    const userInput = commentField.value;
    book.comment = userInput;
    comment.textContent = userInput;
    console.log(userInput);
    console.log(bookList[0]);
  })
});

  return bookCard;
};

//------RENDERING ALL BOOKS---------
const renderAllBooks = (books) => {
  // each book is being rendered
  const elements = books.map(renderBook);
  // each book is stored in the array elements
  // elements is being appended to the page and replacing anything that was there before
  bookshelfSection.replaceChildren(...elements);
};
renderAllBooks(bookList);