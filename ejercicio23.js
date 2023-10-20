/**
Crear un script que informe al usuario en que zona de la pantalla ha pulsado el ratón. Las zonas 
definidas son las siguientes: izquierda arriba, izquierda abajo, derecha arriba y derecha abajo. Para 
determinar el tamaño de la ventana del navegador, utilizar la función tamanoVentanaNavegador()
proporcionada.
var ancho;
var alto;
function tamanoVentanaNavegador(){
  alto=window.innerHeight;
  ancho=window.innerWidth;
}
No es necesario añadir ningún DIV en nuestra página, podemos hacerlo simplemente con eventos y 
JS
 */

document.addEventListener('click', (event) => {
  const x = event.clientX;
  const y = event.clientY;
  const width = window.innerWidth;
  const height = window.innerHeight;
  let zone = ''

  if (x < width / 2) {
    if (y < height / 2) {
      zone = 'izquierda arriba';
    } else {
      zone = 'izquierda abajo';
    }
  } else {
    if (y < height / 2) {
      zone = 'derecha arriba';
    } else {
      zone = 'derecha abajo';
    }
  }

  alert(`Has pulsado en la zona ${zone} de la pantalla.`);
});
