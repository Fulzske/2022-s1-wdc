var valid = check_valid(user)


if (checkUsername.value && checkUsername.value.length > 0 && checkEmail.value && checkEmail.value.length > 0 && checkPassword.value && checkPassword.value.length > 8) {

function check_valid(user) {
    const checkUsername = document.getElementByID("username");
    const checkEmail = document.getElementById("email");
    const checkPassword = document.getElementById("checkPassword");
    const checkPasswordConfirm = document.getElementById("checkPassword");

    if (checkPassword !== checkPasswordConfirm) {
        Alert("Entered password did not match");
    }
}





function sign_up() {
    let user = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
    };

    var valid = check_valid(user)
    if (valid == true) {

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



