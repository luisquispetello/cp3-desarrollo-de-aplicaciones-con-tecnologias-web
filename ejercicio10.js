let maxNum = null

const askNum = () => {
  let num1 = Number(prompt('Inserta un número'))
  let num2 = Number(prompt('Inserta un segundo número'))
  let num3 = Number(prompt('Inserta un tercero'))

  calcMaxNumber(num1, num2, num3)

  alert(`Entre estos tres números ${num1}, ${num2}, ${num3} el mayor es ${maxNum}`)
}

const calcMaxNumber = (...args) => {
  maxNum = Math.max(...args)
}


const mouse = document.querySelector('img')
mouse.addEventListener('mouseout', askNum)
