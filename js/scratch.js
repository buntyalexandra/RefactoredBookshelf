const addAComment = () => {
    const commentField = document.createElement("input");
    commentField.className = "commentField";
    const sendButton = document.createElement("button");
    sendButton.className = "sendButton";
    sendButton.textContent = "Send";
    bookCard.append(commentField, sendButton);
    const comment = commentField.value;
    commentButton.remove();
    const arrayOfComments = [];
    const submitAComment = (comment) => {
    arrayOfComments.push(comment);
    console.log(arrayOfComments);
    const commentElement = document.createElement("p");
    commentElement.className = "commentElement";
    commentElement.textContent = comment; 
    bookCard.append(comment);
    renderAllBooks(bookList);
    }
    sendButton.addEventListener("click", submitAComment);
  }
  commentButton.addEventListener("click", () => addAComment());