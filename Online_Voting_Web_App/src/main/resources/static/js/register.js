document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        let valid = true;

        // Clear previous error messages
        document.getElementById('nameError').innerText = '';
        document.getElementById('passwordError').innerText = '';
        document.getElementById('emailError').innerText = '';
        document.getElementById('phoneError').innerText = '';

        // Validate User Name
		const name = document.getElementById('name').value;
		const nameRegex = /^[A-Za-z\s.]+$/; // Allows letters and spaces
		if (!nameRegex.test(name)) {
		    document.getElementById('nameError').innerText = 'User Name must contain only letters and spaces';
		    valid = false;
		}

        // Validate Password
        const password = document.getElementById('password').value;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/; // At least 6 characters, 1 uppercase, 1 lowercase, 1 special character
        if (!passwordRegex.test(password)) {
            document.getElementById('passwordError').innerText = 'Password must be at least 6 characters long, contain a capital letter, a small letter, and a special character.';
            valid = false;
        }

        // Validate Email
        const email = document.getElementById('email').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
        if (!emailRegex.test(email)) {
            document.getElementById('emailError').innerText = 'Please enter a valid email address.';
            valid = false;
        }

        // Validate Phone Number
        const phone = document.getElementById('phone').value;
        const phoneRegex = /^\d{10}$/; // Only 10 digits
        if (!phoneRegex.test(phone)) {
            document.getElementById('phoneError').innerText = 'Phone number must be exactly 10 digits.';
            valid = false;
        }

        // If not valid, prevent form submission
        if (!valid) {
            event.preventDefault();
        }
    });
});