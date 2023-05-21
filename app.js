//constructor
function book(author, title, numberOfPages, read) {
  this.author = author;
  this.title = title;
  this.numberOfPages = numberOfPages;
  this.read = read;
}

//Selectors
const newBookBtn = document.getElementById("newBtn");
const container = document.getElementById("container");
//Form selectors
const form = document.getElementById("popup");
const authorInput = document.getElementById("author");
const titleInput = document.getElementById("title");
const pagesInput = document.getElementById("numPages");
const closeButton = document.getElementById("closeBtn");
const submitButton = document.getElementById("submitForm");

newBookBtn.addEventListener("click", function () {
  form.style.display = "flex";
});

closeButton.addEventListener("click", function () {
  form.style.display = "none";
});

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  form.style.display = "none";
  const newBook = new book(
    authorInput.value,
    titleInput.value,
    pagesInput.value
  );
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const cardHeading = document.createElement("h3");
  cardHeading.innerText = newBook.title;
  cardHeading.classList.add("cardHeading");

  const cardAuthor = document.createElement("p");
  cardAuthor.innerText = newBook.author;
  cardAuthor.classList.add("cardAuthor");

  const cardPages = document.createElement("p");
  cardPages.innerText = newBook.numberOfPages;

  const pagesIcon = document.createElement("i");
  pagesIcon.classList.add("fa", "fa-solid", "fa-book");

  cardDiv.appendChild(cardHeading);
  cardDiv.appendChild(cardAuthor);
  cardDiv.appendChild(cardPages);
  container.appendChild(cardDiv);
  cardPages.appendChild(pagesIcon);
  form.reset();
});
