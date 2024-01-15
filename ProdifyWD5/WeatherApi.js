let button = document.querySelector('.button');
let inputvalue = document.querySelector('.inputValue');
var temp = document.querySelector('.temp');
var pres = document.querySelector('.pres');
var windsp = document.querySelector('.windsp');

button.addEventListener('click', function () {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&units=metric&appid=108dd9a67c96f23039937fe6f3c91963`
  )
    .then((response) => response.json())
    .then((data) => displayData(data))

    .catch((err) => alert('Wrong City name'));
});

function displayData(data) {
  temp.innerText = `${data.main.temp}°C`;
  pres.innerText = `${data.main.pressure}Pa`;
  windsp.innerText = `${data.wind.speed}m/s`;
}
