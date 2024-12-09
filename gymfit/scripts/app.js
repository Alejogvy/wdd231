// Weather Section
const lat = -0.1807; // Latitude of Quito
const lon = -78.4678; // Length of Quito
const apiKey = '19aab31523c8bf85425a78e7b6d5e063'; // Your API key

// Define URLs for current weather and three-day forecast
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

// Function to get and display the current weather and forecast
async function fetchWeather() {
    try {
        // Get current weather data
        const responseCurrent = await fetch(weatherUrl);
        const dataCurrent = await responseCurrent.json();
        
        // Show current weather
        document.getElementById('current-weather').innerHTML = `
            Temperature: ${dataCurrent.main.temp}°F<br>
            Condition: ${dataCurrent.weather[0].description}
        `;

        // Get the forecast for the next three days
        const responseForecast = await fetch(forecastUrl);
        const dataForecast = await responseForecast.json();

        // Filter and display the three-day forecast
        let forecastHTML = '<h3>3-Day Forecast</h3>';
        let dailyForecasts = [];
        
        // Group by day, taking the first forecast of each day
        dataForecast.list.forEach(forecast => {
            const date = new Date(forecast.dt * 1000); // Convert timestamp to date
            const day = date.toLocaleDateString();

            // If we have not yet added a forecast for this day, we add it
            if (!dailyForecasts.find(item => item.day === day)) {
                dailyForecasts.push({
                    day,
                    temp: forecast.main.temp,
                    description: forecast.weather[0].description
                });
            }
        });

        // Show three-day forecasts
        dailyForecasts.slice(0, 3).forEach(forecast => {
            forecastHTML += `
                <div>
                    <strong>${forecast.day}</strong><br>
                    Temp: ${forecast.temp}°F<br>
                    Condition: ${forecast.description}
                </div><br>
            `;
        });
        document.getElementById('forecast').innerHTML = forecastHTML;

    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('current-weather').innerHTML = 'Failed to load weather data.';
        document.getElementById('forecast').innerHTML = '';
    }
}

// Call weather function on page load
fetchWeather();

// Show available classes
const classes = [
    { name: 'Yoga', instructor: 'Ana', duration: '1 hour', intensity: 'Low' },
    { name: 'Pilates', instructor: 'Carlos', duration: '1 hour', intensity: 'Medium' },
    { name: 'HIIT', instructor: 'David', duration: '45 minutes', intensity: 'High' },
    { name: 'Zumba', instructor: 'Marta', duration: '1 hour', intensity: 'High' },
    { name: 'Boxing', instructor: 'Juan', duration: '1 hour', intensity: 'High' },
    { name: 'Karate', instructor: 'Pedro', duration: '1 hour', intensity: 'Medium' },
    { name: 'Cycling', instructor: 'Luis', duration: '45 minutes', intensity: 'Medium' },
    // Add more classes as needed
];

// Display classes available in the schedule
function showClasses() {
    const scheduleTable = document.getElementById('classSchedule');
    classes.forEach(classe => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${classe.name}</td>
            <td>Wednesday</td> <!-- Modify with actual day of the class -->
            <td>6:00 PM</td> <!-- Modify with actual time of the class -->
        `;
        scheduleTable.appendChild(tr);
    });
}

// Show class details when clicked
function showClassDetails(classe) {
    alert(`Instructor: ${classe.instructor}\nDuration: ${classe.duration}\nIntensity: ${classe.intensity}`);
}

// User registration function
document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const membership = document.getElementById('membership').value;
    const goals = document.getElementById('goals').value;

    // Save user data to localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ name, email, membership, goals });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration completed successfully');
});

// Call functions on page load
getWeather();
showClasses();

// Display copyright year and last modified date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

fetchMembers();
