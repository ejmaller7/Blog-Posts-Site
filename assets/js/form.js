// TODO: Create a variable that selects the form element
const formEl = document.getElementById('form');
const errorEl = document.getElementById('error');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function formSubmission(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    if (!username || !title || !content) {
        errorEl.textContent = "Please complete the form.";
        return;
    }

    const formData = {
        username: username,
        title: title,
        content: content,
    };

    localStorage.setItem('formData', JSON.stringify(formData));

    redirectPage();
}

function redirectPage() {
    window.location.href = 'blog.html'
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
formEl.addEventListener('submit', formSubmission);
