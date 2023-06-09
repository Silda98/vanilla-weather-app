function formatDate(timestamp){
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours<10) {
        hours = `0${hours}`
    }
    let minutes = date.getMinutes();
    if (minutes< 10) {
         minutes=`0${minutes}`
        }
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
   let day = days[date.getDay()];
    return `${day} ${hours}: ${minutes}`;
}


function displayTemperature(response){
    let temperatureElement=document.querySelector("#temperature");
    let cityElement=document.querySelector("#city");
    let descriptionElement=querySelector("#description");
    let humidityElement=querySelector("#humidity");
    let windElement=querySelector("#wind");
    let dateElement=querySelector("#date");
    temperatureElement.innerHTML= Math.round (response.data.main.temp);
    cityElement.innerHTML=response.data.name;
    descriptionElement.innerHTML=response.data.weather[0].description;
    humidityElement.innerHTML=response.data.main.humidity;
    windElement.innerHTML=Math.round (response.data.wind.speed);
    dateElement.innerHTML=formatDate(response.data.dt * 1000);
}

let apiKey ="2fo93e0a609f937f3f21da4b74t23b58";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(url).then(displyTemperature);