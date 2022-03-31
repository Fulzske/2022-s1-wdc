var counter = 0;

function mouseIn() {
    counter++;
    document.getElementById("mcount").innerHTML = counter;
}

function postTime() {

    var element = document.getElementById("posts");
    var br = document.createElement("br");

    var date = new Date();
    var p1 = document.createElement("div");
    var node1 = document.createTextNode(date);
    p1.appendChild(node1)
    element.appendChild(p1)
    element.appendChild(br);

    var p2 = document.createElement("div");
    var x = document.querySelector(".post-content").value;
    var node2 = document.createTextNode(x);
    p2.appendChild(node2);
    element.appendChild(p2);
    element.appendChild(br);

}

function showMenu() {
    document.getElementById("main").style.display = "none";
    document.getElementById("menu").style.display = "block";
}

function showMain() {
    document.getElementById("main").style.display = "block";
    document.getElementById("menu").style.display = "none";
}

function changeBackgroundColor() {
    var menu = document.getElementsByName("backgroundColor");
    document.body.style.backgroundColor = menu[0].value;
    console.log(menu[0].value);
}


