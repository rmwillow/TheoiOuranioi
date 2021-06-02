const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".weatherDisplay .cities");
/*SUBSCRIBE HERE FOR API KEY: https://home.openweathermap.org/users/sign_up*/
const apiKey = "81cbd7d0addf7aa0b0d00ff1784d04b2";

form.addEventListener("submit", e => {
    e.preventDefault();
    let inputVal = input.value;

    //check if there's already a city
    const listItems = list.querySelectorAll(".weatherDisplay .city");
    const listItemsArray = Array.from(listItems);
    if (listItemsArray.length > 0) {
        const filteredArray = listItemsArray.filter(el => {
            let content = "";

            if (inputVal.includes(",")) {

                if (inputVal.split(",")[1].length > 2) {
                    inputVal = inputVal.split(",")[0];
                    content = el
                        .querySelector(".city-name span")
                        .textContent.toLowerCase();
                } else {
                    content = el.querySelector(".city-name").dataset.name.toLowerCase();
                }
            } else {

                content = el.querySelector(".city-name span").textContent.toLowerCase();
            }
            return content == inputVal.toLowerCase();
        });

        if (filteredArray.length > 0) {
            msg.textContent = `You already know the weather for ${
        filteredArray[0].querySelector(".city-name span").textContent
      } ...otherwise be more specific by providing the country code as well 😉`;
            form.reset();
            input.focus();
            return;
        }
    }

    //Api call
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const { main, name, sys, weather } = data;

            const li = document.createElement("li");
            li.classList.add("city");
            console.log(data)

            li.innerHTML = markup;
            list.appendChild(li);
        })
        .catch(() => {
            msg.textContent = "Please search for a valid city 😩";
        });

    msg.textContent = "";
    form.reset();
    input.focus();
});



//Make Visible
function makeVisible() {
    document.getElementById('city').style.visibility = 'visible';
    document.getElementById('getWeather').style.visibility = 'visible';
    document.getElementById('SearchVisibility').style.visibility = 'collapse';
}

//Getting Geo Location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else if (!(navigator.geolocation)) {
        document.getElementById('nointernet').style.visibility = "visible";
        document.getElementById('nointernet').innerHTML = "Kindly check if Location service is enabled in your device / browser. Alternatively, you can search for your city by hitting the button";
    }
}


function showPosition(position) {
    window.lat = position.coords.latitude;
    window.lon = position.coords.longitude;
    // window.alert("Location Acquired: lat:"+lat+" lng:"+lon);
    parseJson();
}