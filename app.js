const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
// let form = document.querySelector("form")
let weather = document.querySelector("#weather")
let search = document.querySelector("#search")
let btn = document.querySelector(".btn")





const getWeather = async (city) => {
    weather.innerHTML = "<h2> 𓆝 Loading..  𓆟  ;"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url)
    const data = await response.json()
    return showWeather(data)






}


const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = "<h2> City Not Found &#128533"
    }
    weather.innerHTML = `
          <div> <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
          </div>
             <div>
             <h2> ${data.main.temp} &#8451;</h2>
               <h4>${data.weather[0].main}</h4>
                 </div>`


}

// USER SUBMIT CITY NAME

btn.addEventListener("click", (event) => {

    // event.preventDefault()

    getWeather(search.value)

})