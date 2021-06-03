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
                    // weatherData = ['']
                    // data.

                }


            });

        } else {
            $("#error").html("Field cannot be empty");
        }


    });
});




// var container = document.getElementById('container');
// input.appendChild(li);

var weatherWidget = document.createElement('div');
document.getElementById('div');

weatherWidget.textContent = ""

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
// }