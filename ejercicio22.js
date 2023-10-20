const form = document.forms.myForm; // Selección del formulario por nombre
const inputs = form.getElementsByTagName('input');

const regex = {
  dni: /^\d{2}\.\d{3}\.\d{3}-[A-Z]$/,
  firstName: /^([a-zA-Z]+\s[a-zA-Z]+)|([a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+)$/,
  birthDate: /^\d{2}\/\d{2}\/\d{4}$/,
  email: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
  web: /^https:\/\/www\.[a-zA-Z]+\.[a-zA-Z]{2,3}$/,
  password: /^.{8,10}$/,
};

const errorMessage = {
  dni: 'DNI Incorrecto (99.999.999-X)',
  firstName: 'Nombre Incorrecto (Mínimo 1 nombre y 1 apellido, Máximo 2 nombres y 2 apellidos)',
  birthDate: 'Fecha de Nacimiento Incorrecta (dd/mm/yyyy)',
  email: 'Email Incorrecto (xxxxxx@yyyyy.zzz)',
  web: 'Web Incorrecta (https://www.xxxx.yyy)',
  password: 'Longitud de contraseña incorrecta (Entre 8 y 10 caracteres)',
};

function validateForm() {
  let valid = true;

  for (const input of inputs) {
    const fieldName = input.name;
    const fieldValue = input.value;

    // Limpiar mensajes de error previos
    const errorMessageDiv = input.nextElementSibling;
    if (errorMessageDiv && errorMessageDiv.classList.contains('error-message')) {
      errorMessageDiv.remove();
    }

    if (!fieldValue.trim()) {
      // Campo en blanco
      input.style.borderColor = 'red';
      valid = false;
    } else if (!regex[fieldName].test(fieldValue)) {
      // Campo no cumple con el formato
      input.style.borderColor = 'red';
      const errorDiv = document.createElement('div');
      errorDiv.classList.add('error-message');
      errorDiv.textContent = errorMessage[fieldName];
      input.insertAdjacentElement('afterend', errorDiv);
      valid = false;
    } else {
      input.style.borderColor = ''; // Restaurar el borde a su estado predeterminado
    }
  }

  return valid;
}

form.addEventListener('submit', (event) => {
  if (!validateForm()) {
    event.preventDefault();
  } else {
    alert('Mensaje enviado');
  }
});
