var searchInput = document.getElementById("search-input");
const apiKey = "60779efd43f7b8c58d8938853d39d5e2";
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=";
const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?";
var searchBtn = document.getElementById("search-btn");
var data = '';

console.log(searchInput);

showForecast();

searchBtn.addEventListener('click', function (event) {
    event.preventDefault();
    var userInput = searchInput.value.toLowerCase();

    // var lat = '';
    // var lon = '';
    //    fetch("https://api.openweathermap.org/data/2.5/forecast?"
    // fetch(forecastURL + userInput + "&appid=" + apiKey + "&units=imperial")
    //     .then(function (response) {
    //         return response.json();
    //     })
    //     .then(function (data) {
    //         console.log(data);
    //         lat = data.city.coord.lat;
    //         lon = data.city.coord.lon;
    //         console.log('lat = ' + lat);
    //         console.log('lon = ' + lon);
    //     })

    // await (lat!='');
    // await (lon!='');

    // fetch(weatherURL + "lat=" + lat + "&lon=" + lon + "&appid=" + apiKey +
    //    "&units=imperial")
    fetch(forecastURL + userInput + "&appid=" + apiKey + "&units=imperial")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });

})

function showForecast(){

}