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

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "y");
addBookToLibrary("Game of thrones", "GRRM", 670, "n");
addBookToLibrary("Rum Diary", "Hunter S. Thompson", 443, "y");
console.log(myLibrary);

/*let title = document.querySelector(".title");
let author = document.querySelector(".author");
let pages = document.querySelector(".pages");
let read = document.querySelector(".read");*/

const bookListDiv = document.querySelector(".book-list");

function displayBook() {
    for (const book of myLibrary) {
        const eachBook = document.createElement('div');
        eachBook.classList.add('eachBook');
        
        const title = document.createElement('div');
        title.classList.add('title');
        title.textContent = book.title;
        const author = document.createElement('div');
        author.classList.add('author');
        author.textContent = book.author;
        const pages = document.createElement('div');
        pages.classList.add('pages');
        pages.textContent = book.pages;
        const read = document.createElement('div');
        read.classList.add('read');
        read.textContent = book.read;

        
        eachBook.appendChild(title);
        eachBook.appendChild(author);
        eachBook.appendChild(pages);
        eachBook.appendChild(read);

        bookListDiv.appendChild(eachBook);
    };

}

displayBook();