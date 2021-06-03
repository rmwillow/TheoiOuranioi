class Fetch {
    async getCurrent(input) {
        const myKey = "81cbd7d0addf7aa0b0d00ff1784d04b2";


        var post;

        // Call the API
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`).then(function(response) {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject(response);
            }
        }).then(function(data) {

            // Store the post data to a variable
            post = data;
            console.log(post, "post console");

            var lat = data.coord.lat;
            var lon = data.coord.lon;
            console.log(lat, lon, "latlong console");

            // Fetch another API
            return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${myKey}`);


        }).then(function(response) {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject(response);
            }
        }).then(function(userData) {
            console.log(userData, "data console");
        }).catch(function(error) {
            console.warn(error);
        });


    }


}