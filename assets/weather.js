$(document).ready(function() {
    $('#add-city').click(function() {
        let city = $("#searchCity").val();
        console.log(city)


        //how to link that city !!!
        //create function to create new button with city name
        //that also stores that data in local storage 
        //create another function for when you click on button it makes another fetch using that city 

        // function myFunction() {
        //     let searchTerm = document.getElementById('searchCity').value;
        // Create a letiable to hold the value of rating

        // $('button').click(function() {
        //         let searchCity = $("#searchCity").val();

        //         //
        //         fetch(
        //                 `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=imperial&APPID=81cbd7d0addf7aa0b0d00ff1784d04b2`

        //                 // Add the rating parameter
        //                 // Remember to add your API key
        //             )
        //             .then(function(response) {
        //                 return response.json();
        //             })
        //             .then(function(response) {
        //                 console.log(response);
        //                 let responseContainerEl = document.querySelector('#cityContainer');
        //                 responseContainerEl.innerHTML = '';
        //                 let cityBtn = document.createElement('btn');
        //                 cityBtn.setAttribute('src', response.name);
        //                 responseContainerEl.appendChild(cityBtn);
        //             })
        //     })

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
                    // Create a letiable that will select the <div> where the GIF will be displayed
                    let responseContainerEl = document.getElementById('cityContainer');

                    let cityBtn = document.createElement("BUTTON");

                    cityBtn.setAttribute('src', cityName);
                    cityBtn.textContent = cityName;

                    localStorage.setItem('city', JSON.stringify(cityName));
                    let cityStor = localStorage.getItem('city');
                    console.log('typeof cityStor: ' + typeof cityStor);
                    console.log(cityStor);

                    cityBtn.className = "btn btn-secondary btn-lg btn-block"

                    // Append 'gifImg' to the <div>
                    responseContainerEl.appendChild(cityBtn);

                });

            document.getElementById("BUTTON").onclick = function() {
                location.href = assets / cities.js
            };
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


                        }


                    });

                }
            })

        }


        //     function renderCityName(city) {
        //         // Empties out the html
        //         $('#cityItem').empty();
        //         // console.log(city);
        //
        //         // Creates a new letiable 'cityItem' that will hold a "<button>" tag
        //         // Sets the `list` item's value as text of this <p> element
        //         let cityItem = $('<button>');
        //         cityItem.text("Weather For " + city);
        //
        //
        //         // Creates a button `toDoClose` with an attribute called `dataCity` and a unique `id`
        //         let toDoClose = $('<button>');
        //         toDoClose.attr('dataCity', city);
        //
        //         // Gives the button a class called 'checkbox'
        //         cityItem.addClass('btn btn-primary');
        //
        //
        //         // Adds 'cityItem' to the To-Do city div
        //         $('#cityItem').append(cityItem);
        //
        //     }
        //
        //     $('#add-city').on('click', function(event) {
        //         event.preventDefault();
        //
        //         // Get the to-do "value" from the textbox and store it as a letiable using `.val()` and `.trim()`
        //         let cityTask = $('#add-city')
        //             .val()
        //             .trim();
        //
        //         // // Add the new to-do to our local 'city' letiable
        //         city.push(cityTask);
        //
        //         // // Update the cityItem on the page
        //         renderCityName(city);
        //
        //         // Save the cityItem into localStorage
        //         // We need to use JSON.stringify to turn the city from an array into a string
        //         localStorage.setItem('add-city', JSON.stringify(city));
        //
        //         // Clear the textbox when done using `.val()`
        //         $('#add-city').val('');
        //
        //         // // Clear previous data
        //         window.clearPreviousData();
        //
        //         // // Prevent the form submiting data
        //         window.preventDefault();
        //         // });
        //
        //
        //
        //     })
        //     renderCityName(city);
    })

    // document.querySelector('.btn').addEventListener('click', function() {

    //     const message = (document.querySelector('.message').value);
    //     console.log(message);
    //     retrievedObject = [];

    //     console.log(retrievedObject);


    //     let savedCities = {
    //         name: document.getElementById('searchCity').value
    //     }

    //     retrievedObject.push(savedCities);
    //     console.log(savedCities);


    //     localStorage.getItem('searchCity');
    //     localStorage.setItem('cityMessage', JSON.stringify(savedCities));
    //     //    document.addEventListener('DOMContentLoaded', () => {})

    //     document.querySelector('.cityMessage').textContent = savedCities;

    // });
});




// forEach((message, value) => {




//     // localStorage.setItem('cityMessage', JSON.stringify(retrievedObject));

//     let storedCity = localStorage.getItem('cityMessage');
//     console.log(storedCity)

// })

// if (retrievedObject === null) {
//     retrievedObject = [];
// } else {
//     retrievedObject = JSON.parse(retrievedObject)
// }




// Retrieve the object from storage