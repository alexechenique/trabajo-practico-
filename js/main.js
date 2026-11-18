// Validación del formulario de contacto
const formulario = document.getElementById("form-contacto");
const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");
const mensajeInputForm = document.getElementById("mensaje");
const alertaForm = document.getElementById("alerta-formulario");

if (formulario) {
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const nombre = nombreInput.value.trim();
        const email = emailInput.value.trim();
        const mensaje = mensajeInputForm.value.trim();

        if (nombre === "" || email === "" || mensaje === "") {
            alertaForm.textContent = "Por favor, completá todos los campos obligatorios.";
            alertaForm.className = "text-danger mt-3 fw-bold text-center";
        } else {
            alertaForm.textContent = "¡Mensaje enviado con éxito! Gracias por comunicarte con Diamond City.";
            alertaForm.className = "text-success mt-3 fw-bold text-center";
            formulario.reset();
        }
    });
}