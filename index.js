const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9245a8f4edmsh185f80e53b2dbf2p19c9b6jsn38f344c69b30',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};
const weatherIconDiv = document.getElementById('weatherIcon')
const weatherDiv = document.getElementById('weather')
const temperatureDiv = document.getElementById('temperature')
const searchInputDiv = document.getElementById('searchInput')
const searchBtnDiv = document.getElementById('searchBtn')
const nameDiv = document.getElementById('name')
let url

searchBtnDiv.onclick = () => {
    url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${searchInputDiv.value}`
    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            weatherDiv.innerHTML = `${data.current.condition.text}`;
            weatherIconDiv.innerHTML = `<img src="${data.current.condition.icon}">`;
            temperatureDiv.innerHTML = `Temperature: ${data.current.temp_c}<sup>o</sup>C`;
            nameDiv.innerHTML = `Location: ${data.location.name}`;

        })
        .catch(err => console.error(err));


}





