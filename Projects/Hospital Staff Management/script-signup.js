// Validating Form
function SignUp() {
  const name = document.getElementById("name").value.trim();
  const number = document.getElementById("number").value.trim();
  const role = document.getElementById("choice").value.trim();
  const emailId = document.getElementById("email-Id").value.trim();
  const password = document.getElementById("password").value.trim();
  const checkbox = document.getElementById("checkbox");
  const alertCheckbox = document.getElementById("alertCheckbox");

  // Reset warning each time
  alertCheckbox.classList.remove("checkboxWarning");

  // Check all fields
  if (name && number && role && emailId && password) {
    const staffData = { name, number, role, emailId, password };

    // Check checkbox
    if (checkbox.checked) {
      localStorage.setItem(emailId, JSON.stringify(staffData));
      alert("SignUp Successful!");
    } else {
      alertCheckbox.classList.add("checkboxWarning"); // Show warning

      // ✅ Hide warning on checkbox click
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          alertCheckbox.classList.remove("checkboxWarning");
        }
      });
    }
  } else { // When all field not fill
    alert("Please fill all details");
  }
}

// Switch to LogIn Page
function LogIn() {
  window.location.href = "index-login.html";
}
