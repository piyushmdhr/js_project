// Yagnesh Mehta 8884884

$(document).ready(function () {
  $("#signupForm").submit(function (event) {
    event.preventDefault();

    var fullName = $("#fullName").val();
    var newUsername = $("#newUsername").val();
    var newPassword = $("#newPassword").val();

    if (!fullName || !newUsername || !newPassword) {
      alert("Please fill in all the fields.");
      return;
    }

    if (newPassword.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    localStorage.setItem(
      newUsername,
      JSON.stringify({ fullName, password: newPassword })
    );

    alert("Signup successful! Now you can log in.");

    this.reset();
  });
});
