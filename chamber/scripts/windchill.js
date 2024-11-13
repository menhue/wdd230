// windchill.js

document.addEventListener("DOMContentLoaded", () => {
    const tempElement = document.getElementById("temperature");
    const speedElement = document.getElementById("windspeed");
    const windChillElement = document.getElementById("windchill");

    const temperature = parseFloat(tempElement.innerText);
    const windSpeed = parseFloat(speedElement.innerText);

    function calculateWindChill(temp, speed) {
        return 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
    }

    if (temperature <= 50 && windSpeed > 3.0) {
        const windChill = calculateWindChill(temperature, windSpeed).toFixed(2);
        windChillElement.innerText = `${windChill} °F`;
    } else {
        windChillElement.innerText = "N/A";
    }
});
