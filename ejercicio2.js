
let firstName = prompt("Introduce tu nombre");
let surname = prompt("Introduce tu apellido");
let birthPlace = prompt("Introduce tu lugar de nacimiento");

while (/\d/.test(firstName) || /\d/.test(surname) || /\d/.test(birthPlace)) {
  alert("No se permiten números en los campos de nombre, apellido y lugar de nacimiento.");
  firstName = prompt("Introduce tu nombre");
  surname = prompt("Introduce tu apellido");
  birthPlace = prompt("Introduce tu lugar de nacimiento");
}

let birthDate = prompt("Introduce tu fecha de nacimiento (formato AAAA-MM-DD)");

while (!/^\d{4}-\d{2}-\d{2}$/.test(birthDate)) {
  alert("El formato de la fecha debe ser AAAA-MM-DD.");
  birthDate = prompt("Introduce tu fecha de nacimiento (formato AAAA-MM-DD)");
}