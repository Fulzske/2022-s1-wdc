var counter = 0;

function mouseIn() {
    counter++;
    document.getElementById("mcount").innerHTML = counter;
}

function postTime() {

    var element = document.getElementById("posts");

    var date = new Date();
    var p1 = document.createElement("p");
    var node1 = document.createTextNode(date);
    p1.appendChild(node1)
    element.appendChild(p1)

    var p2 = document.createElement("p");
    var x = document.querySelector(".post-content").value;
    var node2 = document.createTextNode(x);
    p2.appendChild(node2)
    element.appendChild(p2)
}

function showMenu() {
    document.getElementById("main").style.display = "none";
    document.getElementById("menu").style.display = "block";
}

function showMain() {
    document.getElementById("main").style.display = "block";
    document.getElementById("menu").style.display = "none";
}



