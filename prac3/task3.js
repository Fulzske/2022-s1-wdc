var counter = 0;

function mouseIn() {
    var disp = document.getElementById("mcount");
    counter++;
    disp.innerHTML = counter;
}

