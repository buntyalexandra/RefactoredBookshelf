/*
- Render a book card for each book in bookData
- add the books to the bookshelf
- Favorite button for each book, 
*/

const bookList = bookData; 
const bookshelfSection = document.querySelector(".bookshelfSection");
const favoriteBooks = [];
let favoriteBooksCount = 0;

const labelAsFavorite = (book) => {
    favoriteBooks.push(book);
    favoriteBooksCount++;
    console.log(favoriteBooks);
    console.log(favoriteBooksCount);
    renderAllBooks(bookList);
}

const renderBook = (book) => {
    const {author, language, subject, title} = book; 
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
    bookSubjectTags.textContent = `Subject tags include: ${subject}` 
    bookCard.append(bookTitle, bookAuthor, bookLanguage, bookSubjectTags);
    // Favorite switch
    const bookFavorited = document.createElement("h1");
    bookFavorited.className = "favoritedBook";
    bookFavorited.textContent = "FAVE";
    const favoriteButton = document.createElement("button");
    favoriteButton.className = "favoriteButton"; 
    favoriteButton.textContent = "Favorite this book";
    favoriteButton.addEventListener("click", () => labelAsFavorite(book));
    const elementToAdd = (favoriteBooks.includes(book)) ? bookFavorited : favoriteButton;
    bookCard.append(elementToAdd);
    return bookCard;
}

const renderAllBooks = (books) => {
    const elements = books.map(renderBook);
    bookshelfSection.replaceChildren(...elements);
}
renderAllBooks(bookList);