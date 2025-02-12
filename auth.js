import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "./firebase.js";

let signupForm = document.getElementById("signup");
let signinForm = document.getElementById("signin");
let btn = document.getElementById("din");
let bts = document.getElementById("bs");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = e.target[0].value;
  let password = e.target[1].value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((x) => {
      if (x.user) {
        alert("user registered successfully");
        signinForm.style.display = "inline-block";
        signupForm.style.display = "none";
        btn.style.display = "none";
        bts.style.display = "inline-block";
      }
    })
    .catch((e) => {
      console.log(e), alert("unable to register user");
    });
});

signinForm.addEventListener("submit",(e)=>{
         e.preventDefault()
         let email = e.target[0].value;
         let password = e.target[1].value;

         signInWithEmailAndPassword(auth, email, password)
    .then((x) => {
       if(x.user.accessToken){
          alert("login successful")
          location.replace("./jsproject1.html")
       }
    })
    .catch((e) => {
      console.log(e), alert("Incorrect username or password");
    });
})

btn.addEventListener("click", () => {
  signinForm.style.display = "inline-block";
  signupForm.style.display = "none";
  btn.style.display = "none";
  bts.style.display = "inline-block";
});

bts.addEventListener("click", () => {
  signupForm.style.display = "inline-block";
  signinForm.style.display = "none";
  bts.style.display = "none";
  btn.style.display = "inline-block";
});
