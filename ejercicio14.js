/**
 * Modify an array with the indicated instructions
 */

const contestants = ['Michael', 'Aitor', 'Sara', 'Mohamed', 'Celia',
  'Nerea', 'Damián']

// Celia adelanta a Mohamed
let classification = contestants.slice()
let reverseCeliaAndMohamed = classification.splice(3, 2, 'Celia', 'Mohamed')
console.log(classification)

// Damián es descalificado y se elimina del concurso.
let indexOfDamian = classification.indexOf('Damian')
let removeDamian = classification.splice(indexOfDamian)
console.log(classification)

// Detrás de Aitor y antes que Sara se clasifican dos nuevos concursantes: Roberto y Amaia.
let addRobertoAndAmaia = classification.splice(2, 0, 'Roberto', 'Amaia')
console.log(classification)

// Hay una nueva concursante que pasa a encabezar la clasificación Marta.
let addMarta = classification.unshift('Marta')

// Imprime la clasificación actualizada y comprueba que el resultado es el esperado.
console.log(classification)
