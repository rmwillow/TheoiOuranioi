$(document).ready(function() {
    $('#add-city').click(function() {
        var city = $("#searchCity").val();
        console.log(city);

        citySearch = [''];
        citySearch.push(city);
        console.log(citySearch);






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
                                console.log(fiveDayTemp);


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
                                    var fiveDayImage = weatherDay.icon,
                                        index;
                                    // img.src = 'http://openweathermap.org/img/wn/' + fiveDayImage + '.png';

                                    // fiveDayIcon = 'http://openweathermap.org/img/wn/' + fiveDayImage + '.png';
                                    // console.log(fiveDayIcon);


                                    var fiveDayIcon = `http://webpage.com/images/'${fiveDayImage, index}.png`,
                                        index;




                                    var fiveDayForcast = [''];

                                    fiveDayForcast.push(fiveDateEpoch, fiveDayTemp, fiveDayHumid, fiveDayWind, fiveDayDesc, fiveDayIcon);
                                    console.log(fiveDayForcast);

                                    localStorage.setItem(city, fiveDayForcast);


                                    (function() {
                                        var ul = document.createElement('ul');
                                        ul.setAttribute('id', 'forecastList');
                                        fiveForecast = fiveDayForcast;


                                        document.getElementById('renderForecastList').appendChild(ul);

                                        fiveForecast.forEach(renderProductList);
                                        // iconDay.forEach(renderProductList);


                                        function renderProductList(element, index, arr) {
                                            var li = document.createElement('li');
                                            li.setAttribute('class', 'item');


                                            ul.appendChild(li);

                                            li.innerHTML = li.innerHTML + element;
                                            document.getElementById("forecastList").style.backgroundColor = "blue";

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



        function renderTodos(city) {
            // Empties out the html
            $('#cityItem').empty();
            console.log(city);

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
            city.splice(toDoNumber, 1);

            // Update the cityItem on the page
            renderTodos(city);

            // Save the cityItem into localStorage
            // We need to use JSON.stringify to turn the city from an array into a string
            localStorage.setItem('cityNameList', JSON.stringify(city));
        });

        // render our cityItem on page load
        renderTodos(city);
    })
});