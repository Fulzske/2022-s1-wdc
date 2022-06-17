var valid = check_valid(user)



function check_valid(user) {
    var valid = true;
    var valid_email = true;

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (user.email.match(validRegex)) {

        valid_email = true;

    } else {
        valid_email = false;
        valid = false;
    }
    if (valid_email == false) {
        alert("Email not valid!");
    }

    var valid_pass = true;

    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if (user.psw.match(passw)) {

        valid_pass = true;

    } else {
        valid_pass = false;
        valid = false;
    }
    if (valid_email == false) {
        alert("Please enter a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter");
    }

    return valid;
}





function sign_up() {
    let user = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
    };

    var valid = check_valid(user)
    if (valid == true) {
        if (checkUsername.value && checkUsername.value.length > 0 && checkEmail.value && checkEmail.value.length > 0 && checkPassword.value && checkPassword.value.length > 8) {
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

            http.open("POST",  "/signup", true);
            http.setRequestHeader("Content-type", "application/json");
            http.send(JSON.stringify(user));
        } else {
            alert("Please enter all fields!");
        }
    }
}



