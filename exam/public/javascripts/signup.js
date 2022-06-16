function sign_up() {
    let user = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
    };

    // var valid = check_valid(user);
    // if (valid == true) {
        var http = new XMLHttpRequest();

        // Define function to run on response
        http.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log("working");
                alert("Sign up successfully!");
                window.location.href = "../index.html";
            } else if (this.readyState == 4 && this.status == 401) {
                alert("The email has already been used, try another one!");
            }
        };

        // Open connection to server & send the post data using a POST request
        console.log("good");
        http.open("POST", `/signup`, true);
        http.setRequestHeader("Content-type", "application/json");
        http.send(JSON.stringify(user));
    }
