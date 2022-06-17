function filterSeats() {
    var info = {
        movie : document.getElementById("movie").value,
        date : document.getElementById("date").value,
    };

    var http = new XMLHttpRequest();

    // Define function to run on response
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert("Here is the result!");
            location.reload();
        } else if (this.readyState == 4 && this.status > 400) {
            alert("Error");
        }
    };

    // Open connection to server & send the post data using a POST request
    http.open("POST", "/theater", true);
    http.setRequestHeader("Content-type", "application/json");
    http.send(JSON.stringify(info));
}