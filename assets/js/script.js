// Add an event listener to the form with id "blogForm" for the "submit" event
document.getElementById("blogForm").addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Retrieve the values of username, title, and content from the form inputs
    var username = document.getElementById("username").value;
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;
    
    // Check if any of the input fields are empty or contain only whitespace
    if (username.trim() === "" || title.trim() === "" || content.trim() === "") {
        // If any field is empty, display an error message
        document.getElementById("errorMessage").classList.remove("hidden");
    } else {
        // If all fields are filled, hide the error message
        document.getElementById("errorMessage").classList.add("hidden");
        
        // Create a new post object with username, title, and content
        var post = {
            username: username,
            title: title,
            content: content
        };
        
        // Retrieve existing posts from local storage or initialize an empty array
        var posts = JSON.parse(localStorage.getItem("posts")) || [];
        
        // Add the new post to the posts array
        posts.push(post);
        
        // Store the updated posts array back into local storage
        localStorage.setItem("posts", JSON.stringify(posts));
        
        // Redirect the user to the blog.html page after submitting the form
        window.location.href = "blog.html"; // Changed from "posts.html"
    }
});




