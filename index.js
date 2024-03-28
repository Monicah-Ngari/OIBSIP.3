function convertTemperature(event) {
  event.preventDefault();
  let temperature = parseFloat(document.getElementById("temperature").value);
  let unit = document.getElementById("unit").value;
  let resultElement = document.getElementById("result");
  let convertedTemperature;

  if (isNaN(temperature)) {
    resultElement.innerText = "Please enter a valid temperature.";
    return;
  }

  if (unit === "celsius") {
    resultElement.innerText = `The Temperature is ${temperature}°C`;
  } else if (unit === "fahrenheit") {
    convertedTemperature = (temperature * 9) / 5 + 32;
    convertedTemperature = Math.round(convertedTemperature);
    resultElement.innerText = `The Temperature is ${convertedTemperature}°F`;
  } else if (unit === "kelvin") {
    convertedTemperature = temperature + 273.15;
    convertedTemperature = Math.round(convertedTemperature);
    resultElement.innerText = `The Temperature is ${convertedTemperature}°K`;
  }
}
