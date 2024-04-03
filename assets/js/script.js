document.getElementById("blogForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;
    
    if (username.trim() === "" || title.trim() === "" || content.trim() === "") {
        document.getElementById("errorMessage").classList.remove("hidden");
    } else {
        document.getElementById("errorMessage").classList.add("hidden");
        var post = {
            username: username,
            title: title,
            content: content
        };
        var posts = JSON.parse(localStorage.getItem("posts")) || [];
        posts.push(post);
        localStorage.setItem("posts", JSON.stringify(posts));
        window.location.href = "blog.html"; // Changed from "posts.html"
    }
});




