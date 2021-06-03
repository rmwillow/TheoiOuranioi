$(document).ready(function() {
    $('#submit').click(function() {
        var city = $("#searchCity").val();
        //check field is not empty
        if (city != '') {

            $.ajax({
                //fetch data
                url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial' + '&APPID=81cbd7d0addf7aa0b0d00ff1784d04b2',
                type: "GET",
                dataType: "jsonp",
                //store result in
                success: function(data) {
                    console.log(data);
                    weatherData = ['']
                    var lat = data.coord.lat;
                    var lon = data.coord.lon;
                    console.log(lat, lon, "latlong console");
                    var temp = "Temperature: " + data.main.temp;
                    var desc = "Description: " + data.weather[0].description;
                    var hum = "Humidity: " + data.main.humidity;
                    var winds = "Wind Speed: " + data.wind.speed;
                    weatherData.push(temp, desc, hum, winds)
                    console.log(weatherData);
                    $.ajax({
                        //fetch data
                        url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=81cbd7d0addf7aa0b0d00ff1784d04b2` + '&units=imperial',
                        type: "GET",
                        dataType: "jsonp",
                        //store result in
                        success: function(data) {
                            console.log(data);
                            var day1 = ['']
                            var dayOneDate = data.daily[0].dt;
                            var dayOneDateEpoched = new Date(dayOneDate * 1000);

                            var dayOneTemp = "Temperature: " + data.daily[0].temp.day;
                            var dayOneDesc = "Description: " + data.daily[0].weather[0].description;
                            var dayOneHum = "Humidity: " + data.daily[0].humidity;
                            var dayOneSpeed = "Wind Speed: " + data.daily[0].wind_speed;
                            var dayOneIcon = data.daily[0].weather[0].icon;
                            day1.push(dayOneDateEpoched, dayOneTemp, dayOneDesc, dayOneHum, dayOneIcon, dayOneSpeed)
                            console.log("this is day one console: " + day1);

                        }
                    });
                }
            })
        }
    })
});


// } else {
//     $("#error").html("Field cannot be empty");
// }


// function todaysWeather(city) {
//     var city = $("#searchCity").val();
//     $.ajax({
//         //fetch data
//         url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${myKey}`,
//         type: "GET",
//         dataType: "jsonp",
//         //store result in
//         success: function(fiveD) {
//             console.log(fiveD.city);

//         }
//     });
//     console.log(fiveD);
// };
// var container = document.getElementById('container');
// input.appendChild(li);

// var weatherWidget = document.createElement('div');
// document.getElementById('div');

// weatherWidget.textContent = ""

// var listEl = document.createElement('ol');
// var li1 = document.createElement('li');

// document.getElementById('li')

// li1.textContent = city;

// body.appendChild(favoriteEl);
// favoriteEl.appendChild(listEl);
// listEl.appendChild(li1);



// // Get the item from LocalStorage
// city = localStorage.getItem(searchQuery);

// // Do your DOM manipulation magic
// var elementValue = $('#submit')
//     .find('tr#key_' + localStorageItem)
//     .children('td.two')
//     .text();

// console.log(elementValue);