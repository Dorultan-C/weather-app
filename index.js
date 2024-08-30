const apiKey = 'e244328dfe7e0075a76492fe1dad86af';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metricq=';
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

document.querySelector('.city').innerHTML = data.name;
document.querySelector('.temp').innerHTML = Math.round(data.main.temp)  + '°C';
document.querySelector('.humidity').innerHTML = data.main.humidity +' %';
document.querySelector('.wind').innerHTML = data.wind.speed + ' Km/h';
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})


