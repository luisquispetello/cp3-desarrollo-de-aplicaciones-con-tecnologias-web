let fullName = "";
const language = prompt("ES/EN").toUpperCase();

if (language === "ES") {
  fullName = prompt("Nombre y apellido");
} else {
  fullName = prompt("Name and surname");
}

const showInfo = () => {
  if (language === "ES") {
    alert("Haz click en las imágenes para conocer los presupuestos");
  } else {
    alert("Click on the images to know the budgets");
  }
};

const showMessage = (destination, price) => {
  if (language === "ES") {
    alert(`Estancia de dos semanas en ${destination}. Presupuesto de ${fullName}: ${price}€`);
  } else {
    alert(`Two week stay at ${destination}. Quote for ${fullName}: ${price}€`);
  }
};


const iguazuImg = document.querySelector("#iguazu");
const maldivasImg = document.querySelector("#maldivas");
const patagoniaImg = document.querySelector("#patagonia");
const infoImg = document.querySelector("#info");

iguazuImg.addEventListener("click", () => {showMessage('IGUAZU', 2500)});
maldivasImg.addEventListener("click", () => {showMessage('MALDIVAS', 3000)});
patagoniaImg.addEventListener("click", () => {showMessage('PATAGONIA', 3100)});
infoImg.addEventListener("mouseover", showInfo);
