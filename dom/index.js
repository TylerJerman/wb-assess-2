document.addEventListener("DOMContentLoaded", function() {
  let closeForm = document.querySelector("#close-form");
  let form = document.querySelector(".form");
  let nameInput = document.querySelector("#name");
  let emailInput = document.querySelector("#email");
  let formContainer = document.querySelector(".form-container");

  closeForm.addEventListener("click", function() {
    form.classList.toggle("hide");
    if (closeForm.textContent === "X") {
        closeForm.textContent = "+";
    } else {
        closeForm.textContent = "X";
    }
  });

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    nameInput.style.border = "";
    emailInput.style.border = "";

    if (!nameInput.value && !emailInput.value) {
      nameInput.style.border = "2px solid red";
      emailInput.style.border = "2px solid red";
      alert("You must enter a name and an email address to subscribe!");
    } else if (!nameInput.value) {
      nameInput.style.border = "2px solid red";
      alert("Please enter a name to subscribe.");
    } else if (!emailInput.value) {
      emailInput.style.border = "2px solid red";
      alert("Please enter an email address to subscribe.");
    } else {
      formContainer.textContent = "Thank you for subscribing!";
    }
  });
});