/* En el siguiente ejercicio vamos a seguir modificando aquello que tenemos o que el usuario añade en
la página Web. Como el propio HTML adjunto explica lo que haremos en este ejercicio es mover los textos de un
sitio a otro y modificar sus estilos cuando el usuario pulse botones.

Los botones “LLEVAR ARRIBA” y “LLEVAR ABAJO” moverán los textos que están o que el
usuario inserte dentro de la tabla borrándolos de su sitio original.

Además en el caso del texto al pulsar el botón se modificará el color de fondo de la celda a donde se
mueva el texto, dejando el anterior en blanco.

El resto de botones por su parte modificarán los estilos del párrafo “Los botones...” cuando los
pulsemos.
*/


const paragraphs = document.getElementsByTagName('p')
const inputs = document.getElementsByTagName('input')


// Function that triggers the position paragraph table
const moveText = (from, to, element) => {
  let text = element[from].textContent
  let inputValue = element[from].value

  element[to].parentNode.style.backgroundColor = "red"
  element[from].parentNode.style.backgroundColor = "transparent"

  if (element == paragraphs) {
    element[to].textContent = text
    element[from].textContent = ''
  } else {
    element[to].value = inputValue
    element[from].value = ''
  }
}


// Function that changes the font properties
const changeStyle = (property) => {
  let font = ["Arial", "Comic Sans MS", "Courier New", "Georgia", "Times New Roman"]
  let size = ["16px", "25px", "30px", "35px", "40px"];
  let color = ["red", "green", "blue", "purple", "orange"];
  
  firstParagraph = paragraphs[0]
  randomIndex = Math.floor(Math.random() * 4)

  if (property === "fontFamily") firstParagraph.style[property] = font[randomIndex]
  if (property === "fontSize") firstParagraph.style[property] = size[randomIndex]
  if (property === "color") firstParagraph.style[property] = color[randomIndex]
}


// Change position buttons
inputs[1].addEventListener('click', () => moveText(0, 3, inputs))
inputs[4].addEventListener('click', () => moveText(3, 0, inputs))
inputs[2].addEventListener('click', () => moveText(1, 2, paragraphs))
inputs[5].addEventListener('click', () => moveText(2, 1, paragraphs))

// Change font property buttons
inputs[6].addEventListener('click', () => changeStyle('fontFamily'))
inputs[7].addEventListener('click', () => changeStyle('fontSize'))
inputs[8].addEventListener('click', () => changeStyle('color'))
