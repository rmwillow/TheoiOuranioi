$(document).ready(function() {
    $('#add-city').click(function() {
        let city = $("#searchCity").val();
        console.log(city)


        //how to link that city !!!
        //create function to create new button with city name
        //that also stores that data in local storage 
        //create another function for when you click on button it makes another fetch using that city 



        function myFunction() {

            // Create a letiable called `searchTerm` that will use `document.querySelector()` to target the `id` of the input
            // Use `.value` to capture the value of the input and store it in the letiable
            let searchTerm = document.querySelector('#searchCity').value;

            // Make a `fetch` request concatenating the `searchTerm` to the query URL
            // Remember to add your API key at the end
            fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=imperial&APPID=81cbd7d0addf7aa0b0d00ff1784d04b2`
                )
                .then(function(response) {
                    return response.json();
                })
                .then(function(response) {
                    console.log(response.name);
                    let cityName = response.name;
                    // Create a letiable that will select the <div> where the city will be displayed
                    let responseContainerEl = document.getElementById('cityContainer');

                    let cityBtn = document.createElement("BUTTON");

                    cityBtn.setAttribute('src', cityName);
                    cityBtn.textContent = cityName;

                    localStorage.setItem('city', JSON.stringify(cityName));
                    let cityStor = localStorage.getItem('city');
                    console.log('typeof cityStor: ' + typeof cityStor);
                    console.log(cityStor);

                    cityBtn.className = "btn btn-secondary btn-lg btn-block"
                        // cityBtn.setAttribute("href", "http://www.w3schools.com");
                        // cityBtn.value = city;


                    // Append 'gifImg' to the <div>
                    responseContainerEl.appendChild(cityBtn);





                });

        }
        myFunction();

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
                    // console.log(data);

                    let lat = data.coord.lat;
                    let lon = data.coord.lon;
                    // console.log(lat, lon, "latlong console");
                    // let date = data.dt;

                    function getCurrentDay() {

                        let dateEpoched = new Date(data.dt * 1000);
                        console.log(dateEpoched);
                        let temp = "Temperature: " + data.main.temp;
                        let desc = "Description: " + data.weather[0].description;
                        let hum = "Humidity: " + data.main.humidity;
                        let winds = "Wind Speed: " + data.wind.speed;
                        let icons = data.weather[0].icon;


                        let currentD = document.getElementById('currentWeather');
                        currentD.innerHTML = desc;

                        let currentDate = document.getElementById('currentDate');
                        currentDate.innerHTML = dateEpoched;


                        let currentT = document.getElementById('currentTemp');
                        currentT.innerHTML = temp;

                        let currentH = document.getElementById('currentHumidity');
                        currentH.innerHTML = hum;

                        let currentW = document.getElementById('currentWind');
                        currentW.innerHTML = winds;


                        let img = document.createElement('img');
                        img.src = 'http://openweathermap.org/img/wn/' + icons + '.png';
                        document.getElementById('currentIcon').appendChild(img);
                    }


                    getCurrentDay();
                    // console.log(weatherData);
                    $.ajax({
                        //fetch data
                        url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=81cbd7d0addf7aa0b0d00ff1784d04b2` + '&units=imperial',
                        type: "GET",
                        dataType: "jsonp",
                        //store result in
                        success: function(data) {
                            // console.log(data);



                            // dayOneEpoch = new Date(data.daily[1].dt * 1000);
                            function getDayOne() {

                                let dayOneEpoch = new Date(data.daily[1].dt * 1000);


                                let dayOneH = "Humidity: " + data.daily[1].humidity;
                                let dayOneT = "Temperature: " + data.daily[1].temp.day;
                                let dayOneW = "Wind Speed: " + data.daily[1].wind_speed;
                                let dayOneUV = "UV Index: " + data.daily[1].uvi;

                                // let dayOneUV = data.daily[4].uvi;
                                let dayOneU = parseInt(dayOneUV);
                                if (dayOneU < 5) {
                                    document.getElementById("dayOneUv").style.color = "green";
                                } else {
                                    document.getElementById("dayOneUv").style.color = "red";

                                }

                                let dayOneD = data.daily[1].weather[0].description;
                                let dayOneI = data.daily[1].weather[0].icon;




                                // displays humidity
                                let dayOneHum = document.getElementById('dayOneHumidity');
                                dayOneHum.innerHTML = dayOneH;

                                // displays wind
                                let dayOneWind = document.getElementById('dayOneWind');
                                dayOneWind.innerHTML = dayOneW;


                                // displays uv
                                let dayOneUv = document.getElementById('dayOneUv');
                                dayOneUv.innerHTML = "UV Index:" + dayOneU;

                                // displays date on top of card
                                let dayOneDate = document.getElementById('dayOneDate');
                                dayOneDate.innerHTML = dayOneEpoch;

                                //displays temp
                                let dayOneTemp = document.getElementById('dayOneTemp');
                                dayOneTemp.innerHTML = dayOneT;

                                //display icon
                                let dayOneImg = document.createElement('img');
                                dayOneImg.src = 'http://openweathermap.org/img/wn/' + dayOneI + '.png';
                                document.getElementById('dayOneIcon').appendChild(dayOneImg);


                                //displays the dayonedata
                                let dayOneWeather = document.getElementById('dayOneWeather');
                                dayOneWeather.innerHTML = dayOneD;
                            }



                            //day Two dataset
                            function getDayTwo() {
                                let dayTwoEpoch = new Date(data.daily[2].dt * 1000);


                                let dayTwoH = "Humidity: " + data.daily[2].humidity;
                                let dayTwoT = "Temperature: " + data.daily[2].temp.day;
                                let dayTwoW = "Wind Speed: " + data.daily[2].wind_speed;
                                let dayTwoUV = "UV Index: " + data.daily[2].uvi;

                                // let dayTwoUV = data.daily[4].uvi;
                                let dayTwoU = parseInt(dayTwoUV);
                                if (dayTwoU < 5) {
                                    document.getElementById("dayTwoUv").style.color = "green";
                                } else {
                                    document.getElementById("dayTwoUv").style.color = "red";

                                }
                                //add color coding here to new element 

                                let dayTwoD = data.daily[2].weather[0].description;
                                let dayTwoI = data.daily[2].weather[0].icon;

                                // displays humidity
                                let dayTwoHum = document.getElementById('dayTwoHumidity');
                                dayTwoHum.innerHTML = dayTwoH;

                                // displays wind
                                let dayTwoWind = document.getElementById('dayTwoWind');
                                dayTwoWind.innerHTML = dayTwoW;


                                // displays uv
                                let dayTwoUv = document.getElementById('dayTwoUv');
                                dayTwoUv.innerHTML = "UV Index:" + dayTwoU;

                                // displays date on top of card
                                let dayTwoDate = document.getElementById('dayTwoDate');
                                dayTwoDate.innerHTML = dayTwoEpoch;

                                //displays temp
                                let dayTwoTemp = document.getElementById('dayTwoTemp');
                                dayTwoTemp.innerHTML = dayTwoT;

                                let dayTwoImg = document.createElement('img');
                                dayTwoImg.src = 'http://openweathermap.org/img/wn/' + dayTwoI + '.png';
                                document.getElementById('dayTwoIcon').appendChild(dayTwoImg);

                                //displays the dayTwodata
                                let dayTwoWeather = document.getElementById('dayTwoWeather');
                                dayTwoWeather.innerHTML = dayTwoD;
                            }

                            //day Three
                            function getDayThree() {
                                let dayThreeEpoch = new Date(data.daily[3].dt * 1000);


                                let dayThreeH = "Humidity: " + data.daily[3].humidity;
                                let dayThreeT = "Temperature: " + data.daily[3].temp.day;
                                let dayThreeW = "Wind Speed: " + data.daily[3].wind_speed;
                                let dayThreeUV = "UV Index: " + data.daily[3].uvi;
                                let dayThreeU = parseInt(dayThreeUV);
                                if (dayThreeU < 5) {
                                    document.getElementById("dayThreeUv").style.color = "green";
                                } else {
                                    document.getElementById("dayThreeUv").style.color = "red";
                                }
                                //add color coding here to new element 

                                let dayThreeD = data.daily[3].weather[0].description;
                                let dayThreeI = data.daily[3].weather[0].icon;

                                // displays humidity
                                let dayThreeHum = document.getElementById('dayThreeHumidity');
                                dayThreeHum.innerHTML = dayThreeH;

                                // displays wind
                                let dayThreeWind = document.getElementById('dayThreeWind');
                                dayThreeWind.innerHTML = dayThreeW;


                                // displays uv
                                let dayThreeUv = document.getElementById('dayThreeUv');
                                dayThreeUv.innerHTML = "UV Index:" + dayThreeU;



                                // displays date on top of card
                                let dayThreeDate = document.getElementById('dayThreeDate');
                                dayThreeDate.innerHTML = dayThreeEpoch;

                                //displays temp
                                let dayThreeTemp = document.getElementById('dayThreeTemp');
                                dayThreeTemp.innerHTML = dayThreeT;

                                //displays icon
                                let dayThreeImg = document.createElement('img');
                                dayThreeImg.src = 'https://openweathermap.org/img/wn/' + dayThreeI + '.png';
                                document.getElementById('dayThreeIcon').appendChild(dayThreeImg);



                                //displays the dayThreedata
                                let dayThreeWeather = document.getElementById('dayThreeWeather');
                                dayThreeWeather.innerHTML = dayThreeD;
                            }


                            //day Four
                            function getDayFour() {
                                let dayFourEpoch = new Date(data.daily[4].dt * 1000);


                                let dayFourH = "Humidity: " + data.daily[4].humidity;
                                let dayFourT = "Temperature: " + data.daily[4].temp.day;
                                let dayFourW = "Wind Speed: " + data.daily[4].wind_speed;
                                let dayFourUV = data.daily[4].uvi;
                                let dayFourU = parseInt(dayFourUV);

                                if (dayFourU < 5) {
                                    document.getElementById("dayFourUv").style.color = "green";

                                } else {
                                    document.getElementById("dayFourUv").style.color = "red";

                                }
                                //add color coding here to new element 

                                let dayFourD = data.daily[4].weather[0].description;
                                let dayFourI = data.daily[4].weather[0].icon;

                                // displays humidity
                                let dayFourHum = document.getElementById('dayFourHumidity');
                                dayFourHum.innerHTML = dayFourH;

                                // displays wind
                                let dayFourWind = document.getElementById('dayFourWind');
                                dayFourWind.innerHTML = dayFourW;


                                // displays uv
                                let dayFourUv = document.getElementById('dayFourUv');
                                dayFourUv.innerHTML = "UV Index:" + dayFourU;

                                // displays date on top of card
                                let dayFourDate = document.getElementById('dayFourDate');
                                dayFourDate.innerHTML = dayFourEpoch;

                                //displays temp
                                let dayFourTemp = document.getElementById('dayFourTemp');
                                dayFourTemp.innerHTML = dayFourT;


                                //displays icon
                                let dayFourImg = document.createElement('img');
                                dayFourImg.src = 'http://openweathermap.org/img/wn/' + dayFourI + '.png';
                                document.getElementById('dayFourIcon').appendChild(dayFourImg);

                                //displays the dayFourdata
                                let dayFourWeather = document.getElementById('dayFourWeather');
                                dayFourWeather.innerHTML = dayFourD;
                            }

                            //day Five dataset
                            function getDayFive() {


                                let dayFiveEpoch = new Date(data.daily[5].dt * 1000);


                                let dayFiveH = "Humidity: " + data.daily[5].humidity;
                                let dayFiveT = "Temperature: " + data.daily[5].temp.day;
                                let dayFiveW = "Wind Speed: " + data.daily[5].wind_speed;
                                let dayFiveUV = data.daily[5].uvi;
                                console.log(dayFiveUV);

                                let dayFiveU = parseInt(dayFiveUV);
                                console.log(dayFiveU);
                                if (dayFiveU < 5) {
                                    document.getElementById("dayFiveUv").style.color = "green";
                                } else {
                                    document.getElementById("dayFiveUv").style.color = "red";

                                }
                                //add color coding here to new element 

                                let dayFiveD = data.daily[5].weather[0].description;
                                let dayFiveI = data.daily[5].weather[0].icon;

                                // displays humidity
                                let dayFiveHum = document.getElementById('dayFiveHumidity');
                                dayFiveHum.innerHTML = dayFiveH;

                                // displays wind
                                let dayFiveWind = document.getElementById('dayFiveWind');
                                dayFiveWind.innerHTML = dayFiveW;


                                // displays uv
                                let dayFiveUv = document.getElementById('dayFiveUv');
                                dayFiveUv.innerHTML = "UV Index:" + dayFiveU;

                                // displays date on top of card
                                let dayFiveDate = document.getElementById('dayFiveDate');
                                dayFiveDate.innerHTML = dayFiveEpoch;

                                //displays temp
                                let dayFiveTemp = document.getElementById('dayFiveTemp');
                                dayFiveTemp.innerHTML = dayFiveT;

                                //displays icon
                                let dayFiveImg = document.createElement('img');
                                dayFiveImg.src = 'http://openweathermap.org/img/wn/' + dayFiveI + '.png';
                                document.getElementById('dayFiveIcon').appendChild(dayFiveImg);

                                //displays the dayFivedata
                                let dayFiveWeather = document.getElementById('dayFiveWeather');
                                dayFiveWeather.innerHTML = dayFiveD;

                            }
                            //call functions heres

                            getDayOne();
                            getDayTwo();
                            getDayThree();
                            getDayFour();
                            getDayFive();
                            localStorage.setItem('weatherData', getDayOne);
                            document.getElementById('cityContainer').onclick = function() {
                                alert("button was clicked");
                                document.getElementById("clearData").innerHTML = "";
                            };



                        }


                    });

                }
            })

        }

    })
})