// This function is executed when the window is fully loaded
window.onload = function() {
  // Get the element with the id "postsList"
  var postsList = document.getElementById("postsList");
  // Retrieve posts from local storage or initialize an empty array if there are no posts
  var posts = JSON.parse(localStorage.getItem("posts")) || [];
  // Check if there are any posts available
  if (posts.length === 0) {
      // If no posts are available, display a message
      postsList.innerHTML = "<p>No posts available.</p>";
  } else {
      // If there are posts available, iterate over each post
      posts.forEach(function(post) {
          // Create a new div element for each post
          var postElement = document.createElement("div");
          // Add a class "post" to the post element
          postElement.classList.add("post");
          // Populate the post element with title, content, and author information
          postElement.innerHTML = "<h2>" + post.title + "</h2><p>" + post.content + "</p><p>By: " + post.username + "</p>";
          // Append the post element to the postsList container
          postsList.appendChild(postElement);
      });
  }
};

// Get the theme toggle switch element by its id
var themeToggle = document.getElementById("themeToggle");

// Add an event listener to the theme toggle switch for the "change" event
themeToggle.addEventListener("change", function() {
  // Toggle the "dark-mode" class on the body element
  document.body.classList.toggle("dark-mode");
});

// Add an event listener to the theme toggle switch for the "click" event
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