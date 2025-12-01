// --- edad ---
function mensajeEdad() {
  const edad = prompt("¿Cuál es tu edad?");
  const texto = document.getElementById("mensajeEdadTexto");
  texto.textContent = edad >= 20
    ? "Eres mayor de 20 años."
    : "Eres menor de 20 años.";

  // Cambiar imagen al pasar el mouse
  const imagenes = document.querySelectorAll(".imgAnimada");
  imagenes.forEach(img => {
    const original = img.src;
    const siguiente = img.getAttribute("data-next");

    img.addEventListener("mouseover", () => img.src = siguiente);
    img.addEventListener("mouseout", () => img.src = original);
  });
}
