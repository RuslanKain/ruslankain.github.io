// Get the current time in Kingston, Ontario
var date = new Date();
var time = date.getHours();

// Set the header background based on the time
if (time >= 20 || time < 6) {
document.querySelector("header").style.background = "#000 url('/wp-content/themes/an-theme/images/night.jpg') no-repeat center center / cover";
} else if (time >= 6 && time < 8) {
document.querySelector("header").style.background = "#d3c7b3 url('/wp-content/themes/an-theme/images/dawn.jpg') no-repeat center center / cover";
} else if (time >= 8 && time < 20) {
document.querySelector("header").style.background = "#f5f5f5 url('/wp-content/themes/an-theme/images/day.jpg') no-repeat center center / cover";
} else if (time >= 16 && time < 20) {
document.querySelector("header").style.background = "#5f5f5f url('/wp-content/themes/an-theme/images/sunset.jpg') no-repeat center center / cover";
}