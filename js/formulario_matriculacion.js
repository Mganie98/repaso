// js/inscripcion.js
window.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formInscripcion");
    const mensaje = document.getElementById("mensajeInscripcion");

    if (!form || !mensaje) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const apellido = document.getElementById("apellido").value.trim();

        if (!nombre || !apellido) {
            mensaje.textContent = "Por favor, completá al menos tu nombre y apellido.";
            mensaje.classList.remove("hidden");
            mensaje.classList.add("error");
            return;
        }

        mensaje.textContent = `Inscripción enviada correctamente. ¡Gracias, ${nombre} ${apellido}!`;
        mensaje.classList.remove("hidden", "error");

        form.reset();
    });
});
