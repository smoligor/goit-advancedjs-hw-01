const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const formData = {
    email: "",
    message: ""
};

// Load data from localStorage
const savedData = JSON.parse(localStorage.getItem(localStorageKey));
if (savedData) {
    formData.email = savedData.email || "";
    formData.message = savedData.message || "";
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}

// Input event listener to save data
form.addEventListener('input', (event) => {
    const { name, value } = event.target;
    formData[name] = value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

// Submit event listener
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Check if fields are empty
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);

    // Clear everything
    localStorage.removeItem(localStorageKey);
    formData.email = "";
    formData.message = "";
    form.reset();
});
