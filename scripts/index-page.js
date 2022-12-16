const sectComment = document.querySelector(".comments__wrapper");

const divContain = document.createElement("div");
divContain.classList.add("comments-history__container");
sectComment.appendChild(divContain);

let commentList = [
  {name: "Connor Walton", date: "02/17/2021", comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."},
  {name: "Emilie Beach", date: "01/09/2021", comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."},
  {name: "Miles Acosta", date: "12/20/2020", comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."}
  ];

// 2. create function that will create elements based on appointments in array
function createComment(comment) {
  const cardEl = document.createElement("article");
  cardEl.classList.add("comments__list");

  const imgEl = document.createElement("div");
  imgEl.classList.add("comments__list__img");

  const contentEl = document.createElement("div");
  contentEl.classList.add("comments__list__content");

  const headingEl = document.createElement("h3");
  headingEl.classList.add("comments__list__content__name");
  headingEl.innerText = comment.name;

  const dateEl = document.createElement("p");
  dateEl.classList.add("comments__list__content__date")
  dateEl.innerText = comment.date;

  const commentEl = document.createElement("p");
  commentEl.classList.add("comments__list__content__comment")
  commentEl.innerText = comment.comment;

  cardEl.append(imgEl, contentEl);

  contentEl.append(headingEl, dateEl, commentEl);

  return cardEl;
}

// 3. create funciton that will render appointments to the html

function displayComment() {
  const myAppointmentsEl = document.querySelector(".comments-history__container");

  myAppointmentsEl.innerHTML = "";

  for (let i = 0; i < commentList.length; i++) {
    myAppointmentsEl.appendChild(createComment(commentList[i]));
  }
}

//4. create form submit handler
const formEl = document.querySelector(".comments__card");

function formSubmitHandler(e) {
  e.preventDefault();

  const newComment = {
    name: e.target.name.value,
    date: new Date().toLocaleDateString(),
    comment: e.target.comment.value,
  };

  formEl.reset();
  commentList.unshift(newComment);
  displayComment();
}

// 5. attach event listener to the form

formEl.addEventListener("submit", formSubmitHandler);

displayComment();