const body = document.querySelector("body");

window.addEventListener("load", () => {
  body.classList.add("visible");
});


const createNoteButton = document.querySelector(".create-note");

const apiURL = "http://localhost:8000";
const token = localStorage.getItem("jwt");

createNoteButton.addEventListener("click", () => {
  const content = document.querySelector(".note").value;
  const heading = document.querySelector(".create-note-heading").value;
  
  if(token){

    fetch(`${apiURL}/note/add`, {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({ content, heading}),
    })
    .then((res) => res.json())
    .then((data) => {
  
      if(data.message){
        location.href = "/pages/dashboard/dashboard.html";
      }
      
    })
    .catch((err) => {
      alert("Error adding note... Re-try...");
      console.log(err);
    });

  }

})