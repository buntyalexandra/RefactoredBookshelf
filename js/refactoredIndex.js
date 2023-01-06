/*
Render a book card for each book in bookData
add the books to the bookshelf
*/

const bookList = bookData; 
const bookshelfSection = document.querySelector(".bookshelf");

const renderBook = (book) => {
    const {author, language, subject, title} = book; 
    const bookCard = document.createElement("section");
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
    return bookCard;
}

const renderAllBooks = (books) => {
    const elements = books.map(renderBook);
    bookshelfSection.replaceChildren(...elements);
}
renderAllBooks(bookList);