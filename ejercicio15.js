/**
 * Crea un HTML con 3 imágenes, una en la que se vea una lista, otra en la que se vea el Yin-Yang y
una última que refleje un resultado. El objetivo de esta página será obtener el número máximo que
nos ha indicado el usuario o la posición en la que lo insertó.

Cuando el usuario pase el ratón por encima de la primera le pediremos que inserte una lista de
números separados por comas.

Cuando haga clic sobre la imagen del yin-yang le preguntaremos qué quiere saber si el valor
máximo o la posición en la que se insertó ese valor.

Cuando haga doble clic en la imagen del resultado le mostraremos el resultado que nos ha pedido.

Realiza los cálculos finales en una función a parte, para en caso de necesitar mostrar el resultado en
otro punto en el futuro no tengamos que modificar lo ya existente.
 */


let numberList = ''
let answer = ''
let maxNumber = null
let positionMaxNumber = null

const askNumberList = () => {
  numberList = prompt('Inserta una lista de números separadas por comas', '1, 2, 3...')
}

const askMaxOrPosition = () => {
  answer = prompt('Qué quieres saber ¿el valor máximo(1) o la posición de ese valor(2)', 'answer 1 or 2')
  getMaxAndPosition()

}

const getMaxAndPosition = () => {
  let arrayNumberList = numberList.split(',').map(numb => Number(numb))
  maxNumber = Math.max(...arrayNumberList)
  positionMaxNumber = arrayNumberList.indexOf(maxNumber)
}

const showResult = (answer) => {
  if (answer == 1) {
    alert(`${maxNumber}`)
  }
  else if (answer == 2) {
    alert(`${positionMaxNumber}`)
  } else {
    alert('Please answer with the number 1 or 2')
  }
}


const tagImg = document.getElementsByTagName('img')
const img1 = tagImg[0]
const img2 = tagImg[1]
const img3 = tagImg[2]

img1.addEventListener('mouseover', () => askNumberList())
img2.addEventListener('click', () => askMaxOrPosition())
img3.addEventListener('dblclick', () => showResult(answer))