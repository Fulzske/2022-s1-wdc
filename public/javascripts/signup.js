
function sign_up() {
    let user = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
    };
    const checkUsername = document.getElementById("username").value;
    const checkEmail = document.getElementById("email").value;
    const checkPassword = document.getElementById("password").value;
    const checkPasswordConfirm = document.getElementById("passwordconfirm").value;

    if (checkUsername.length <= 0 || checkEmail.length <= 0 && checkPassword.length <= 0 || checkPasswordConfirm.length <= 0) {
        alert ("Please Enter all fields!");
    } else if (checkUsername.length > 0 && checkEmail.length > 0 && checkPassword.length < 8 || checkPasswordConfirm.length < 8) {
        alert ("Password needs to be 8 characters long!");
    } else if (checkUsername.length > 0 && checkEmail.length > 0 && checkPassword.length >= 8 && checkPasswordConfirm.length >= 8 && checkPassword != checkPasswordConfirm) {
        alert ("Password did not match!");
    } else if (checkUsername.length > 0 && checkEmail.length > 0 && checkPassword.length >= 8 && checkPasswordConfirm.length >= 8 && checkPassword == checkPasswordConfirm) {
        var http = new XMLHttpRequest();
        // Define function to run on response
        http.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                alert("Sign up successful!");
                window.location.href = "../index.html";
            } else if (this.readyState == 4 && this.status == 401) {
                alert("Email is already being used, please try another one");
            }
        };

        // Open connection to server & send the post data using a POST request
        http.open("POST", "/signup", true);
        http.setRequestHeader("Content-type", "application/json");
        http.send(JSON.stringify(user));
    }
}





