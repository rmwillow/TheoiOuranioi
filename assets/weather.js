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
                    // console.log(data);
                    weatherData = ['']
                    var lat = data.coord.lat;
                    var lon = data.coord.lon;
                    // console.log(lat, lon, "latlong console");
                    var date = data.dt;
                    var dateEpoched = new Date(date * 1000);
                    var temp = "Temperature: " + data.main.temp;
                    var desc = "Description: " + data.weather[0].description;
                    var hum = "Humidity: " + data.main.humidity;
                    var winds = "Wind Speed: " + data.wind.speed;
                    weatherData.push(dateEpoched, temp, desc, hum, winds)
                        // console.log(weatherData);
                    $.ajax({
                        //fetch data
                        url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=81cbd7d0addf7aa0b0d00ff1784d04b2` + '&units=imperial',
                        type: "GET",
                        dataType: "jsonp",
                        //store result in
                        success: function(data) {


                            fiveDay = data.daily.slice(0, 6);
                            // console.log(fiveDay);



                            fiveDay.forEach(function(daySet, index) {


                                // console.log(daySet)

                                fiveDateEpoch = new Date(daySet.dt * 1000);
                                // console.log(fiveDateEpoch, index);
                                var fiveDayTemp = "Temperature: " + daySet.temp.day,
                                    index;
                                // console.log(fiveDayTemp);


                                var fiveDayHumid = "Humidity: " + daySet.humidity,
                                    index;
                                // console.log(fiveDayHumid);

                                var fiveDayWind = "Wind Speed: " + daySet.wind_speed,
                                    index;
                                // console.log(fiveDayWind);

                                weatherSet = daySet.weather;
                                // console.log(weatherSet);

                                weatherSet.forEach(function(weatherDay, index) {
                                    console.log(weatherDay);
                                    var fiveDayDesc = "Description: " + weatherDay.description,
                                        index;
                                    var fiveDayIcon = "ICON: " + weatherDay.icon,
                                        index;
                                    // console.log(fiveDayDesc, fiveDayIcon);

                                    var fiveDayForcast = ['']

                                    fiveDayForcast.push(fiveDayTemp, fiveDayHumid, fiveDayWind, fiveDayDesc, fiveDayIcon);
                                    console.log(fiveDayForcast);

                                    (function() {
                                        var ul = document.createElement('ul');
                                        ul.setAttribute('id', 'proList');

                                        productList = fiveDayForcast;

                                        document.getElementById('renderList').appendChild(ul);
                                        productList.forEach(renderProductList);

                                        function renderProductList(element, index, arr) {
                                            var li = document.createElement('li');
                                            li.setAttribute('class', 'item');

                                            ul.appendChild(li);

                                            li.innerHTML = li.innerHTML + element;
                                        }
                                    })();

                                })


                            });



                        }









                        //for loop on five days

                        //each day data create tempplate of weather data speed, temp, humiduity ect
                        //create elements 






                    });
                }
            })
        }
    })
});