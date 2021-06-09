$(document).ready(function() {
    $('#add-city').click(function() {
        var city = $("#searchCity").val();
        console.log(city)



        //array of all citys 
        // get and set like highscores project

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
                    // console.log(lat, lon, "latlong console");
                    // var date = data.dt;

                    var dateEpoched = new Date(data.dt * 1000);
                    console.log(dateEpoched);
                    var temp = "Temperature: " + data.main.temp;
                    var desc = "Description: " + data.weather[0].description;
                    var hum = "Humidity: " + data.main.humidity;
                    var winds = "Wind Speed: " + data.wind.speed;
                    var icons = data.weather[0].icon;
                    weatherData.push(temp, desc, hum, winds)
                        // console.log(weatherData);

                    var currentD = document.getElementById('currentWeather');
                    currentD.innerHTML = desc;

                    var currentDate = document.getElementById('currentDate');
                    currentDate.innerHTML = dateEpoched;


                    var currentT = document.getElementById('currentTemp');
                    currentT.innerHTML = temp;

                    var currentH = document.getElementById('currentHumidity');
                    currentH.innerHTML = hum;

                    var currentW = document.getElementById('currentWind');
                    currentW.innerHTML = winds;


                    var img = document.createElement('img');
                    img.src = 'http://openweathermap.org/img/wn/' + icons + '.png';
                    document.getElementById('currentIcon').appendChild(img);

                    // console.log(weatherData);
                    $.ajax({
                        //fetch data
                        url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=81cbd7d0addf7aa0b0d00ff1784d04b2` + '&units=imperial',
                        type: "GET",
                        dataType: "jsonp",
                        //store result in
                        success: function(data) {
                            console.log(data);

                            // dayOneEpoch = new Date(data.daily[1].dt * 1000);

                            var dayOneEpoch = new Date(data.daily[1].dt * 1000);


                            var dayOneH = "Humidity: " + data.daily[1].humidity;
                            var dayOneT = "Temperature: " + data.daily[1].temp.day;
                            var dayOneW = "Wind Speed: " + data.daily[1].wind_speed;
                            var dayOneUV = "UV Index: " + data.daily[1].uvi;

                            var dayOneUV = data.daily[4].uvi;
                            var dayOneU = parseInt(dayOneUV);
                            if (dayOneU < 5) {
                                document.getElementById("dayOneUv").style.color = "green";
                            } else {
                                document.getElementById("dayOneUv").style.color = "red";

                            }

                            var dayOneD = data.daily[1].weather[0].description;
                            var dayOneI = data.daily[1].weather[0].icon;




                            // displays humidity
                            var dayOneHum = document.getElementById('dayOneHumidity');
                            dayOneHum.innerHTML = dayOneH;

                            // displays wind
                            var dayOneWind = document.getElementById('dayOneWind');
                            dayOneWind.innerHTML = dayOneW;


                            // displays uv
                            var dayOneUv = document.getElementById('dayOneUv');
                            dayOneUv.innerHTML = "UV Index:" + dayOneU;

                            // displays date on top of card
                            var dayOneDate = document.getElementById('dayOneDate');
                            dayOneDate.innerHTML = dayOneEpoch;

                            //displays temp
                            var dayOneTemp = document.getElementById('dayOneTemp');
                            dayOneTemp.innerHTML = dayOneT;

                            //display icon
                            var dayOneImg = document.createElement('img');
                            dayOneImg.src = 'http://openweathermap.org/img/wn/' + dayOneI + '.png';
                            document.getElementById('dayOneIcon').appendChild(dayOneImg);


                            //displays the dayonedata
                            var dayOneWeather = document.getElementById('dayOneWeather');
                            dayOneWeather.innerHTML = dayOneD;



                            //day Two dataset
                            var dayTwoEpoch = new Date(data.daily[2].dt * 1000);


                            var dayTwoH = "Humidity: " + data.daily[2].humidity;
                            var dayTwoT = "Temperature: " + data.daily[2].temp.day;
                            var dayTwoW = "Wind Speed: " + data.daily[2].wind_speed;
                            var dayTwoUV = "UV Index: " + data.daily[2].uvi;

                            var dayTwoUV = data.daily[4].uvi;
                            var dayTwoU = parseInt(dayTwoUV);
                            if (dayTwoU < 5) {
                                document.getElementById("dayTwoUv").style.color = "green";
                            } else {
                                document.getElementById("dayTwoUv").style.color = "red";

                            }
                            //add color coding here to new element 

                            var dayTwoD = data.daily[2].weather[0].description;
                            var dayTwoI = data.daily[2].weather[0].icon;

                            // displays humidity
                            var dayTwoHum = document.getElementById('dayTwoHumidity');
                            dayTwoHum.innerHTML = dayTwoH;

                            // displays wind
                            var dayTwoWind = document.getElementById('dayTwoWind');
                            dayTwoWind.innerHTML = dayTwoW;


                            // displays uv
                            var dayTwoUv = document.getElementById('dayTwoUv');
                            dayTwoUv.innerHTML = "UV Index:" + dayTwoU;

                            // displays date on top of card
                            var dayTwoDate = document.getElementById('dayTwoDate');
                            dayTwoDate.innerHTML = dayTwoEpoch;

                            //displays temp
                            var dayTwoTemp = document.getElementById('dayTwoTemp');
                            dayTwoTemp.innerHTML = dayTwoT;

                            var dayTwoImg = document.createElement('img');
                            dayTwoImg.src = 'http://openweathermap.org/img/wn/' + dayTwoI + '.png';
                            document.getElementById('dayTwoIcon').appendChild(dayTwoImg);

                            //displays the dayTwodata
                            var dayTwoWeather = document.getElementById('dayTwoWeather');
                            dayTwoWeather.innerHTML = dayTwoD;

                            //day Three
                            var dayThreeEpoch = new Date(data.daily[3].dt * 1000);


                            var dayThreeH = "Humidity: " + data.daily[3].humidity;
                            var dayThreeT = "Temperature: " + data.daily[3].temp.day;
                            var dayThreeW = "Wind Speed: " + data.daily[3].wind_speed;
                            var dayThreeUV = "UV Index: " + data.daily[3].uvi;
                            var dayThreeUV = data.daily[4].uvi;
                            var dayThreeU = parseInt(dayThreeUV);
                            if (dayThreeU < 5) {
                                document.getElementById("dayThreeUv").style.color = "green";
                            } else {
                                document.getElementById("dayThreeUv").style.color = "red";
                            }
                            //add color coding here to new element 

                            var dayThreeD = data.daily[3].weather[0].description;
                            var dayThreeI = data.daily[3].weather[0].icon;

                            // displays humidity
                            var dayThreeHum = document.getElementById('dayThreeHumidity');
                            dayThreeHum.innerHTML = dayThreeH;

                            // displays wind
                            var dayThreeWind = document.getElementById('dayThreeWind');
                            dayThreeWind.innerHTML = dayThreeW;


                            // displays uv
                            var dayThreeUv = document.getElementById('dayThreeUv');
                            dayThreeUv.innerHTML = "UV Index:" + dayThreeU;



                            // displays date on top of card
                            var dayThreeDate = document.getElementById('dayThreeDate');
                            dayThreeDate.innerHTML = dayThreeEpoch;

                            //displays temp
                            var dayThreeTemp = document.getElementById('dayThreeTemp');
                            dayThreeTemp.innerHTML = dayThreeT;

                            //displays icon
                            var dayThreeImg = document.createElement('img');
                            dayThreeImg.src = 'http://openweathermap.org/img/wn/' + dayThreeI + '.png';
                            document.getElementById('dayThreeIcon').appendChild(dayThreeImg);



                            //displays the dayThreedata
                            var dayThreeWeather = document.getElementById('dayThreeWeather');
                            dayThreeWeather.innerHTML = dayThreeD;


                            //day Four
                            var dayFourEpoch = new Date(data.daily[4].dt * 1000);


                            var dayFourH = "Humidity: " + data.daily[4].humidity;
                            var dayFourT = "Temperature: " + data.daily[4].temp.day;
                            var dayFourW = "Wind Speed: " + data.daily[4].wind_speed;
                            var dayFourUV = data.daily[4].uvi;
                            var dayFourU = parseInt(dayFourUV);

                            if (dayFourU < 5) {
                                document.getElementById("dayFourUv").style.color = "green";

                            } else {
                                document.getElementById("dayFourUv").style.color = "red";

                            }
                            //add color coding here to new element 

                            var dayFourD = data.daily[4].weather[0].description;
                            var dayFourI = data.daily[4].weather[0].icon;

                            // displays humidity
                            var dayFourHum = document.getElementById('dayFourHumidity');
                            dayFourHum.innerHTML = dayFourH;

                            // displays wind
                            var dayFourWind = document.getElementById('dayFourWind');
                            dayFourWind.innerHTML = dayFourW;


                            // displays uv
                            var dayFourUv = document.getElementById('dayFourUv');
                            dayFourUv.innerHTML = "UV Index:" + dayFourU;

                            // displays date on top of card
                            var dayFourDate = document.getElementById('dayFourDate');
                            dayFourDate.innerHTML = dayFourEpoch;

                            //displays temp
                            var dayFourTemp = document.getElementById('dayFourTemp');
                            dayFourTemp.innerHTML = dayFourT;


                            //displays icon
                            var dayFourImg = document.createElement('img');
                            dayFourImg.src = 'http://openweathermap.org/img/wn/' + dayFourI + '.png';
                            document.getElementById('dayFourIcon').appendChild(dayFourImg);

                            //displays the dayFourdata
                            var dayFourWeather = document.getElementById('dayFourWeather');
                            dayFourWeather.innerHTML = dayFourD;

                            //day Five dataset
                            var dayFiveEpoch = new Date(data.daily[5].dt * 1000);


                            var dayFiveH = "Humidity: " + data.daily[5].humidity;
                            var dayFiveT = "Temperature: " + data.daily[5].temp.day;
                            var dayFiveW = "Wind Speed: " + data.daily[5].wind_speed;
                            var dayFiveUV = data.daily[5].uvi;
                            console.log(dayFiveUV);

                            var dayFiveU = parseInt(dayFiveUV);
                            console.log(dayFiveU);
                            if (dayFiveU < 5) {
                                document.getElementById("dayFiveUv").style.color = "green";
                            } else {
                                document.getElementById("dayFiveUv").style.color = "red";

                            }
                            //add color coding here to new element 

                            var dayFiveD = data.daily[5].weather[0].description;
                            var dayFiveI = data.daily[5].weather[0].icon;

                            // displays humidity
                            var dayFiveHum = document.getElementById('dayFiveHumidity');
                            dayFiveHum.innerHTML = dayFiveH;

                            // displays wind
                            var dayFiveWind = document.getElementById('dayFiveWind');
                            dayFiveWind.innerHTML = dayFiveW;


                            // displays uv
                            var dayFiveUv = document.getElementById('dayFiveUv');
                            dayFiveUv.innerHTML = "UV Index:" + dayFiveU;

                            // displays date on top of card
                            var dayFiveDate = document.getElementById('dayFiveDate');
                            dayFiveDate.innerHTML = dayFiveEpoch;

                            //displays temp
                            var dayFiveTemp = document.getElementById('dayFiveTemp');
                            dayFiveTemp.innerHTML = dayFiveT;

                            //displays icon
                            var dayFiveImg = document.createElement('img');
                            dayFiveImg.src = 'http://openweathermap.org/img/wn/' + dayFiveI + '.png';
                            document.getElementById('dayFiveIcon').appendChild(dayFiveImg);

                            //displays the dayFivedata
                            var dayFiveWeather = document.getElementById('dayFiveWeather');
                            dayFiveWeather.innerHTML = dayFiveD;
                        }

                    });
                }
            })
        }

        // function saveUn() {
        //     // var cityName = document.getElementById('searchCity').value;
        //     var btn = document.createElement("BUTTON");
        //     btn.innerHTML = city; // Insert text


        //     document.body.appendChild(btn);
        //     // document.getElementById("cityItem").appendChild(btn);


        //     // const cityList = [];
        //     // cityList.push(cityName)
        //     // console.log(cityList);
        // }
        // saveUn();

        // function saveUn() {
        //     var btn = document.createElement("button");

        //     btn.innerHTML = city; // Insert text



        //     document.getElementById("cityItem").appendChild(btn)
        //         // btn.addClass('btn btn-primary');
        //     document.getElementById("cityItem").className = "btn btn-primary";

        //     // // Clear previous data
        //     window.clearPreviousData();

        //     $('#cityItem').empty();

        //     // // Prevent the form submiting data
        //     window.preventDefault();
        // }

        // saveUn();
        // localStorage.setItem('searchCity', city);
        // localStorage.getItem('searchCity');
        // const cityNameSet = []
        // cityNameSet.push(city);
        // localStorage.setItem('add-city', cityNameSet);
        // console.log(cityNameSet);
        // for (let cityNameSet = 0; cityNameSet < 5; cityNameSet++) {
        //     // Runs 5 times, with values of step 0 through 4.
        //     console.log('Walking east one step');
        // }
        // function myFunction() {
        //     var x = document.createElement("INPUT");
        //     x.setAttribute("type", "button");
        //     x.setAttribute("value", "Click me");
        //     document.body.appendChild(x);
        //   }

        function renderCityName(city) {
            // Empties out the html
            $('#cityItem').empty();
            // console.log(city);

            // Creates a new variable 'cityItem' that will hold a "<button>" tag
            // Sets the `list` item's value as text of this <p> element
            var cityItem = $('<button>');
            cityItem.text("Weather For " + city);


            // Creates a button `toDoClose` with an attribute called `dataCity` and a unique `id`
            var toDoClose = $('<button>');
            toDoClose.attr('dataCity', city);

            // Gives the button a class called 'checkbox'
            cityItem.addClass('btn btn-primary');


            // Adds 'cityItem' to the To-Do city div
            $('#cityItem').append(cityItem);

        }

        $('#add-city').on('click', function(event) {
            event.preventDefault();

            // Get the to-do "value" from the textbox and store it as a variable using `.val()` and `.trim()`
            var cityTask = $('#add-city')
                .val()
                .trim();

            // // Add the new to-do to our local 'city' variable
            city.push(cityTask);

            // // Update the cityItem on the page
            renderCityName(city);

            // Save the cityItem into localStorage
            // We need to use JSON.stringify to turn the city from an array into a string
            localStorage.setItem('add-city', JSON.stringify(city));

            // Clear the textbox when done using `.val()`
            $('#add-city').val('');

            // // Clear previous data
            window.clearPreviousData();

            // // Prevent the form submiting data
            window.preventDefault();
            // });



        })
        renderCityName(city);
    })
});