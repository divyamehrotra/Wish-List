const signinForm = document.getElementById("signin-form");

signinForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get the values from the form
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Perform validation and sign-in logic here (not implemented in this example)
  // For demonstration purposes, we'll just log the values to the console.
  console.log("Username:", username);
  console.log("Password:", password);
});
var dark = document.getElementById("dark");
dark.onclick= function(){
    document.body.classList.toggle("dark-theme");
}
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}