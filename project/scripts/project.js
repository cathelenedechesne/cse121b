const apiKey = "9c0eda0b2da648d2249296a9af462a85";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const weatherConditions = ["Clouds", "Clear", "Rain", "Drizzle", "Mist"];

async function getCityTime(city) {
    const response = await fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=3CHI8B2IFTQG&format=json&by=position&lat=${city.coord.lat}&lng=${city.coord.lon}`);
    const timeData = await response.json();

    return timeData.formatted;
}

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        async function updateCityTime() {
            const cityTime = await getCityTime(data);

            // Extract hours and minutes from the formatted time
            const formattedTime = new Date(cityTime);
            const hours = formattedTime.getHours();
            const minutes = formattedTime.getMinutes();

            // Format the time as HH:mm
            const formattedTimeString = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

            document.querySelector(".time").innerHTML = formattedTimeString;
        }

        // Call the function initially
        updateCityTime();

        // Update the time every minute (adjust the interval as needed)
        setInterval(updateCityTime, 60000);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        // Use array method to check weather condition
        if (weatherConditions.includes(data.weather[0].main)) {
            // If the current weather condition is in the array, set the corresponding icon
            weatherIcon.src = `images/${data.weather[0].main.toLowerCase()}.png`;
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});