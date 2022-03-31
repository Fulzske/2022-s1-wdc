var counter = 0;

function mouseIn() {
    counter++;
    document.getElementById("mcount").innerHTML = counter;
}

function postTime() {

    var date = new Date();
    var posts = document.getElementById("posts");
    var para = document.createElement("div");
    var br = document.createElement("br");
    para.innerHTML = date;
    posts.appendChild(para);
    posts.appendChild(br);

    var x = document.getElementById("textarea").value;
    var para1 = document.createElement("div");
    var node2 = document.createTextNode(x);
    para1.appendChild(node2);
    posts.appendChild(para1);
    para.classList.add("post-content");
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


