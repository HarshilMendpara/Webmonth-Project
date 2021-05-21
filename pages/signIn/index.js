const body = document.querySelector("body");

const apiURL = "https://shrouded-plains-20071.herokuapp.com";

window.addEventListener("load", () => {
  body.classList.add("visible");
});

const signinForm = document.querySelector(".signin");

signinForm.addEventListener("submit", (event) => {

  event.preventDefault();

  const email = document.querySelector(".email").value;
  const password = document.querySelector(".password").value;

  body.innerHTML = `<img src="/assets/Infinity-2.1s-243px.gif" alt="buffering">`;

  fetch(`${apiURL}/auth/signin`, {
    method: "POST",
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email, password}),
  })
  .then((res) => res.json())
  .then((data) => {

    const {token} = data;

    if(token){
      localStorage.setItem("jwt", token);
      location.href = "/pages/dashboard/dashboard.html";
    }else{
      alert("Please Sign-Up first...");
      location.href = "/pages/signIn/sign-in.html";
    }
    
    console.log(data);
  })
  .catch((err) => {
    alert("Error signing in... Re-try...");
    console.log(err);
  });

});