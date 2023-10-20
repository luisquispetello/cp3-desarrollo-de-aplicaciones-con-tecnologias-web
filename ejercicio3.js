
let num1 = prompt("Introduce un número");
let num2 = prompt("Introduce otro número");

while (isNaN(num1) || isNaN(num2)) {
  alert("Solo se permiten números.");
  num1 = prompt("Introduce un número");
  num2 = prompt("Introduce otro número");
}