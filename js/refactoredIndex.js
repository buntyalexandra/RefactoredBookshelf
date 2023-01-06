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

const bookList = bookData;
const bookshelfSection = document.querySelector(".bookshelfSection");
const favoriteBooks = [];
const searchInput = document.querySelector(".searchInput");
const searchButton = document.querySelector(".searchButton");
const sortMenu = document.querySelector(".sortMenu");
// const sortAuthorAZOption = document.querySelector(".authorAZ");
// const sortNumOfTopicsOption = document.querySelector(".numTopics");

sortMenu.addEventListener("change", () => {
    // if sortMenu.value === "Sort by author.."
    if (sortMenu.value === "Sort by Title from A-Z"){
    // call the corresponding function
    renderAllBooks(sortBooksByTitleAZ(bookList))
    }
    if (sortMenu.value === "Sort by Author from A-Z"){
    renderAllBooks(sortBooksByAuthorAZ(bookList))
    }
    if (sortMenu.value === "Sort by Number of Topics")
    renderAllBooks(sortBooksByNumTopics(bookList))
    }
);

const sortBooksByNumTopics = (books) => {
    console.log("I'm sorting by number of book topics");
    // Need to update this sort function 
    return books.sort((a,b) => a.title < b.title ? -1 : 1)
};

const sortBooksByAuthorAZ = (books) => {
    console.log("I'm sorting by author A to Z");
    return books.sort((a,b) => a.author < b.author ? -1 : 1)
};

const sortBooksByTitleAZ = (books) => {
    console.log("I'm sorting by title A to Z");
    return books.sort((a,b) => a.title < b.title ? -1 : 1)
};

// Search Button Event Listener
searchButton.addEventListener("click", () =>
  renderAllBooks(filterBooks(bookList))
);

// what we want our search button to do:
// check the search query against the bookList
// render any books that match the search query

const filterBooks = (books) =>
  books.filter((book) =>
    book.author.toString().toLowerCase().includes(searchInput.value.toLowerCase()) || book.title.toLowerCase().includes(searchInput.value.toLowerCase()) || book.subject.toString().toLowerCase().includes(searchInput.value.toLowerCase())
  );

const labelAsFavorite = (book) => {
  favoriteBooks.push(book);
  console.log(favoriteBooks);
  renderAllBooks(bookList);
};

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
  return bookCard;
};

const renderAllBooks = (books) => {
  const elements = books.map(renderBook);
  bookshelfSection.replaceChildren(...elements);
};
renderAllBooks(bookList);
