$(document).ready(function() {
    $('#add-city').click(function() {
        var city = $("#searchCity").val();
        // console.log(city);

        // citySearch = [''];
        // citySearch.push(city);
        // console.log(city, JSON.stringify);
        // document.getElementById("cityItem").innerHTML = citySearch;




        // document.getElementById("cityItem").innerHTML = localStorage.getItem(citySearch);


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
                    // var date = data.dt;

                    var dateEpoched = "date: " + new Date(data.dt * 1000);
                    console.log(dateEpoched);
                    var temp = "Temperature: " + data.main.temp;
                    var desc = "Description: " + data.weather[0].description;
                    var hum = "Humidity: " + data.main.humidity;
                    var winds = "Wind Speed: " + data.wind.speed;
                    weatherData.push(dateEpoched, temp, desc, hum, winds)
                        // console.log(weatherData);

                    // var currentDayDate = document.getElementById('currentDate');
                    // currentDayDate.innerHTML = dateEpoched;

                    var currentDay = document.getElementById('currentDay');
                    currentDay.innerHTML = weatherData;


                    // document.appendChild("cardText");
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

                            var dayOneEpoch = "date: " + new Date(data.daily[1].dt * 1000);

                            console.log(dayOneD);
                            var dayOneH = "Humidity: " + data.daily[1].humidity;
                            var dayOneT = "Temperature: " + data.daily[1].temp.day;
                            var dayOneW = "Wind Speed: " + data.daily[1].wind_speed;
                            var dayOneU = "UV Index: " + data.daily[1].uvi;
                            if (dayOneU < 7.0) {
                                console.log("the weather is green")
                            } else {
                                console.log("the weather is red")

                            }
                            // add color coding here to new element 

                            var dayOneD = data.daily[1].weather[0].description;
                            var dayOneI = data.daily[1].weather[0].icon;

                            // //create array and add day one data to it 
                            // var dayOneData = [];
                            // dayOneData.push(dayOneH, dayOneT, dayOneW, dayOneU, dayOneD, dayOneI)
                            // console.log(dayOneData);

                            // displays humidity
                            var dayOneHum = document.getElementById('dayOneHumidity');
                            dayOneHum.innerHTML = dayOneH;

                            // displays wind
                            var dayOneWind = document.getElementById('dayOneWind');
                            dayOneWind.innerHTML = dayOneW;


                            // displays uv
                            var dayOneUv = document.getElementById('dayOneUv');
                            dayOneUv.innerHTML = dayOneEpoch;

                            // displays date on top of card
                            var dayOneDate = document.getElementById('dayOneDate');
                            dayOneDate.innerHTML = dayOneEpoch;

                            //displays temp
                            var dayOneTemp = document.getElementById('dayOneTemp');
                            dayOneTemp.innerHTML = dayOneT;

                            //displays icon
                            var dayOneIcon = document.getElementById('dayOneIcon');
                            dayOneIcon.innerHTML = dayOneI;

                            //displays the dayonedata
                            var dayOneWeather = document.getElementById('dayOneWeather');
                            dayOneWeather.innerHTML = dayOneW;



                            //day Two dataset
                            var dayTwoEpoch = "date: " + new Date(data.daily[2].dt * 1000);

                            console.log(dayTwoD);
                            var dayTwoH = "Humidity: " + data.daily[2].humidity;
                            var dayTwoT = "Temperature: " + data.daily[2].temp.day;
                            var dayTwoW = "Wind Speed: " + data.daily[2].wind_speed;
                            var dayTwoU = "UV Index: " + data.daily[2].uvi;
                            if (dayTwoU < 7.0) {
                                console.log("the weather is green")
                            } else {
                                console.log("the weather is red")

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
                            dayTwoUv.innerHTML = dayTwoEpoch;

                            // displays date on top of card
                            var dayTwoDate = document.getElementById('dayTwoDate');
                            dayTwoDate.innerHTML = dayTwoEpoch;

                            //displays temp
                            var dayTwoTemp = document.getElementById('dayTwoTemp');
                            dayTwoTemp.innerHTML = dayTwoT;

                            //displays icon
                            var dayTwoIcon = document.getElementById('dayTwoIcon');
                            dayTwoIcon.innerHTML = dayTwoI;

                            //displays the dayTwodata
                            var dayTwoWeather = document.getElementById('dayTwoWeather');
                            dayTwoWeather.innerHTML = dayTwoW;

                            //day Three
                            var dayThreeEpoch = "date: " + new Date(data.daily[3].dt * 1000);

                            console.log(dayThreeD);
                            var dayThreeH = "Humidity: " + data.daily[3].humidity;
                            var dayThreeT = "Temperature: " + data.daily[3].temp.day;
                            var dayThreeW = "Wind Speed: " + data.daily[3].wind_speed;
                            var dayThreeU = "UV Index: " + data.daily[3].uvi;
                            if (dayThreeU < 7.0) {
                                console.log("the weather is green")
                            } else {
                                console.log("the weather is red")

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
                            dayThreeUv.innerHTML = dayThreeEpoch;

                            // displays date on top of card
                            var dayThreeDate = document.getElementById('dayThreeDate');
                            dayThreeDate.innerHTML = dayThreeEpoch;

                            //displays temp
                            var dayThreeTemp = document.getElementById('dayThreeTemp');
                            dayThreeTemp.innerHTML = dayThreeT;

                            //displays icon
                            var dayThreeIcon = document.getElementById('dayThreeIcon');
                            dayThreeIcon.innerHTML = dayThreeI;

                            //displays the dayThreedata
                            var dayThreeWeather = document.getElementById('dayThreeWeather');
                            dayThreeWeather.innerHTML = dayThreeW;


                            //day Four
                            var dayFourEpoch = "date: " + new Date(data.daily[4].dt * 1000);

                            console.log(dayFourD);
                            var dayFourH = "Humidity: " + data.daily[4].humidity;
                            var dayFourT = "Temperature: " + data.daily[4].temp.day;
                            var dayFourW = "Wind Speed: " + data.daily[4].wind_speed;
                            var dayFourU = "UV Index: " + data.daily[4].uvi;
                            if (dayFourU < 7.0) {
                                console.log("the weather is green")
                            } else {
                                console.log("the weather is red")

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
                            dayFourUv.innerHTML = dayFourEpoch;

                            // displays date on top of card
                            var dayFourDate = document.getElementById('dayFourDate');
                            dayFourDate.innerHTML = dayFourEpoch;

                            //displays temp
                            var dayFourTemp = document.getElementById('dayFourTemp');
                            dayFourTemp.innerHTML = dayFourT;

                            //displays icon
                            var dayFourIcon = document.getElementById('dayFourIcon');
                            dayFourIcon.innerHTML = dayFourI;

                            //displays the dayFourdata
                            var dayFourWeather = document.getElementById('dayFourWeather');
                            dayFourWeather.innerHTML = dayFourW;

                            //day Five dataset
                            var dayFiveEpoch = "date: " + new Date(data.daily[5].dt * 1000);

                            console.log(dayFiveD);
                            var dayFiveH = "Humidity: " + data.daily[5].humidity;
                            var dayFiveT = "Temperature: " + data.daily[5].temp.day;
                            var dayFiveW = "Wind Speed: " + data.daily[5].wind_speed;
                            var dayFiveU = "UV Index: " + data.daily[5].uvi;
                            if (dayFiveU < 7.0) {
                                console.log("the weather is green")
                            } else {
                                console.log("the weather is red")

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
                            dayFiveUv.innerHTML = dayFiveEpoch;

                            // displays date on top of card
                            var dayFiveDate = document.getElementById('dayFiveDate');
                            dayFiveDate.innerHTML = dayFiveEpoch;

                            //displays temp
                            var dayFiveTemp = document.getElementById('dayFiveTemp');
                            dayFiveTemp.innerHTML = dayFiveT;

                            //displays icon
                            var dayFiveIcon = document.getElementById('dayFiveIcon');
                            dayFiveIcon.innerHTML = dayFiveI;

                            //displays the dayFivedata
                            var dayFiveWeather = document.getElementById('dayFiveWeather');
                            dayFiveWeather.innerHTML = dayFiveW;




                            // var iconImage = document.getElementById("cityTest")
                            // iconImage.append(dayOneData);
                            //create list for each than diplsay and append each list fro each day

                            // console.log(dayOne);


                            // fiveDay = data.daily.slice(0, 6);
                            // // console.log(fiveDay);

                            // fiveDay.forEach(function(daySet, index) {
                            //     console.log(daySet)

                            //     fiveDateEpoch = new Date(daySet.dt * 1000);
                            // // console.log(fiveDateEpoch, index);
                            // var fiveDayTemp = "Temperature: " + daySet.temp.day,
                            //     index;
                            // console.log(fiveDayTemp);





                            // var fiveDayHumid = "Humidity: " + daySet.humidity,
                            //     index;
                            // // console.log(fiveDayHumid);

                            // var fiveDayWind = "Wind Speed: " + daySet.wind_speed,
                            //     index;
                            // // console.log(fiveDayWind);

                            // weatherSet = daySet.weather;
                            // // console.log(weatherSet);

                            // weatherSet.forEach(function(weatherDay, index) {
                            //     // console.log(weatherDay);
                            //     var fiveDayDesc = "Description: " + weatherDay.description,
                            //         index;
                            //     var fiveDayImage = weatherDay.icon,
                            //         index;
                            //     // img.src = 'http://openweathermap.org/img/wn/' + fiveDayImage + '.png';
                            //     // fiveDayIcon = display.innerHTML = `<img src="http://openweathermap.org/img/wn/${fiveDayImage}.png">`

                            //     fiveDayIcon = `<img src="http://openweathermap.org/img/wn/${fiveDayImage}.png">`
                            //     console.log(fiveDayIcon);
                            // localStorage.setItem(city, fiveDayForcast);
                            // var cardText = document.getElementById('cardsWeather');
                            // cardText.innerHTML = fiveDayForcast;
                            // document.appendChild(cardText);

                            // var cardText = document.getElementById("cardsWeather");
                            // cardText.appendChild(fiveDayForcast);




                            // let iconArray = [];
                            // for (i = 0; i < 7; i++) {
                            //     iconArray.push(fiveDayImage, index);
                            //     console.log(iconArray);
                            // }

                            // localStorage.setItem(city, fiveDayForcast);
                            // var cardText = document.getElementById('cardsWeather');
                            // cardText.innerHTML = fiveDayForcast;
                            // document.appendChild(cardText);

                            // var fiveDayIcon = `
                            // http: //webpage.com/images/'${fiveDayImage}.png`,
                            // //     index;
                            // console.log(fiveDayIcon);


                            // const img = document.querySelector('img');

                            // img.setAttribute('src', `http://webpage.com/images/'${fiveDayImage, index}.png`, index);

                            // var uv = daySet.uvi,
                            //     index;
                            // console.log(uv);



                            // if (uv < 7.0) {
                            //     console.log("the weather is green")
                            // } else {
                            //     // console.log("the weather is red")

                            // }
                            // //add color coding here to new element 

                            // var fiveDayForcast = [];

                            // fiveDayForcast.push(fiveDateEpoch, fiveDayTemp, fiveDayHumid, fiveDayWind, fiveDayDesc, uv, fiveDayIcon);
                            // console.log(fiveDayForcast[0]);


                            // const myJSON = JSON.stringify(fiveDayForcast);
                            // console.log(fiveDayForcast);



                            // var dayOneEpoch = (fiveDayForcast[0[0]]);
                            // console.log(dayOneEpoch);

                            // var dayOneTemp = (fiveDayForcast[1]);
                            // // console.log("Temperature: " + dayOneTemp);

                            // var dayOneHumid = (fiveDayForcast[2]);
                            // // console.log("humid: " + dayOneHumid);

                            // var dayOneWind = (fiveDayForcast[3]);
                            // // console.log("wind: " + dayOneWind);

                            // var dayOneDesc = (fiveDayForcast[4]);
                            // // console.log("wind: " + dayOneDesc);

                            // var dayOneUv = (fiveDayForcast[5]);
                            // // console.log("wind: " + dayOneUv);

                            // var dayOneIcon = (fiveDayForcast[6]);
                            // // console.log("wind: " + dayOneIcon);




                            // dayOneData = [];
                            // dayOneData.push(dayOneEpoch, dayOneTemp, dayOneHumid, dayOneWind, dayOneDesc, dayOneUv, dayOneIcon)
                            // console.log("this is the day one data set" + dayOneData);

                            // var iconImage = document.getElementById("cityTest")
                            // iconImage.append(dayOneData);



                            // for (i = 0; i < fiveDateEpoch.length; i++) {
                            //     for (j = 0; j < fiveDateEpoch[i].length; j++) {
                            //         console.log(fiveDateEpoch[i][j] + " is a " + fiveDateEpoch[i][j][1] + " year old " + fiveDateEpoch[i][j][2]);
                            //     }
                            // }



                            // var dayOne = document.getElementById('dayOne');
                            // var dayOne = fiveDayForcast[0];
                            // dayOne.innerHTML = dayOne;
                            // console.log("todaaaay" + dayOne);
                            // document.appendChild("cardText");

                            // var firstDayForecast = [];
                            // firstDayForecast.push(fiveDateEpoch[0], fiveDayTemp[0], fiveDayHumid[0], fiveDayWind[0], fiveDayDesc[0], fiveDayIcon[0]);
                            // console.log(fiveDateEpoch[0]);

                            // window.localStorage.setItem(city, myJSON);
                            // // console.log(myJSON);

                            // document.querySelector('#cityItem');
                            // document.appendChild('cityItem');
                            // // local.innerHTML = localCity;
                            // window.localStorage.setItem('cityName', JSON.stringify(city));
                            // console.log(localStorage);
                            // JSON.parse(window.localStorage.getItem('cityName'));
                            // for (x in localStorage) {
                            //     console.log(localStorage[x]);
                            // }


                            // console.log(localStorage);
                            // cityName = [];
                            // cityName.push(localStorage);
                            // var cityOut = document.getElementById('cityItem');
                            // // const localJSON = JSON.stringify(city,);
                            // cityOut.innerHTML = city;
                            // console.log(cityOut, cityName);

                            // const cityJSON = JSON.stringify(cityName);
                            // console.log(cityName);



                            // var cityOut = document.getElementById('cityItem');
                            // cityOut.innerHTML = cityName;

                            // console.log(cityName[0]);
                            // $('body').append(localStorage.getItem(localStorage.city(i)));

                            //get locoal storage and append it to new button element 


                            // console.log(local);




                            // cityFiveDayWeather = function(city) {
                            //     var cityFiveDayWeather = fiveDayForcast;
                            //     console.log(cityFiveDayWeather)
                            // }

                            // fiveDayForcast.forEach(function(dayWeather, index) {
                            //     console.log(dayWeather)

                            // }

                            //     // var forecast = document.getElementById('todaysWeather');
                            //     // forecast.innerHTML = dayWeather;




                            //     // localStorage.setItem(city, fiveDayForcast);
                            //     // dayOne = [''];
                            //     // dayOne.push(fiveDayForcast[0]);
                            //     // console.log("this is day one" + dayOne);
                            // });

                            // for (let i = 0; i < 6; i++) {
                            //     console.log(fiveDayForcast[0])
                            //     var cardText = document.getElementById('cardsWeather');
                            //     cardText.innerHTML = fiveDayForcast;
                            //     // document.appendChild("cardText");
                            //     console.log(fiveDayForcast);

                            // }




                            // (function() {
                            //     var ul = document.createElement('ul');
                            //     ul.setAttribute('id', 'forecastList');
                            //     fiveForecast = fiveDayForcast;


                            //     document.getElementById('renderForecastList').appendChild(ul);

                            //     fiveForecast.forEach(renderProductList);
                            //     // iconDay.forEach(renderProductList);


                            //     function renderProductList(element, index, arr) {

                            //         var li = document.createElement('li');
                            //         li.setAttribute('class', 'item');
                            //         ul.appendChild(li);

                            //         li.innerHTML = li.innerHTML + element;
                            //         document.getElementById("renderForecastList").style.backgroundColor = "blue";
                            //         document.getElementById("renderForecastList").style.listStyleType = "none";

                            //         document.getElementById("renderForecastList").style = "width: 18rem;";
                            //         document.getElementById("renderForecastList").style = "borderColor: blue;";

                            //         // document.getElementsByClassName("forecastList").style.backgroundColor = "red";

                            //         li.style.backgroundImage = "url('http://openweathermap.org/img/wn/' + fiveDayImage + '.png')";
                            //         ul.style.borderColor = "black";
                            //         li.style.listStyle = "none"

                            //         // document.getElementById("forecastList").style.listStyle = `http://webpage.com/images/'${fiveDayImage}.png`;

                            //     }
                            // })();




                        }

                        //for loop on five days

                        //each day data create tempplate of weather data speed, temp, humiduity ect
                        //create elements 


                    });
                }
            })
        }

        function renderTodos(city) {
            // Empties out the html
            $('#cityItem').empty();
            // console.log(city);

            // Creates a new variable 'toDoItem' that will hold a "<p>" tag
            // Sets the `list` item's value as text of this <p> element
            var toDoItem = $('<p>');
            toDoItem.text(city);

            // Creates a button `toDoClose` with an attribute called `data-to-do` and a unique `id`
            var toDoClose = $('<button>');
            toDoClose.attr('data-to-do', city);

            // Gives the button a class called 'checkbox'
            toDoClose.addClass('checkbox');

            // Adds a checkmark symbol as its text value
            toDoClose.text('X');

            // Adds the button to the `toDoItem`
            toDoItem = toDoItem.prepend(toDoClose);

            // Adds 'toDoItem' to the To-Do city div
            $('#cityItem').append(toDoItem);

        }

        $('#add-city').on('click', function(event) {
            event.preventDefault();

            // Get the to-do "value" from the textbox and store it as a variable using `.val()` and `.trim()`
            var toDoTask = $('#searchCity')
                .val()
                .trim();

            // Add the new to-do to our local 'city' variable
            city.push(toDoTask);

            // Update the cityItem on the page
            renderTodos(city);

            // Save the cityItem into localStorage
            // We need to use JSON.stringify to turn the city from an array into a string
            localStorage.setItem('city-item', JSON.stringify(city));

            // Clear the textbox when done using `.val()`
            $('#searchCity').val('');
        });

        $(document).on('click', '.checkbox', function() {
            // Get the `id` of the button from its data attribute and hold in a variable called 'toDoNumber'
            var toDoNumber = $(this).attr('data-to-do');

            // Delete the to-do with that `id` from our local `city` using `.splice()`
            city.splice(toDoNumber, city);

            // Update the cityItem on the page
            renderTodos(city);

            // Save the cityItem into localStorage
            // We need to use JSON.stringify to turn the city from an array into a string
            localStorage.setItem('cityItem', JSON.stringify(city));
        });

        // render our cityItem on page load
        renderTodos(city);
    })
});