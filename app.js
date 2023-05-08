//constructor
function book(author, title, numberOfPages, read) {
  this.author = author;
  this.title = title;
  this.numberOfPages = numberOfPages;
  this.read = read;
}

//Selectors
const newBookBtn = document.getElementById("newBtn");
//Form selectors
const form = document.getElementById("popup");
const authorInput = document.getElementById("author");
const titleInput = document.getElementById("title");
const pagesInput = document.getElementById("numPages");
const closeButton = document.getElementById("closeBtn");
const submitButton = document.getElementById("submitForm");

//Card selectors
const cardDiv = document.getElementById("card");
const cardHeading = cardDiv.querySelector("h3");
const cardAuthor = document.getElementById("authorPar");
const cardPages = document.getElementById("pagesPar");

newBookBtn.addEventListener("click", function () {
  form.style.display = "block";
});

closeButton.addEventListener("click", function () {
  form.style.display = "none";
});

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  const newBook = new book(
    authorInput.value,
    titleInput.value,
    pagesInput.value
  );
  cardHeading.innerText = newBook.title;
  cardAuthor.textContent = newBook.author;
  cardPages.innerText = newBook.pages;

  cardDiv.appendChild(cardHeading);
  cardDiv.appendChild(cardAuthor);
  cardDiv.appendChild(cardPages);
});
