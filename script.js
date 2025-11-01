const passwordInput = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");
const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

lengthInput.addEventListener("input", () => {
    lengthValue.textContent = lengthInput.value;
});

generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const num = "0123456789";
    const sym = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let charset = "";
    if (lowercase.checked) charset += lower;
    if (uppercase.checked) charset += upper;
    if (numbers.checked) charset += num;
    if (symbols.checked) charset += sym;

    if (charset === "") {
        alert("Pilih minimal satu jenis karakter!");
        return;
    }

    let password = "";
    for (let i = 0; i < lengthInput.value; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    passwordInput.value = password;
}

copyBtn.addEventListener("click", () => {
    if (!passwordInput.value) return;
    navigator.clipboard.writeText(passwordInput.value);
    copyBtn.textContent = "✅ Copied!";
    setTimeout(() => (copyBtn.textContent = "📋 Copy"), 1500);
});
