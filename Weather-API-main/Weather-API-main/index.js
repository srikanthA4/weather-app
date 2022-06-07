
let temp_d = document.querySelectorAll(".temp_D");
let temp_n = document.querySelectorAll(".temp_N");
let timeUTC = document.querySelector(".time");
let city = document.querySelector("#city");
let currentTemp = document.querySelectorAll(".current-temp");

let key = "12b6d81fb50dc223d45c52f131e640a8";

setInterval(() => {
    const time = new Date();
    const hour = time.getHours(); //24hr
    const hour12 = hour >= 13 ? hour % 12 : hour //12hrs
    const min = time.getMinutes();
    const ampm = hour >= 12 ? "PM" : "AM"

    timeUTC.innerHTML = hour12 + ":" + min + `<span id="am_pm"> ${ampm}</span>`


}, 1000);

async function getWeatherData() {
    try {
        let city = document.getElementById("city").value

      
        let res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=${7}&appid=${key}&units=metric`);
        let data = await res.json();


        showWeather(data,city);
    }
    catch (error) {
        alert("Please enter correct city")
       
    }
}

function showWeather(data,city) {
     

    main.innerHTML =
    
        `<div class="city">${city}</div>
        <div class="wetherforcast">
    <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="weather_icon" class="icon">
    <div class="day">Monday</div>
    <div class="temp_N">Night - ${data.list[0].main.temp_min}&#176; C</div>
    <div class="temp_D">Day -${data.list[0].main.temp_max}&#176; C</div>
</div>
<div class="wetherforcast">
    <div class="wItems">
        <div class="day">Tuesday</div>
        <img src="http://openweathermap.org/img/wn/02n@2x.png" alt="weather_icon" class="icon">
        <div class="temp_N">Night - ${data.list[1].main.temp_min}&#176; C</div>
        <div class="temp_D">Day -${data.list[1].main.temp_max}&#176; C</div>
    </div>
</div>
<div class="wetherforcast">
    <div class="wItems">
        <div class="day">Wednesday</div>
        <img src="http://openweathermap.org/img/wn/11d@2x.png" alt="weather_icon" class="icon">
        <div class="temp_N">Night - ${data.list[2].main.temp_min}&#176; C</div>
        <div class="temp_D">Day -${data.list[2].main.temp_max}&#176; C</div>
    </div>
</div>
<div class="wetherforcast">
    <div class="wItems">
        <div class="day">Thursday</div>
        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather_icon" class="icon">
        <div class="temp_N">Night - ${data.list[3].main.temp_min}&#176; C</div>
        <div class="temp_D">Day -${data.list[3].main.temp_max}&#176; C</div>
    </div>
</div>
<div class="wetherforcast">
    <div class="wItems">
        <div class="day">Friday</div>
        <img src="http://openweathermap.org/img/wn/03n@2x.png" alt="weather_icon" class="icon">
        <div class="temp_N">Night - ${data.list[4].main.temp_min}&#176; C</div>
        <div class="temp_D">Day -${data.list[4].main.temp_max}&#176; C</div>
    </div>
</div>
<div class="wetherforcast">
    <div class="wItems">
        <div class="day">Saturday</div>
        <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="weather_icon" class="icon">
        <div class="temp_N">Night - ${data.list[5].main.temp_min}&#176; C</div>
        <div class="temp_D">Day -${data.list[5].main.temp_max}&#176; C</div>
    </div>
</div>
<div class="wetherforcast">
    <div class="wItems">
        <div class="day">Sunday</div>
        <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="weather_icon" class="icon">
        <div class="temp_N">Night - ${data.list[6].main.temp_min}&#176; C</div>
        <div class="temp_D">Day -${data.list[6].main.temp_max}&#176; C</div>
    </div>
</div>
</div>`


}