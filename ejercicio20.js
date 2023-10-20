/*
En este ejercicio haremos varias cosas que nos permitirán cambiar la imagen de nuestra página web
de forma dinámica.

Empezaremos con la parte del emoticono, la funcionalidad de los botones será la siguiente:
• Si pulsamos “AUMENTAR” el tamaño del emoticono deberá aumentar en 10px.
• Si por el contrario pulsamos “DISMINUIR” el tamaño del emoticono disminuirá 10px.
• Por último, si el usuario pulsa “CAMBIAR” deberemos mostrar la imagen que no se esté
mostrando entre “bola-amarilla.jpg” y “gesto.jpg”.

La siguiente parte será la de la bombilla. Tenemos dos imágenes de una bombilla, en una aparece la
bombilla encendida y en otra apagada. El usuario podrá encender y apagar la bombilla utilizando
los botones a los lados de la imagen, por lo que nosotros deberemos modificar la imagen que
mostramos según el botón que se pulse.

Por último, haremos que un vídeo se añada a nuestra página (dentro del DIV “ventana”) si el
usuario pulsa el botón “VER”. El video que se debe mostrar está en la carpeta “Videos”.
*/

const img = document.getElementsByTagName("img");
const input = document.getElementsByTagName("input");
const ventana = document.getElementById("ventana");

let isOn = false;

const changeSize = (value) => {
  let width = img[0].offsetWidth;
  let height = img[0].offsetHeight;

  img[0].style.width = width * value;
  img[0].style.height = height * value;
};

const switchImg = () => {
  if (isOn) {
    img[0].src = "Images/bolaamarilla.jpg";
    isOn = false;
  } else {
    img[0].src = "Images/gesto.jpg";
    isOn = true;
  }
};

const switchBulb = (boolean) => {
  if (boolean) {
    img[1].src = "Images/encender.gif";
  } else {
    img[1].src = "Images/apagar.gif";
  }
};

const showVideo = () => {
  ventana.innerHTML = '<video autoplay=true src="Videos/movie.mp4"></video>';
};

input[0].addEventListener("click", () => changeSize(1.1));
input[2].addEventListener("click", () => changeSize(0.9));
input[1].addEventListener("click", () => switchImg());
input[3].addEventListener("click", () => switchBulb(true));
input[4].addEventListener("click", () => switchBulb(false));
input[5].addEventListener("click", () => showVideo(), { once: true });
