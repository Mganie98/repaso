// js/examen.js
window.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formExamen");
    const mensaje = document.getElementById("mensajeExamen");

    if (!form || !mensaje) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombreEx").value.trim();
        const materia = document.getElementById("materia").value.trim();
        const fecha = document.getElementById("fecha").value;

        if (!nombre || !materia || !fecha) {
            mensaje.textContent = "Completá todos los campos obligatorios para continuar.";
            mensaje.classList.remove("hidden");
            mensaje.classList.add("error");
            return;
        }

        mensaje.textContent = `Inscripción al examen de "${materia}" realizada correctamente. ¡Éxitos, ${nombre}!`;
        mensaje.classList.remove("hidden", "error");

        form.reset();
    });
});