const steps = document.querySelectorAll(".form-step");
let currentStep = 0;

// Inputs
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

// Error fields
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// Buttons
document.getElementById("next1").addEventListener("click", () => {
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
    } else {
        nameError.textContent = "";
        nextStep();
    }
});

document.getElementById("next2").addEventListener("click", () => {
    if (!validateEmail(emailInput.value)) {
        emailError.textContent = "Enter valid email";
    } else {
        emailError.textContent = "";
        nextStep();
    }
});

document.getElementById("finishBtn").addEventListener("click", () => {
    if (passwordInput.value.trim().length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
    } else {
        passwordError.textContent = "";
        nextStep();
        showSummary();
    }
});

// Back buttons
document.getElementById("back1").addEventListener("click", prevStep);
document.getElementById("back2").addEventListener("click", prevStep);

// Functions
function nextStep() {
    steps[currentStep].classList.remove("active");
    currentStep++;
    steps[currentStep].classList.add("active");
}

function prevStep() {
    steps[currentStep].classList.remove("active");
    currentStep--;
    steps[currentStep].classList.add("active");
}

// Email validation pattern
function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

// Summary
function showSummary() {
    const summary = `
        Name: ${nameInput.value}
        Email: ${emailInput.value}
        Password: ${passwordInput.value}
    `;
    document.getElementById("summaryText").textContent = summary;
}
