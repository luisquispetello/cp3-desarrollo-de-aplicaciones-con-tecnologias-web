const msrCloset1 = [88, 58, 208]
const msrCloset2 = [120, 60, 191]
const msrCloset3 = [117, 50, 190]


const askMeasures = (msrCloset) => {
  let width = prompt('Indica la anchura de tu espacio en cm')
  let depth = prompt('Indica el fondo de tu espacio en cm')
  let height = prompt('Indica la altura de tu espacio en cm')

  if(width <= msrCloset[0] && depth <= msrCloset[1] && height <= msrCloset[2]) {
    alert(`Este mueble cabe en tu espacio. Mira a ver si quedan unidades disponibles.`)
  } else {
    alert(`Este mueble no entra en tu espacio. Inténtalo con otro.`)
  }
}


const closet1 = document.querySelector("#closet1");
const closet2 = document.querySelector("#closet2");
const closet3 = document.querySelector("#closet3");

closet1.addEventListener("click", () => {askMeasures(msrCloset1)});
closet2.addEventListener("click", () => {askMeasures(msrCloset2)});
closet3.addEventListener("click", () => {askMeasures(msrCloset3)});
