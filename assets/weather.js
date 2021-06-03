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
                            console.log(fiveDay);


                            fiveDay.forEach(function(daySet, index) {
                                // console.log(daySet)

                                fiveDateEpoch = new Date(daySet.dt * 1000);
                                // console.log(fiveDateEpoch, index);
                                var fiveDayTemp = "Temperature: " + daySet.temp.day,
                                    index;
                                console.log(fiveDayTemp);


                                var fiveDayHumid = "Humidity: " + daySet.humidity,
                                    index;
                                console.log(fiveDayHumid);

                                var fiveDayWind = "Wind Speed: " + daySet.wind_speed,
                                    index;
                                console.log(fiveDayWind);




                                weatherSet = daySet.weather;
                                console.log(weatherSet);

                                weatherSet.forEach(function(weatherDay, index) {
                                    console.log(weatherDay);
                                    var fiveDayDesc = "Description: " + weatherDay.description,
                                        index;
                                    var fiveDayIcon = "ICON: " + weatherDay.icon,
                                        index;
                                    console.log(fiveDayDesc, fiveDayIcon);

                                })

                                // console.log(daySet.weather, index);
                                // console.log(weather.description, index);





                                // console.log(weatherDate);

                                // console.log(humidity, index);
                            });

                            // fiveDay.forEach(function(weather, index) {

                            //     weatherDate = weather.wind_speed;
                            //     console.log(weatherDate, index);
                            // });



                            //for loop on five days
                            //each day data create tempplate of weather data speed, temp, humiduity ect
                            //create elements 





                            // console.log("this is 7day query" + data.daily.weather);
                            // //day one array
                            // var day1 = ['']
                            // var dayOneDate = data.daily[0].dt;
                            // var dayOneDateEpoched = new Date(dayOneDate * 1000);
                            // var dayOneTemp = "Temperature: " + data.daily[0].temp.day;
                            // var dayOneDesc = "Description: " + data.daily[0].weather[0].description;
                            // var dayOneHum = "Humidity: " + data.daily[0].humidity;
                            // var dayOneSpeed = "Wind Speed: " + data.daily[0].wind_speed;
                            // var dayOneIcon = data.daily[0].weather[0].icon;
                            // day1.push(dayOneDateEpoched, dayOneTemp, dayOneDesc, dayOneHum, dayOneIcon, dayOneSpeed)
                            // console.log("this is day one console: " + day1);


                            // //day two array
                            // var day2 = ['']
                            // var dayTwoDate = data.daily[1].dt;
                            // var dayTwoDateEpoched = new Date(dayTwoDate * 1000);
                            // var dayTwoTemp = "Temperature: " + data.daily[1].temp.day;
                            // var dayTwoDesc = "Description: " + data.daily[1].weather[0].description;
                            // var dayTwoHum = "Humidity: " + data.daily[1].humidity;
                            // var dayTwoSpeed = "Wind Speed: " + data.daily[1].wind_speed;
                            // var dayTwoIcon = data.daily[1].weather[0].icon;
                            // day2.push(dayTwoDateEpoched, dayTwoTemp, dayTwoDesc, dayTwoHum, dayTwoSpeed, dayTwoIcon)
                            // console.log("this is day two console: " + day2);

                            // //day three array
                            // var day3 = ['']
                            // var dayThreeDate = data.daily[2].dt;
                            // var dayThreeDateEpoched = new Date(dayThreeDate * 1000);
                            // var dayThreeTemp = "Temperature: " + data.daily[2].temp.day;
                            // var dayThreeDesc = "Description: " + data.daily[2].weather[0].description;
                            // var dayThreeHum = "Humidity: " + data.daily[2].humidity;
                            // var dayThreeSpeed = "Wind Speed: " + data.daily[2].wind_speed;
                            // var dayThreeIcon = data.daily[2].weather[0].icon;
                            // day3.push(dayThreeDateEpoched, dayThreeTemp, dayThreeDesc, dayThreeHum, dayThreeSpeed, dayThreeIcon)
                            // console.log("this is day3 console: " + day3);

                            // //day 4 array
                            // var day4 = ['']
                            // var dayFourDate = data.daily[3].dt;
                            // var dayFourDateEpoched = new Date(dayFourDate * 1000);
                            // var dayFourTemp = "Temperature: " + data.daily[3].temp.day;
                            // var dayFourDesc = "Description: " + data.daily[3].weather[0].description;
                            // var dayFourHum = "Humidity: " + data.daily[3].humidity;
                            // var dayFourSpeed = "Wind Speed: " + data.daily[3].wind_speed;
                            // var dayFourIcon = data.daily[3].weather[0].icon;
                            // day4.push(dayFourDateEpoched, dayFourTemp, dayFourDesc, dayFourHum, dayFourSpeed, dayFourIcon)
                            // console.log("this is day4 console: " + day4);

                            // //day 5 array
                            // var day5 = ['']
                            // var dayFiveDate = data.daily[4].dt;
                            // var dayFiveDateEpoched = new Date(dayFiveDate * 1000);
                            // var dayFiveTemp = "Temperature: " + data.daily[4].temp.day;
                            // var dayFiveDesc = "Description: " + data.daily[4].weather[0].description;
                            // var dayFiveHum = "Humidity: " + data.daily[4].humidity;
                            // var dayFiveSpeed = "Wind Speed: " + data.daily[4].wind_speed;
                            // var dayFiveIcon = data.daily[4].weather[0].icon;
                            // day5.push(dayFiveDateEpoched, dayFiveTemp, dayFiveDesc, dayFiveHum, dayFiveSpeed, dayFiveIcon)
                            // console.log("this is day5 console: " + day5);

                        }
                    });
                }
            })
        }
    })
});