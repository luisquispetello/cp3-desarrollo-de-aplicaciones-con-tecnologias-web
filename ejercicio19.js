/* 
En este caso vamos a darle una pequeña vuelta a lo visto en el ejercicio 13 - ¿Quién es quién?.
Cómo podréis observar ahora tenemos unos inputs y dos botones para jugar a nuestro ¿Quién es
quién?. El funcionamiento deberá ser el siguiente:
• Al pulsar el botón “Acertados” deberemos comprobar cuantas de las respuestas son
correctas, pero antes deberemos realizar dos comprobaciones:
◦ Deberemos poner el borde naranja aquellos inputs en los que no se haya insertado
respuesta o solo se haya insertado un espacio.
◦ Deberemos poner el borde azul a los inputs si el usuario nos inserta un número en lugar
de un nombre.
• Si alguno de los casos anteriores ocurre el programa deberá mostrar un mensaje pidiendo al
usuario que inserte datos válidos.
• Si el usuario ha escrito un texto en todos los campos la página pasará a validar las
respuestas. En caso de respuesta correcta se deberá sumar un punto y poner el borde del
input de una anchura de 7px y de color verde. En caso de haber alguna no acertada y con un
borde de otro color se deberá dejar como al inicio.
• Si se pulsa el botón “Borra y empieza de nuevo” borraremos todo el contenido de los inputs
y pondremos todos los bordes como estaban al principio.
• En caso de pulsar “Acertados” sin haber borrado antes la cuenta deberá empezar de 0, no
sumarse a los aciertos anteriores.
*/

const paragraph = document.getElementsByTagName("p");
const inputs = document.getElementsByTagName("input");
const names = ["name1", "name2", "name3", "name4", "name5", "name6", "name7", "name8"];


// Function that review the input values
const reviewAnswers = () => {
  let points = 0;
  let counter = 0

  //iterate over values and look if they are correct
  for (let i = 2; i <= 9; i++) {
    let answer = inputs[i].value;

    if (answer === names[i - 2]) {
      inputs[i].style.border = "7px solid green";
      points++
      counter++
    } else if (answer === " " || answer === "") {
      inputs[i].style.border = "1px solid orange";
    } else if (isNaN(answer) === false) {
      inputs[i].style.border = "1px solid blue";
      counter++
    } else {
      inputs[i].style.border = "1px solid red";
      counter++
    }
  }
  
  if (counter === 8 && points !== 8) {
    paragraph[1].textContent = points
    alert('Por favor inserta valores validos')
  } else if(points === 8){
    paragraph[1].textContent = points
    alert('You Win')
  }
};


// Function that erase all values and points
const resetGame = () => {
  //points
  paragraph[1].textContent = 0

  //input values
  for (let i = 2; i <= 9; i++) {
    inputs[i].value = ""
    inputs[i].style.border = "1px solid grey";
  }
};


// Buttons
inputs[0].addEventListener("click", () => reviewAnswers());
inputs[1].addEventListener("click", () => resetGame());