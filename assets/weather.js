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
                            // if (dayOneU < 7.0) {
                            //     console.log("the weather is green")
                            // } else {
                            //     console.log("the weather is red")

                            // }
                            //add color coding here to new element 

                            var dayOneD = data.daily[1].weather[0].description;
                            var dayOneI = data.daily[1].weather[0].icon;

                            //create array and add day one data to it 
                            var dayOneData = [];
                            dayOneData.push(dayOneH, dayOneT, dayOneW, dayOneU, dayOneD, dayOneI)
                            console.log(dayOneData);


                            var dayOneDate = document.getElementById('dayOneDate');
                            dayOneDate.innerHTML = dayOneEpoch;

                            // var dayOneEpoch = new Date();
                            // document.getElementById("card-date").innerHTML = dayOneEpoch.toLocaleString();


                            //displays the dayonedata
                            var dayOne = document.getElementById('dayOneWeather');
                            dayOne.innerHTML = dayOneData;


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