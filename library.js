let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    let p = new Book(title, author, pages, read);
    myLibrary.push(p);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "Y");
addBookToLibrary("Game of thrones", "GRRM", 670, "n");
console.log(myLibrary);