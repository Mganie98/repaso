// --- calculos ---
function operacion(tipo) {
  const n1 = parseFloat(prompt("Ingrese el primer número:"));
  const n2 = parseFloat(prompt("Ingrese el segundo número:"));
  let resultado;

  if (tipo === "suma") resultado = n1 + n2;
  else if (tipo === "division") resultado = n1 / n2;
  else if (tipo === "promedio") resultado = (n1 + n2) / 2;
  else if (tipo === "resta") resultado = n1 - n2;

  alert(`El resultado de la ${tipo} es: ${resultado}`);
}
