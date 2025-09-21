const staffId = localStorage.getItem("loggedInId");
const data = JSON.parse(localStorage.getItem(staffId));

// Get Current Date from User System
const date = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

if (data) {
  // Write Data in Content
  document.getElementById("card-name").textContent = data.name;
  document.getElementById("card-id").textContent = staffId;
  document.getElementById("card-number").textContent = data.number;
  document.getElementById("card-email").textContent = data.emailId;
  document.getElementById("card-role").textContent = data.role;
  document.getElementById("card-password").textContent = data.password;
  document.getElementById("card-date").textContent = date;

} else {
  //If Data not Found
  document.body.innerHTML = "<h2>No data found. Please login again.</h2>";
}
