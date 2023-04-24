const forms = document.querySelector(".forms"),
pwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
  let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  
  pwFields.forEach(password => {
      if(password.type === "password"){
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
  })
  
})
})      

links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault(); //preventing form submit
 forms.classList.toggle("show-signup");
})
})


const login = ()=>{
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  console.log(email)
  
  fetch("https://stree-rides.vercel.app/auth/login", {
    method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then(data => {
          const token = data.token; // Assuming the token property is named "token"
          console.log(token);
          // Store the token in a secure, HTTP-only cookie
          var cookieValue = token;
          localStorage.setItem("cookieName", cookieValue);
          console.log(cookieValue);
          
          // console.log(cookie);
          if(!token) alert("invalid");
          else{
            window.location.href = "../home/index.html"
          }
      })
      .catch((error) => console.error(error));
}


const signup=()=>{
  const fname = document.querySelector("#fname").value;
  const lname = document.querySelector("#lname").value;
  const contact = document.querySelector("#contact").value;
  const email = document.querySelector("#signup-email").value;
  const password = document.querySelector("#signup-password").value;

  console.log(name,contact,email,password);

  fetch("https://stree-rides.vercel.app/auth/signup", {
    method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName:fname,
        lastName:lname,

        contact:contact,
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then(data => {
          const token = data.user.token; // Assuming the token property is named "token"
          console.log(token);
          // Store the token in a secure, HTTP-only cookie
          var cookieValue = token;
          localStorage.setItem("cookieName", cookieValue);
          console.log(cookieValue);
          
          // // console.log(cookie);
          if(!token) alert("invalid");
          else{
            window.location.href = "../home/index.html"
          }
      })
      .catch((error) => console.error(error));
}
