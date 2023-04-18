var searchInput = document.getElementById("search-input");
const apiKey = "60779efd43f7b8c58d8938853d39d5e2";
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=";
const weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=";
var searchBtn = document.getElementById("search-btn");
var data = '';
var dateofday = dayjs().format("YYYY-MM-D");

loadCities();

console.log(searchInput);

//this allows for the screen to display the city's weather that the user inputed. 
searchBtn.addEventListener('click', function (event) {
    event.preventDefault();
    var userInput = searchInput.value.toLowerCase();
    if (userInput.length == 0) {
        return;
    }

    cities.push(userInput);
    saveCitiesToStorage(cities);
   
    fetch(weatherURL + userInput + "&appid=" + apiKey + "&units=imperial")
        .then(function (response) {
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

//this grabs the data from the api link and key
function setText5Days(data, index) {
    return 'Date: ' + data.list[index].dt_txt.substring(0, 10) +
        ' Temperature: ' + data.list[index].main.temp +
        ' Humidity: ' + data.list[index].main.humidity +
        ' Windspeed: ' + data.list[index].wind.speed;
}

//this stores the cities to localStorage
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


//this loads the cities from localStorage to the buttons
function loadCities() {
    var items = readCitiesFromStorage();
    console.log(items);

    var buttonList = document.querySelectorAll('.button');
    for (var i = 0; (i < buttonList.length && i < items.length); i++) {
        buttonList[i].innerHTML = items[i];
    }
}
