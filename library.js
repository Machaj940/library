// Create book objects and add them to myLibrary array

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


/* Create divs for each book, including info, and append
   each book to the book-list div
*/

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
        const button = document.createElement('button');
        button.classList.add('remove-book-btn');
        button.textContent = "Remove Book";

        
        eachBook.appendChild(title);
        eachBook.appendChild(author);
        eachBook.appendChild(pages);
        eachBook.appendChild(read);
        eachBook.appendChild(button);

        bookListDiv.appendChild(eachBook);
    };

}

displayBook();

/* Create a 'New Book' button which when clicked brings up a form
 to input a new book & details
*/


const popup = document.querySelector(".formDiv")

function showPopup() {
    popup.classList.add('open');
}

function hidePopup() {
    popup.classList.remove('open');
}


// Delete book from DOM and array by clicking remove button 

/*const removeButtons = document.getElementsByClassName('remove-book-btn');

Array.from(removeButtons).forEach((removeButton) => {
  removeButton.addEventListener('click', () => {
    removeButton.parentNode.remove();
  });
});*/
             
         // OR

const removeButtonsNodeList = document.querySelectorAll(".remove-book-btn");
const removeButtonsArr = Array.prototype.slice.call(removeButtonsNodeList);
removeButtonsArr.forEach((btn) => {

    btn.addEventListener('click', function(){
      btn.parentElement.remove(); 
    });

})