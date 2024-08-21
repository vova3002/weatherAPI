// 3a1603056110c50a7e46c403112651cc
// https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}
const apikey = "3a1603056110c50a7e46c403112651cc"
const weatherInput = document.querySelector(".weather__input")
const weatherList = document.querySelector(".weather__list")

weatherInput.addEventListener("change", (e) => {
  const weather = e.target.value
  console.log(weather)
  getWeather(weather).then((data) => {
    return data.json()
  }).then((data) => {
    htmlWeather(data)
  })
})

function getWeather(weather){
  console.log(weather)
  const data = fetch(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${apikey}`)
  return data
}

const htmlWeather = (weatherHTML) => {
  console.log(weatherHTML)
  const htmlShowcaseWeather = `  <div class="weather__div">
  <p>Температура: ${weatherHTML.main.temp}</p>
  <p>Швидкість вітру: ${weatherHTML.wind.speed}</p>
  <p>Вологість: ${weatherHTML.main.humidity}</p>
</div>`
weatherList.innerHTML = htmlShowcaseWeather
}