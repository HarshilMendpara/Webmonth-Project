const body = document.querySelector("body");
const signin = document.querySelector(".sign-in");
const signup = document.querySelector(".sign-up");

window.addEventListener("load", () => {
  body.classList.add("visible");

  const token = localStorage.getItem("jwt");
  
  if(token){
    location.href = "/pages/dashboard/dashboard.html";
  }
  
});
