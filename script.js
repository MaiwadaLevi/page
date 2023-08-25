document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById("email");
    const loginBtn = document.getElementById("loginBtn");
    const clearBtn = document.getElementById("clearBtn");
    const loginForm = document.getElementById("loginForm");

    loginBtn.addEventListener("click", function() {
        const emailValue = emailInput.value;
        if (emailValue === "") {
            alert("Email field cannot be empty.");
        } else {
            // Perform login logic here
        }
    });

    clearBtn.addEventListener("click", function() {
        emailInput.value = "";
        // Clear other form fields if needed
    });

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        // Perform login logic here
    });
});
