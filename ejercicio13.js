const names = ['name1', 'name2', 'name3', 'name4', 'name5', 'name6', 'name7', 'name8']
let points = 0

const askName = (name) => {
  let userAnswer = prompt('¿Cual es el nombre de la persona en la foto?')
  
  if (userAnswer == name) {
    points++
    alert('BIEN')
  } else {
    alert('SIGUE INTENTÁNDOLO')
  }
}

const showPoints = () => {
  alert(`${points} puntos`)
}


const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");
const img5 = document.querySelector("#img5");
const img6 = document.querySelector("#img6");
const img7 = document.querySelector("#img7");
const img8 = document.querySelector("#img8");
const info = document.querySelector("#info");

img1.addEventListener("contextmenu", () => askName(names[0]), {once: true});
img2.addEventListener("contextmenu", () => askName(names[1]), {once: true});
img3.addEventListener("contextmenu", () => askName(names[2]), {once: true});
img4.addEventListener("contextmenu", () => askName(names[3]), {once: true});
img5.addEventListener("contextmenu", () => askName(names[4]), {once: true});
img6.addEventListener("contextmenu", () => askName(names[5]), {once: true});
img7.addEventListener("contextmenu", () => askName(names[6]), {once: true});
img8.addEventListener("contextmenu", () => askName(names[7]), {once: true});
info.addEventListener("dblclick", () => showPoints());

window.addEventListener("contextmenu", e => e.preventDefault());
