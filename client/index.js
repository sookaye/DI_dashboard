const signupLink = document.getElementById('signupLink');
const signinLink = document.getElementById('signinLink');
const registrationForm = document.getElementById('registrationForm');
const signInForm = document.getElementById('signInForm');

signupLink.addEventListener('click', function () {
    registrationForm.style.display = 'block';
    signInForm.style.display = 'none';
    settingsForm.style.display = 'none';
});

signinLink.addEventListener('click', function () {
    signInForm.style.display = 'block';
    registrationForm.style.display = 'none';
    settingsForm.style.display = 'none';
});

settingsLink.addEventListener('click', function () {
    settingsForm.style.display = 'block';
    registrationForm.style.display = 'none';
    signInForm.style.display = 'none';
});




