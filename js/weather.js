const API_KEY = '8ec6f0154a214bc6c19ca9f61a364801';

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector('.weather span:first-child');
        const city = document.querySelector('.weather span:last-child');
        weather.innerText = `${Math.floor(data.main.temp)}℃ ${data.weather[0].main}`;
        city.innerText = `/ ${data.name}`;
    });

}

function onGeoErroer(){
    alert("please let us know ;(")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErroer);