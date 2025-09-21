function LogIn() {
  const loginId = document.getElementById("email").value.trim();
  const data = localStorage.getItem(loginId);
  const loginPass = document.getElementById("password").value;
  const enterPass = JSON.parse(data).password;
  const wrongInfo = document.getElementById("wrongInfo");

  // Reset warning each time
  wrongInfo.classList.remove("wrongIdPass");

  // Check Id & Pass
  if (data && loginPass == enterPass) {

    //Set Key for Id
    localStorage.setItem("loggedInId",loginId);

    // Switch to Profile Page
    window.location.href = "index-profile.html";
  } else {
    // For Entered Wrong Id & Pass
    wrongInfo.classList.add("wrongIdPass");
  }
}
