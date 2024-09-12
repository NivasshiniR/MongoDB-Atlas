document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');

    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            try {
                const response = await fetch('/api/auth/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, email, password })
                });

                const result = await response.text();
                if (response.ok) {
                    alert(result);
                    window.location.href = '/login';
                } else {
                    alert('Registration failed: ' + result);
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred');
            }
        });
    }
});
