// Get the current date
let currentDate = new Date();
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1; // Months are zero-based (0 = January)
let year = currentDate.getFullYear();
let dateString = day + "/" + month + "/" + year;

// Update the content of the element with the ID "Date"
document.getElementById("Date").textContent = dateString;

// Get the current time
let date = new Date();
let hour = date.getHours();

// Define gradient background colors for different times of the day
let gradient;
if (hour >= 6 && hour < 12) {
    // Morning gradient
    gradient = 'linear-gradient(to right, #96ACBC, #80ACD4)';
} else if (hour >= 12 && hour < 18) {
    // Afternoon gradient
    gradient = 'linear-gradient(to right, #5ABBFF, #4197EE)';
} else {
    // Evening/Night gradient
    gradient = 'linear-gradient(to right, #6890A1, #25D69)';
}

// Apply the background gradient to the body
document.body.style.background = gradient;

// Api 
let URL = "https://api.open-meteo.com/v1/forecast?latitude=19.0728&longitude=72.8826&current=temperature_2m,is_day&hourly=temperature_2m,cloud_cover,visibility,wind_speed_80m,wind_speed_120m,wind_speed_180m&timezone=Asia%2FBangkok";

const getWeatherHourly = async () => {
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data); // Log the data to inspect its structure

    // Accessing weather data
    let hourlyWeather = data.hourly; // Accessing hourly weather data
    let temperatureArray = hourlyWeather.temperature_2m; // Array of temperatures
    let dates = hourlyWeather.time; // Array of date and time

    // Get the current date and time
    const now = new Date();
    const currentHour = now.getHours();

    // Find the index of the current hour in the dates array
    const index = dates.findIndex(dateTime => {
        const apiDateUTC = new Date(dateTime); // Convert the date from the API
        return apiDateUTC.getHours() === currentHour; // Check if the hour matches the current hour
    });

    // Check if temperature data for the current hour is available
    if (index !== -1) {
        // Get the temperature value at the same index
        const temperatureCurrentHour = temperatureArray[index];
        console.log(`Temperature for the current hour (${currentHour}:00) is: ${temperatureCurrentHour}`);

        // Update the weather display
        document.getElementById("weather").textContent = "Weather is at " + temperatureCurrentHour + "°C";
    } else {
        console.log(`Temperature data for the current hour (${currentHour}:00) is not available.`);
    }
}

// Call the function to fetch weather data hourly
getWeatherHourly(); // Fetch weather data immediately
setInterval(getWeatherHourly, 3600000); // Fetch data every hour (3600000 milliseconds = 1 hour)

//For Wind

const getWindSpeedHourly = async()=>{
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data); // Log the data to inspect its structure

    // Accessing weather data
    let hourlyWeather = data.hourly; // Accessing hourly weather data
    let windArray = hourlyWeather.wind_speed_120m; // Array of temperatures
    let dates = hourlyWeather.time; // Array of date and time

    //Get current date or time
    const now=new Date();
    const currentHour=now.getHours();

    //Find the index of the current hour in the dates array
    const index = dates.findIndex(dateTime => {
        const apiDateUTC = new Date(dateTime); // Convert the date from the API
        return apiDateUTC.getHours() === currentHour; // Check if the hour matches the current hour
    });  

    // Check if Wind data for the current hour is available
    if (index !== -1) {
        // Get the Wind value at the same index
        const windSpeedCurrentHour = windArray[index];
        console.log(`Wind for the current hour (${currentHour}:00) is: ${windSpeedCurrentHour}`);

        // Update the weather display
        document.getElementById("wind").textContent = "Wind speed is at " + windSpeedCurrentHour+ " m/s";
    } else {
        console.log(`Wind data for the current hour (${currentHour}:00) is not available.`);
    }
}

getWindSpeedHourly(); // Fetch weather data immediately
setInterval(getWindSpeedHourly, 3600000); // Fetch data every hour (3600000 milliseconds = 1 hour)

//Visibility 

const getVisibilityHourly = async()=>{
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data); // Log the data to inspect its structure

    // Accessing weather data
    let hourlyWeather = data.hourly; // Accessing hourly weather data
    let visibleArray = hourlyWeather.visibility; // Array of temperatures
    let dates = hourlyWeather.time; // Array of date and time

    //Get current date or time
    const now=new Date();
    const currentHour=now.getHours();

    //Find the index of the current hour in the dates array
    const index = dates.findIndex(dateTime => {
        const apiDateUTC = new Date(dateTime); // Convert the date from the API
        return apiDateUTC.getHours() === currentHour; // Check if the hour matches the current hour
    });  

    // Check if Wind data for the current hour is available
    if (index !== -1) {
        // Get the Wind value at the same index
        const visibilityCurrentHour = visibleArray[index];
        console.log(`Visibility for the current hour (${currentHour}:00) is: ${visibilityCurrentHour}`);

        // Update the weather display
        document.getElementById("visiblity").textContent = "Visibility is at " + visibilityCurrentHour+ " m";
    } else {
        console.log(`Visibility for the current hour (${currentHour}:00) is not available.`);
    }
}

getVisibilityHourly(); // Fetch weather data immediately
setInterval(getVisibilityHourly, 3600000); // Fetch data every hour (3600000 milliseconds = 1 hour)

//Cloud over

const getCloudOverHourly = async()=>{
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data); // Log the data to inspect its structure

    // Accessing weather data
    let hourlyWeather = data.hourly; // Accessing hourly weather data
    let cloudArray = hourlyWeather.cloud_cover; // Array of temperatures
    let dates = hourlyWeather.time; // Array of date and time

    //Get current date or time
    const now=new Date();
    const currentHour=now.getHours();

    //Find the index of the current hour in the dates array
    const index = dates.findIndex(dateTime => {
        const apiDateUTC = new Date(dateTime); // Convert the date from the API
        return apiDateUTC.getHours() === currentHour; // Check if the hour matches the current hour
    });  

    // Check if Wind data for the current hour is available
    if (index !== -1) {
        // Get the Wind value at the same index
        const cloudCurrentHour = cloudArray[index];
        console.log(`Cloud cover for the current hour (${currentHour}:00) is: ${cloudCurrentHour}`);

        // Update the weather display
        document.getElementById("cloud").textContent = "Cloud cover is at " + cloudCurrentHour+ " okta";
    } else {
        console.log(`Cloud cover for the current hour (${currentHour}:00) is not available.`);
    }
}

getCloudOverHourly(); // Fetch weather data immediately
setInterval(getCloudOverHourly, 3600000);
