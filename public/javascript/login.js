// Doing the login submission

async function loginFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('#username-login').value.trim();
    const content = document.querySelector('#password-login').value.trim();

    if (username && password)  {
    const response = await fetch(`/api/users/login`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};
document.querySelector('#login-form').addEventListener('submit', loginFormHandler);