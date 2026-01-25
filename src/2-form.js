const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

// Load data from localStorage
const savedData = JSON.parse(localStorage.getItem(localStorageKey));
if (savedData) {
    form.elements.email.value = savedData.email || '';
    form.elements.message.value = savedData.message || '';
}

// Input event listener to save data
form.addEventListener('input', (event) => {
    const { name, value } = event.target;
    const currentState = JSON.parse(localStorage.getItem(localStorageKey)) || {};
    currentState[name] = value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(currentState));
});

// Submit event listener
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    // Check if fields are empty
    if (!email || !message) {
        alert('All form fields must be filled in');
        return;
    }

    // Validate email using validator.js (from CDN)
    if (!window.validator.isEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    console.log({ email, message });

    // Clear form and localStorage
    localStorage.removeItem(localStorageKey);
    form.reset();
});
