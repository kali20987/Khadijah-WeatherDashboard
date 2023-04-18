var searchInput = document.getElementById("search-input");
const apiKey = "60779efd43f7b8c58d8938853d39d5e2";
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=";
const weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=";
var searchBtn = document.getElementById("search-btn");
var data = '';
var dateofday = dayjs().format("YYYY-MM-D");

loadCities();

console.log(searchInput);


searchBtn.addEventListener('click', function (event) {
//function clickEvent() {
    event.preventDefault();
    var userInput = searchInput.value.toLowerCase();
    if (userInput.length == 0) {
        return;
    }

    cities.push(userInput);
    saveCitiesToStorage(cities);

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



    //  fetch(weatherURL + "lat=" + lat + "&lon=" + lon + "&appid=" + apiKey +
    //     "&units=imperial") {
    fetch(weatherURL + userInput + "&appid=" + apiKey + "&units=imperial")
        .then(function (response) {
            //fetch(forecastURL + userInput + "&appid=" + apiKey + "&units=imperial")
            //    .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            document.getElementById("titlecard").innerHTML =
                data.name + ' ' + dateofday + ' Current Temperature: ' + data.main.temp +
                ' Humidity: ' + data.main.humidity + ' Windspeed: ' + data.wind.speed
        });



    fetch(forecastURL + userInput + "&appid=" + apiKey + "&units=imperial")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            document.getElementById("card1").innerHTML = setText5Days(data, 4);
            document.getElementById("card2").innerHTML = setText5Days(data, 12);
            document.getElementById("card3").innerHTML = setText5Days(data, 20);
            document.getElementById("card4").innerHTML = setText5Days(data, 28);
            document.getElementById("card5").innerHTML = setText5Days(data, 36);
        });

})

// function clickEvent() { 

// }

//document.getElementById('search-btn').addEventListener('click',clickEvent);

// let buttons = document.querySelectorAll('.button');
// buttons.forEach((item) => {
//     item.addEventListener('click', clickEvent)
// });

function setText5Days(data, index) {

    //date, temp, humidity, windspeed) {
    //return 'Date: ' + date.substring(0, 10) + ' Temperature: ' + temp + ' Humidity: ' +
    //    humidity + ' Windspeed: ' + windspeed;
    return 'Date: ' + data.list[index].dt_txt.substring(0, 10) +
        ' Temperature: ' + data.list[index].main.temp +
        ' Humidity: ' + data.list[index].main.humidity +
        ' Windspeed: ' + data.list[index].wind.speed;
}


var cities = readCitiesFromStorage();

function readCitiesFromStorage() {
    var cities = localStorage.getItem('Cities');
    if (cities) {
        cities = JSON.parse(cities);
    } else {
        cities = [];
    }
    return cities;
}

function saveCitiesToStorage(cities) {
    localStorage.setItem('Cities', JSON.stringify(cities));
}




function loadCities() {
    var items = readCitiesFromStorage();
    console.log(items);

    var buttonList = document.querySelectorAll('.button');
    for (var i = 0; (i < buttonList.length && i < items.length); i++) {
        buttonList[i].innerHTML = items[i];
    }
}
