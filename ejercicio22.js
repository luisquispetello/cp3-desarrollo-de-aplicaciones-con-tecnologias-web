/*
En el siguiente ejercicio vamos validar un formulario, además de validar que los campos no se 
queden en blanco deberemos validar lo siguiente:
• DNI con formato 99.999.999-X
• Nombre, mínimo 1 nombre y 1 apellido, máximo 2 nombre y 2 apellidos
• Fecha de Nacimiento con formato dd/mm/yyyy
• Email con formato xxxxxx@yyyyy.zzz
• WEB con formato http://www.xxxx.yyy
• Contraseña de entre 8 y 10 caracteres
Los errores que se den se deberán mostrar por pantalla en el DIV habilitado para ello. Los mensajes 
serán los siguientes:
• Dni Incorrecto (99.999.999-X)
• Nombre Incorrecto (Mínimo 1 nombre y 1 apellido, Máximo 2 nombre y 2 apellidos)
• Email Incorrecto (xxxxxx@yyyyy.zzz)
• Web Incorrecta (http://www.xxxx.yyy)
• Longitud de contraseña incorrecta (Entre 8 y 10 caracteres)
Utiliza un máximo de 3 funciones para resolver el problema.
Adicional, aquellos campos que no cumplan con los valores exigidos deberán ser borrados y 
mostrados con un borde rojo hasta la siguiente vez que se pulse enviar 
*/


const form = document.forms.myForm
const inputs = form.getElementsByTagName('input')

const dni = inputs[0]
const firstName = inputs[1]
const birthDate = inputs[2]
const email = inputs[3]
const web = inputs[4]
const password = inputs[5]

const regex = {
  dni: /^\d{2}\.\d{3}\.\d{3}-[A-Z]$/,
  firstName: /^([a-zA-Z]+\s[a-zA-Z]+)|([a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+)$/,
  birthDate: /^\d{2}\/\d{2}\/\d{4}$/,
  email: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
  web: /^https:\/\/www\.[a-zA-Z]+\.[a-zA-Z]{2,3}$/,
  passwords: /^.{8,10}$/
}

const errorMessage = {
  dni: '<div class="error">Dni Incorrecto (99.999.999-X)</div>',
  firstName: '<div class="error">Nombre Incorrecto (Mínimo 1 nombre y 1 apellido, Máximo 2 nombre y 2 apellidos)</div>',
  birthDate: '<div class="error">Fecha de Nacimiento Incorrecto (dd/mm/yyyy)</div>',
  email: '<div class="error">Email Incorrecto (xxxxxx@yyyyy.zzz)</div>',
  web: '<div class="error">Web Incorrecta (http://www.xxxx.yyy)</div>',
  password: '<div class="error">Longitud de contraseña incorrecta (Entre 8 y 10 caracteres)</div>'
}


const validateForm = (element) => {

  if (!element.value.trim()) {
    element.insertAdjacentHTML("afterend", "<div>Por favor rellena este campo</div>")
  }
  if (!element.value.match(regex[element])) {
    element.insertAdjacentHTML("afterend", errorMessage[element])
  }
}

// function validateForm() {
//   let valid = true;

//   for (const input of inputs) {
//     const fieldName = input.name;
//     const fieldValue = input.value;

//     // Limpiar mensajes de error previos
//     const errorMessageDiv = input.nextElementSibling;
//     if (errorMessageDiv && errorMessageDiv.classList.contains('error-message')) {
//       errorMessageDiv.remove();
//     }

//     if (!fieldValue.trim()) {
//       // Campo en blanco
//       input.style.borderColor = 'red';
//       valid = false;
//     } else if (!regex[fieldName].test(fieldValue)) {
//       // Campo no cumple con el formato
//       input.style.borderColor = 'red';
//       const errorDiv = document.createElement('div');
//       errorDiv.classList.add('error-message');
//       errorDiv.textContent = errorMessage[fieldName];
//       input.insertAdjacentElement('afterend', errorDiv);
//       valid = false;
//     } else {
//       input.style.borderColor = ''; // Restaurar el borde a su estado predeterminado
//     }
//   }

//   return valid;
// }

form.addEventListener('submit', (event) => {

  event.preventDefault()

  if (!validateForm()) {
    event.preventDefault()
  } else {
    alert("Mensaje enviado")
  }
})