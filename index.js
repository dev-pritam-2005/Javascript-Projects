const apiKey = "a01e5bec8caa51ef0457e51b265f4de9";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();


    console.log(data);



    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
   
    if(data.weather[0].main == "clouds"){
        weatherIcon.src = "pictures/clouds.png";
        
    }else if(data.weather[0].main == "clear"){
        
        weatherIcon.src = "pictures/clear.png";
    }
    else if(data.weather[0].main == "rain"){
        
        weatherIcon.src = "pictures/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        
        weatherIcon.src = "pictures/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        
        weatherIcon.src = "pictures/mist.png";
    }

}


searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

