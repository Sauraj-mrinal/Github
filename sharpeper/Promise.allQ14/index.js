const posts = [];
let lastActivityTime = null;

function createPost(title) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const post = { title };
            posts.push(post);
            resolve(post);
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const now = new Date();
            lastActivityTime = now.toISOString();
            resolve(lastActivityTime);
        }, 1000);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject("No posts to delete");
            }
        }, 1000);
    });
}

// -------------------user input 

createPost("Post 1")
    .then(() => updateLastUserActivityTime())
    .then((updatedTime) => {
        console.log("User's last activity time updated:", updatedTime);
        console.log("All posts:", posts);
    })
    .then(() => deletePost())
    .then((deletedPost) => {
        console.log("Deleted post:", deletedPost);
        console.log("Remaining posts:", posts);
    })
    .catch((error) => {
        console.error(error);
    });
    //---------------jai shri ram---------------------
