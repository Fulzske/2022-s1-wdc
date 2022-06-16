function login() {

    let this_user = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };
    if (this_user.email != '' && this_user.pass != '') {
        // console.log(user.user);
        // console.log(user.pass);
        // Create AJAX Request
        var xmlhttp = new XMLHttpRequest();

        // Define function to run on response
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                user = JSON.parse(this.responseText);
                alert("Welcome " + user.user_name);
                window.location.href = "../index.html";
            } else if (this.readyState == 4 && this.status > 400) {
                alert("Wrong  User Name or Password");
            }
        };

        // Open connection to server & send the post data using a POST request
        xmlhttp.open("POST", "/users/sign_in", true);
        xmlhttp.setRequestHeader("Content-type", "application/json");
        xmlhttp.send(JSON.stringify(this_user));
    }

    document.querySelector(".error").innerHTML = "error";
}

