var searchInput = document.getElementById("search-form");
var apiKey= "60779efd43f7b8c58d8938853d39d5e2";
var searchBtn = document.getElementById("search-btn");
var cityName = "";

console.log(searchInput);

searchBtn.addEventListener('click', function(event){
    event.preventDefault();
    var userInput = searchInput.value.toLowerCase();
    fetch("api.openweathermap.org/data/2.5/forecast?" + cityName + "&appid=" + apiKey + "&units=imperial" + userInput)
        .then(function(response) {
            return response.json();
    })
        .then(function(data) {
        console.log(data);
    })
})