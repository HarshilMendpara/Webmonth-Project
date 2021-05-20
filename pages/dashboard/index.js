const body = document.querySelector("body");
const apiURL = "https://shrouded-plains-20071.herokuapp.com";

let cardData = [];

window.addEventListener("load", () => {
  body.classList.add("visible");

  if(token){
    fetch(`${apiURL}/note/getallnotes`, {
      method: "GET",
      headers:{
        authorization: token,
      },
    })
    .then((res) => res.json())
    .then((data) => {
      cardData = data.data;
      console.log(data);
      createNotes(data.data);
    })
    .catch((err) => {
      alert("Error fetching notes... Re-try...");
      console.log(err);
    });
  }

  
});

const cardContainer = document.querySelector(".card-container");
const token = localStorage.getItem("jwt");
const createNote = document.querySelector(".create-note");
const logout = document.querySelector(".log-out");

logout.addEventListener("click", () => {
  localStorage.removeItem("jwt");
  location.href = "/";
})

createNote.addEventListener("click", () => {
  location.href = "/pages/createNote/create-note.html";
})

const createNotes = (array) => {

  cardContainer.innerHTML = "";

    array.forEach((cardObj) => {
    const { heading, content, noteId } = cardObj;

    const card = document.createElement("div");
    card.classList.add("card");
    card.id = noteId;

    const insideHtml = `<div class="card-header">
    <div class="card-heading">${heading}</div>
    <div class="edit-note">
      <a href="../updateNote/update-note.html?noteId=${noteId}">
        <img src="/assets/edit-note.svg" alt="edit-note"
      /></a>
    </div>
  </div>
  <div class="card-content">
    ${content}
  </div>`;

    card.innerHTML = insideHtml;

    cardContainer.appendChild(card);
  });
};


