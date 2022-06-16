function login() {

    let user = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };
    var http = new XMLHttpRequest();

    // Define function to run on response
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert("Welcome " + user.username);
            window.location.href = "../index.html";
        } else if (this.readyState == 4 && this.status >= 400) {
            alert("Wrong  User Name or Password");
         }
    };

    // Open connection to server & send the post data using a POST request
    http.open("POST", "/login", true);
    http.setRequestHeader("Content-type", "application/json");
    http.send(JSON.stringify(user));
}





