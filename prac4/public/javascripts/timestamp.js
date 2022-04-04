function load() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

        var date = "This page was last viewed " + this.responseText;
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("last_visited").innerHTML = date;
        }
    };
    xhttp.open("GET", "/last.txt", true);
    xhttp.send();
}