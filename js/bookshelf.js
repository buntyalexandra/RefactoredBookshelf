// Class Bookshelf
// maintains an array of Books
// has the ability to add Books
// Properties: books
// Methods: addBook, render
// Going to make the bookshelf a section. It will have:
// A background color
// Instances of each book card

class Bookshelf {
  constructor() {
    // an array to hold all of our books
    this.books = [];
  }
  addBook(book) {
    // push each book into the array of all the books
    this.books.push(book);
  }
  render() {
    // create a section
    const bookshelfElement = document.createElement("section");
    // give the section a class
    bookshelfElement.className = "bookshelfSection";
    // create and render a card for each book
    for (let i = 0; i < this.books.length; i++) {
      const bookCard = this.books[i].render();
      bookshelfElement.append(bookCard);
    }
    // append the section to the <main> element in the DOM but replace each one otherwise I will have multiple bookshelves when I only want one
    const mainElement = document.querySelector("main");
    mainElement.replaceChildren(bookshelfElement);
  }
}
