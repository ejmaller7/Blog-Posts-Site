// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainEl = document.querySelector('main');
const backButton = document.getElementById('back');

// TODO: Create a function that builds an element and appends it to the DOM
function createAndAppendElement(tag, attributes, parent) {
    const element = document.createElement(tag);
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    parent.appendChild(element);
}

// TODO: Create a function that handles the case where there are no blog posts to display
function showNoPostsMessage() {
    const mainEl = document.querySelector('main');
    const message = document.createElement('p');
    message.textContent = "No blog posts yet...";
    mainEl.appendChild(message);
}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    if (posts.length ===0) {
        showNoPostsMessage();
    } else {
        posts.forEach(post => {
            const article = document.createElement('article');
            article.className = 'card';
            article.innerHTML = `
                <h2>${post.title}</h2>
                <blockquote>${post.content}</blockquote>
                <p>Posted by: ${post.username}</p>
            `;
            mainEl.appendChild(article);
        })
    }
}

// TODO: Call the `renderBlogList` function
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backButton.addEventListener('click', () => {
    console.log('Page is redirecting to index.html...');
    redirectPage('index.html');
});
