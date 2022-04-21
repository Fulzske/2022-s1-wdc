const d = new Date()

function newDate() {
    document.getElementsByClassName("test").innerHTML = d;
}

var counter = 123;

function upvote() {
    counter++;
    document.getElementsByClassName("count")[0].innerText = counter;
}

function downvote() {
    counter--;
    document.querySelector("span.count").innerText = counter;
}