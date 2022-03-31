const d = new Date();

function myFunction() {
    document.getElementById("current_time").innerHTML = d;
}

var counter = 0;

function mouseIn() {
    var disp = document.getElementById("mcount");
    counter++;
    disp.innerHTML = counter;
}
