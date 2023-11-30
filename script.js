const apiKey = 'c346cc717df6e98a0e443488fb7923c1';
const apiBaseUrl = 'https://api.openweathermap.org/data/2.5/forecast';

$(document).ready(function () {
    $('#search-btn').on('click', function () {
        const city = $('#city-input').val().trim();
        if (city !== '') {
            getWeatherData(city);
        }
    });

    $('#history-list').on('click', 'li', function () {
        const city = $(this).text();
        getWeatherData(city);
    });

    function getWeatherData(city) {
        const apiUrl = `${apiBaseUrl}?q=${city}&appid=${apiKey}`;
        
        // Make API call
        $.ajax({
            url: apiUrl,
            method: 'GET'
        }).then(function (response) {
            displayWeather(response);
            addToSearchHistory(city);
        });
    }

    // Function to display weather data
    function displayWeather(data) {
    }

    // Function to add a city to the search history
    function addToSearchHistory(city) {
    }
});
