
    document.addEventListener ("DOMContentLoaded", () => {
    document.getElementById("registroForm").addEventListener("submit", function(event) {
    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();
    let nombreError = document.getElementById("nombreError");
    let emailError = document.getElementById("emailError");
    let mensajeError = document.getElementById("mensajeError");
    let isValid = true;

    nombreError.textContent = "";
    apellidoError.textContent = "";
    emailError.textContent = "";
    mensajeError.textContent = "";

    if (nombre === "") {
        nombreError.textContent = "Por favor, ingresa tu nombre.";
        isValid = false;
    }

    if (email === "") {
        emailError.textContent = "Por favor, ingresa tu correo electrónico.";
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = "Por favor, ingresa un correo electrónico válido.";
        isValid = false;
    }

    if (mensaje === "") {
        mensajeError.textContent = "Por favor, ingresa tu mensaje.";
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});

function isValidEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
});