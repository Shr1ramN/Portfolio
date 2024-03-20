document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const loginMessage = document.getElementById("loginMessage");
  
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); 
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      fetch("users.json")
        .then(response => response.json())
        .then(users => {
          const user = users.find(u => u.username === username && u.password === password);
          if (user) {
            loginMessage.textContent = "Login successful!";
            window.location.href = "index.html";
          } else {
            loginMessage.textContent = "Invalid username or password.";
          }
        })
        .catch(error => {
          console.error("Error fetching users:", error);
          loginMessage.textContent = "Error fetching users.";
        });
    });
  });
  