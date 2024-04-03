window.onload = function() {
    var postsList = document.getElementById("postsList");
    console.log("heyhey")
    var posts = JSON.parse(localStorage.getItem("posts")) || [];
    if (posts.length === 0) {
        postsList.innerHTML = "<p>No posts available.</p>";
    } else {
        posts.forEach(function(post) {
            var postElement = document.createElement("div");
            postElement.classList.add("post");
            postElement.innerHTML = "<h2>" + post.title + "</h2><p>" + post.content + "</p><p>By: " + post.username + "</p>";
            postsList.appendChild(postElement);
        });
    }
};var themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("change", function() {
     document.body.classList.toggle("dark-mode");
 });
 themeToggle.addEventListener('click', function () {
    // If mode is dark, apply light background
    if (mode === 'dark') {
      mode = 'light';
      container.setAttribute('class', 'light');
    }
    // If mode is light, apply dark background
    else {
      mode = 'dark';
      container.setAttribute('class', 'dark');
    }
  });
  