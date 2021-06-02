class Fetch {
    async getCurrent(input) {
        const myKey = "81cbd7d0addf7aa0b0d00ff1784d04b2";


        //make request to url

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
        );

        const data = await response.json();

        console.log(data);

        return data;
    }
}