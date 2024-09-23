document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signinForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    form.addEventListener('submit', function(event) {
        let valid = true;

        // Email validation
        const email = emailInput.value;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            emailError.innerText = 'Please enter a valid email.';
            valid = false;
        } else {
            emailError.innerText = '';
        }

        // Password validation
        const password = passwordInput.value;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (!passwordRegex.test(password)) {
            passwordError.innerText = 'Password must contain at least 6 characters, one uppercase, one lowercase, one digit, and one special character.';
            valid = false;
        } else {
            passwordError.innerText = '';
        }

        if (!valid) {
            event.preventDefault();
        }
    });
});
