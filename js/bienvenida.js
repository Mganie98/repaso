// -------- MENÚ RESPONSIVE --------
const menuToggle = document.getElementById('menuToggle');
const mainNavbar = document.getElementById('mainNavbar');

menuToggle.addEventListener('click', () => {
  mainNavbar.classList.toggle('show');
});

// -------- BIENVENIDA INTERACTIVA --------
const btnSaludar = document.getElementById('btnSaludar');
const mensajeBienvenida = document.getElementById('mensajeBienvenida');

btnSaludar.addEventListener('click', () => {
  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  const edadValor = document.getElementById('edad').value.trim();
  const edad = Number(edadValor);

  if (!nombre || !apellido || !edadValor) {
    mensajeBienvenida.textContent = 'Por favor, completa todos los campos.';
    mensajeBienvenida.style.color = 'red';
    return;
  }

  if (isNaN(edad) || edad <= 0) {
    mensajeBienvenida.textContent = 'Ingresa una edad válida.';
    mensajeBienvenida.style.color = 'red';
    return;
  }

  let textoEdad = '';
  if (edad > 20) {
    textoEdad = 'Es mayor';
  } else if (edad < 20) {
    textoEdad = 'Es menor';
  } else {
    textoEdad = 'Tiene exactamente 20 años';
  }

  mensajeBienvenida.style.color = '#111827';
  mensajeBienvenida.textContent = `Hola ${nombre} ${apellido}. ${textoEdad}. ¡Bienvenido/a al sitio!`;
});
