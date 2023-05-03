//funkcie
function book(author, title, numberOfPages, read) {
  this.author = author;
  this.title = title;
  this.numberOfPages - numberOfPages;
  this.read = read;
}

//Selectors
const newBookBtn = document.getElementById("newBtn");
const nav = document.querySelector("nav");
const container = document.querySelector(".container");
const form = document.getElementById("popup");
const closeButton = document.getElementById("closeBtn");

newBookBtn.addEventListener("click", function () {
  form.style.display = "block";
});

closeButton.addEventListener("click", function () {
  form.style.display = "none";
});


// const newCard = document.createElement("div");
// newCard.classList.add("card");
// container.appendChild(newCard);
