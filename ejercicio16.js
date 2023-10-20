/*
Modifica el fichero HTML adjunto al ejercicio para posibilitar que cada vez que el usuario pase el
ratón por encima de uno de los recuadros de colores el fondo de la página HTML cambie de color.

Para continuar practicando con las funciones y los parámetros en el script que entregueis no podrá
haber más de una función definida.
*/

const changeColorBackground = (color) => {
  tagBody.style.background = color;
  
}

const tagBody = document.getElementsByTagName('body')[0]
const selectImg = document.getElementsByTagName('img')
const white = selectImg[0]
const red = selectImg[1]
const yellow = selectImg[2]
const green = selectImg[3]
const blue = selectImg[4]

white.addEventListener('mouseover', () => changeColorBackground('white'))
red.addEventListener('mouseover', () => changeColorBackground('red'))
yellow.addEventListener('mouseover', () => changeColorBackground('yellow'))
green.addEventListener('mouseover', () => changeColorBackground('green'))
blue.addEventListener('mouseover', () => changeColorBackground('blue'))