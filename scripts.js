function selectImage(style) {
    // Logic to handle style selection
    console.log(`Style selected: ${style}`);
}

function showResult() {
    // Logic to show the result of the style quiz
    alert("Your style will be displayed here!");
}

function toggleSignup() {
    const signupForm = document.getElementById("signup-form");
    signupForm.style.display = signupForm.style.display === "none" ? "block" : "none";
}
