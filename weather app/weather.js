const apiKey = "6a6ca99416c00b5a8f972bd411fbec59";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const Searchinput = document.querySelector('.search input');
const Searchbtn = document.querySelector('.search button');
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(){
    const response = await fetch(apiUrl + Searchinput.value + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src="images/clouds.png";
    }
    else if(data.weather[0].main == "CLear"){
        weatherIcon.src="images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src="images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src="images/mist.png";
    }
    document.querySelector('.weather').style.display='flex';
}
Searchbtn.addEventListener("click",()=>{
    checkWeather(Searchinput.value);
})