const loginFormHandler = async (event) => {
    event.preventDefault();

    // query selector for username
    const username = document.querySelector('#username-login').value.trim();
    // query selector for password
    const password = document.querySelector('#password-login').value.trim();

    if(username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }), 
            headers: { 'Content-Type': 'application/json' },
        });
        if(response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to log in');
        }
    }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);