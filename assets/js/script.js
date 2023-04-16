console.log("hey");

fetch("api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&60779efd43f7b8c58d8938853d39d5e2={API key}")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })