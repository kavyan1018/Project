document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const signupLink = document.getElementById('signupLink');
    const formContainer = document.querySelector('.form-container');
    const successMessage = document.querySelector('.success-message');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        formContainer.classList.add('submitted');

        setTimeout(() => {
            formContainer.style.display = 'none';
            successMessage.style.display = 'block';
            successMessage.style.animation = 'fadeIn 0.5s ease-out forwards';
        }, 1000);

        setTimeout(() => {
            loginForm.reset();
            formContainer.classList.remove('submitted');
            formContainer.style.display = 'block';
            successMessage.style.display = 'none';
        }, 3000);
    });

    signupLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Sign up functionality to be implemented');
    });

    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        input.addEventListener('blur', () => {
            if (input.value === '') {
                input.parentElement.classList.remove('focused');
            }
        });
    });
});