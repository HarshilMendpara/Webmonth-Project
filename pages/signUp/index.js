const body = document.querySelector("body");

const apiURL = "http://localhost:8000";

window.addEventListener("load", () => {
  body.classList.add("visible");
});

const signupForm = document.querySelector(".signup");

signupForm.addEventListener("submit", (event) => {

  event.preventDefault();
  console.log("submitted...");

  const email = document.querySelector(".email").value;
  const name = document.querySelector(".name").value;
  const password = document.querySelector(".password").value;
  const rePassword = document.querySelector(".repassword").value;

  if(password != rePassword){
    alert("Passwords don't match!");
    return;
  }

  if(email && password && name){

    fetch(`${apiURL}/auth/signup`, {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name, email, password}),
    })
    .then((res) => res.json())
    .then((data) => {
  
      const {token} = data;
  
      if(token){
        localStorage.setItem("jwt", token);
        location.href = "/pages/dashboard/dashboard.html";
      }else{
        alert("Please Sign-Up again...");
      }
  
      console.log(data);
    })
    .catch((err) => {
      alert("Error signing up... Re-try...");
      console.log(err);
    });

  }else{
    alert("Please fill all details...");
  }

});