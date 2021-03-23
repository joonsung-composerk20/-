
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "20309" && password === "demopassword") {
        alert("You have successfully logged in.");
        //open index.html
    }
    else if (username === "20312" && password === "demopassword") {
        alert("You have successfully logged in.");
        //open index.html
    }
    else if (username === "21127" && password === "demopassword") {
        alert("You have successfully logged in.");
        //open index.html
    }
    else {
        loginErrorMsg.style.opacity = 1;
    }
})