const userData = {
  temperature: "",
  weather: "",
  wind: "",
  date: new Date(),
}


const askQuestion = (question, defaultValue, storeVariable) => {
  const userInput = prompt(question, defaultValue);
  userData[storeVariable] = userInput
};

const showText = () => {
  const {temperature, weather, wind, date} = userData
  const month = date.toLocaleString("es-es", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();
  
  if (!temperature) {
    alert("Introduce la temperatura de hoy primero");
  } else if (!weather) {
    alert("Introduce el tiempo de hoy primero");
  } else if (!wind) {
    alert("Introduce el viento de hoy primero");
  } else {
    alert(`
    Tiempo del ${day} de ${month} del ${year}:
    Hace ${temperature}°C. ${weather}
    Viento: ${wind}
    ©SEPE
    `);
  }
};


const buttons = document.getElementsByTagName('button');
buttons[0].addEventListener("click", () => askQuestion("Dime la temperatura de hoy", "21", 'temperature'));
buttons[1].addEventListener("click", () => askQuestion("Dime qué tiempo hace hoy", "soleado, lluvioso, nublado...", 'weather'));
buttons[2].addEventListener("click", () => askQuestion("Dime si hay viento", "si/no", 'wind'));
buttons[3].addEventListener("dblclick", () => showText());