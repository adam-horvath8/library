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
const checkInput = document.getElementById("read");
const closeButton = document.getElementById("closeBtn");
const submitButton = document.getElementById("submitForm");
// form display
newBookBtn.addEventListener("click", function () {
  form.style.display = "flex";
});

closeButton.addEventListener("click", function () {
  form.style.display = "none";
});

// submit button
submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  if(authorInput.value !== "" && titleInput.value !== "" && pagesInput.value !== ""){
  form.style.display = "none";
  const newBook = new book(
    authorInput.value,
    titleInput.value,
    pagesInput.value
  );
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const topDiv = document.createElement("div");
  topDiv.classList.add("topDiv");

  const headingDiv = document.createElement("div");
  headingDiv.classList.add("headingDiv");

  const cardHeading = document.createElement("h3");
  cardHeading.innerText = newBook.title;
  cardHeading.classList.add("cardHeading");
  //close button
  const closeBtn = document.createElement("i");
  closeBtn.classList.add("fas", "fa-times-circle", "cardClose");
  closeBtn.addEventListener("click", function (e) {
    cardDiv.style.display = "none";
  });

  const cardAuthor = document.createElement("p");
  cardAuthor.innerText = newBook.author;
  cardAuthor.classList.add("cardAuthor");

  const cardPages = document.createElement("p");
  cardPages.innerText = newBook.numberOfPages;
  cardPages.classList.add("cardPages");

  const pagesIcon = document.createElement("i");
  pagesIcon.classList.add("fa", "fa-solid", "fa-book", "bookIcon");

  const readDiv = document.createElement("div");
  readDiv.classList.add("readDiv");
  readDiv.addEventListener("click", function () {
    this.classList.toggle("checked");
  });

  if (checkInput.checked) {
    readDiv.className = "checked";
    readDiv.addEventListener("click", function () {
      this.classList.toggle("readDiv");
    });
  }

  cardDiv.appendChild(topDiv);
  topDiv.appendChild(closeBtn);
  cardDiv.appendChild(headingDiv);
  headingDiv.appendChild(cardHeading);
  cardDiv.appendChild(cardAuthor);
  cardDiv.appendChild(cardPages);
  cardPages.appendChild(pagesIcon);
  cardDiv.appendChild(readDiv);
  container.appendChild(cardDiv);
  form.reset();
}
else{
  alert("Please enter all input fields!")
}
});

closeBtn.addEventListener("click", function (e) {
  cardDiv.style.display = "none";
});
