/*
Render a book card for each book in bookData
add the books to the bookshelf
*/

class Book {
  constructor(title, author, language, subject) {
    this.title = title;
    this.author = author;
    this.language = language;
    this.subject = subject;
  }
  getLanguage() {
    return `Language: ${this.language}`;
  }
  getSubjectTags() {
    return `Subject tags include: ${this.subject}`;
  }
  render() {
    // create the card
    const card = document.createElement("section");
    // give it a class
    card.className = "card";
    // create the H1 element
    const titleCard = document.createElement("h1");
    titleCard.className = "titleCard";
    // put this.title in the H1 element
    titleCard.textContent = this.title;
    // create an H2 element
    const authorCard = document.createElement("h2");
    authorCard.className = "authorCard";
    // put this.author in the H2 element
    authorCard.textContent = this.author;
    // create a p element
    const languageCard = document.createElement("p");
    // give lang card a class of language
    languageCard.className = "language";
    // add our getLanguage text to our p element
    languageCard.textContent = this.getLanguage();
    // create a p element
    const subjectTagsCard = document.createElement("p");
    subjectTagsCard.className = "subjectTags";
    // add our getSubjectTags text to our p element
    subjectTagsCard.textContent = this.getSubjectTags();
    // append the elements to the card
    card.append(titleCard, authorCard, languageCard, subjectTagsCard);
    //Color change function
    function generateBookColor() {
      // generate a random number between 1 and 5, these numbers are attached to a color that is then assigned to the card backgroundColor
      //SIDE NOTE: I ideally wanted to have the color stick with the card it was assigned. Lester gave me the hint that it would need to be a property. I understand this conceptually, and I tried a few approaches to do this, but to no avail. Since I am pretty much happy with the status of my project and my brain is now mush, I decided to let go of this feature.
      const colorAssignmentNum = Math.floor(Math.random() * (6 - 1)) + 1;
      if (colorAssignmentNum === 1) {
        card.style.backgroundColor = "khaki";
      }
      if (colorAssignmentNum === 2) {
        card.style.backgroundColor = "bisque";
      }
      if (colorAssignmentNum === 3) {
        card.style.backgroundColor = "lavender";
      }
      if (colorAssignmentNum === 4) {
        card.style.backgroundColor = "lavenderblush";
      }
      if (colorAssignmentNum === 5) {
        card.style.backgroundColor = "aliceblue";
      }
    }
    // call the generateBookColor() function
    generateBookColor();
    // return the card
    return card;
  }
}
