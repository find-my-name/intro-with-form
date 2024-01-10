const form = document.querySelector("form");

var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fname = document.getElementById("fname");
  const lname = document.getElementById("lname");

  if (fname.value.trim() === "") {
    fname.classList.add("error");
    fname.placeholder = "";
    fname.nextElementSibling.style.display = "inline";
    document.querySelector(".error-fname").classList.remove("hidden");
  } else {
    fname.classList.remove("error");
    fname.nextElementSibling.style.display = "none";
    document.querySelector(".error-fname").classList.add("hidden");
  }

  if (lname.value.trim() === "") {
    lname.classList.add("error");
    lname.placeholder = "";
    lname.nextElementSibling.style.display = "inline";
    document.querySelector(".error-lname").classList.remove("hidden");
  } else {
    lname.classList.remove("error");
    lname.nextElementSibling.style.display = "none";
    document.querySelector(".error-lname").classList.add("hidden");
  }

  if (!emailRegex.test(email.value)) {
    email.classList.add("error");
    email.placeholder = "email@example/com";
    email.nextElementSibling.style.display = "inline";
    document.querySelector(".error-email").classList.remove("hidden");
  } else {
    email.classList.remove("error");
    email.nextElementSibling.style.display = "none";
    document.querySelector(".error-email").classList.add("hidden");
  }

  if (password.value.trim() === "") {
    password.classList.add("error");
    password.placeholder = "";
    password.nextElementSibling.style.display = "inline";
    document.querySelector(".error-password").classList.remove("hidden");
  } else {
    password.classList.remove("error");
    password.nextElementSibling.style.display = "none";
    document.querySelector(".error-password").classList.add("hidden");
  }
});
