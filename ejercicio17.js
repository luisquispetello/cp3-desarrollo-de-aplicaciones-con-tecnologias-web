/* En este ejercicio vamos a crear un cuento, pero para ello necesitaremos la ayuda del usuario. La
siguiente página está adjunta al ejercicio:
Nuestro objetivo será darle funcionalidad a la página adjunta. La funcionalidad deberá ser la
siguiente:
• Al pulsar el botón “CREA EL CUENTO” deberemos mostrar en un DIV de la página un
cuento como el siguiente:
Erase una vez una persona muy perezosa llamada Anabel. Pero un día se encontró con
Vicente en una esquina.
Las tres palabras subrayadas y con la letra en rojo son ejemplos de valores insertados en los
campos adjetivo, nombre y nombre de otra persona respectivamente. Vosotros deberéis
mostrar aquellos que el usuario inserte.
Por otro lado, el DIV indicado tendrá que tener el color de fondo que el usuario inserte en el
campo COLOR.
• Al pulsar el botón “BORRAR” por su parte el cuento tendrá que borrarse de la pantalla y el
valor de los campos volver a estar vacío.
*/

const selectInputForm = document.getElementsByTagName("input");
const taleDiv = document.getElementById("cuento");

let mainName = selectInputForm[0];
let adjective = selectInputForm[1];
let otherName = selectInputForm[2];
let color = selectInputForm[3];

//function that inserts a customized text inside the div
const createTale = () => {
  if (
    mainName.value == "" ||
    adjective.value == "" ||
    otherName.value == "" ||
    color.value == ""
  ) {
    let message = 'Rellena primero todo el formulario'
    taleDiv.innerHTML = message
  } else {
    let tale = `Erase una vez una persona muy ${adjective.value} 
                llamada ${mainName.value}. Pero un día se encontró con 
                ${otherName.value} en una esquina.`;
    taleDiv.innerHTML = tale;
    changeBgColor(color.value);
  }
};

// function that erase the div and input content
const eraseTale = () => {
  taleDiv.innerHTML = "";
  mainName.value = "";
  adjective.value = "";
  otherName.value = "";
  color.value = "";
};

//function that change the color of the div with the input provided
const changeBgColor = (color) => {
  taleDiv.style.backgroundColor = color;
};


selectInputForm[4].addEventListener("click", () => createTale());
selectInputForm[5].addEventListener("click", () => eraseTale());
