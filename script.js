function checkPassword() {
    const input = document.getElementById("passwordInput").value;
    const errorMsg = document.getElementById("errorMessage");
    const correctPassword = "festa2025"; // cambiala se vuoi

    if(input === correctPassword) {
        window.location.href = "main.html"; // pagina principale del sito
    } else {
        errorMsg.textContent = "Password errata! Riprova.";
    }
}
