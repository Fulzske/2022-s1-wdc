var counter = 0;

function upvote() {
    counter++;
    var disp = document.getElementById("count");

    disp.innerHTML = counter;
}

function downvote() {
    counter--;
    document.getElementById("count").innerHTML = counter;
}

function new_post() {

    let title = document.getElementById('post-title').value;
    let desc = document.getElementById('post-content').value;
    let tags = document.getElementById('post-tags').value.split(" ");

    add_post(title,desc,tags);
}

function add_post(title,desc,tags) {

    let post = document.createElement("DIV")
    post.classList.add("posts");

    let votes = document.createElement("DIV")
    votes.classList.add("votes");

    let votes_plus = document.CreateElement("BUTTON");
    votes_plus.innerText = "+";

    let votes_minus = document.CreateElement("BUTTON");
    votes_minus.innerText = "-";

    let votes_p = document.CreateElement("P");
    votes_p.innerHTML = "<span class="count">0</span><br />votes";

    votes.appendChild(votes_plus);
    votes.appendChild(votes_p);
    votes.appendChild(votes_minus);

    let content = document.createElement("DIV")
    content.classList.add("content");

    content.innerHTML = `<h3><a href="post">${title}</a></h3>
    <p>${desc}</p>;`

    for (let tag of tags) {
        let t = document.createElement("span");
        t.classList.add('tag');
        t.innerText = tag;
        content.appendChild(t);
    }


    let d = document.createElement("span");
    d.classList.add('date');
    d.innerText = new Date().toLocaleString();
    content.appendChild(d);


    //<span class="tag">Tag1</span><span class="tag">Tag2</span><span class="date">${new Date().toLocaleString()}</span>`;

    post.appendChild(votes);
    post.appendChild(content);

    document.getElementsByTagName("main")[0].appendChild(posts);

}

