var counter = 123;

function upvote() {
    counter++;
    var disp = document.getElementById("count");

    disp.innerHTML = counter;
}

function downvote() {
    counter--;
    document.getElementById("count").innerHTML = counter;
}

function add_post(title,desc,tags) {

    let post = document.createElement('DIV');
    post.classList.add("posts");

    let votes = document.createElement('DIV');
    votes.classList.add("votes");

    let votes_plus = document.createElement('BUTTON');
    votes_plus.innerText = "+";

    let votes_minus = document.createElement('BUTTON');
    votes_minus.innerText = "-";

    let votes_p = document.createElement('P');
    votes_p.innerHTML = '<span class="count">0</span><br />votes';

    votes.appendChild(votes_plus);
    votes.appendChild(votes_p);
    votes.appendChild(votes_minus);

    let content = document.createElement("DIV");
    content.classList.add("content");

    content.innerHTML = `<h3><a href="post">${title}</a></h3>
    <p>${desc}</p>

    
    <span class="tag">Tag1</span><span class="tag">Tag2</span><span class="date">${new Date().toLocaleString()}</span>`;

    post.appendChild(votes);
    post.appendChild(content);

    document.getElementsByTagName("main")[0].appendChild(posts);

}

