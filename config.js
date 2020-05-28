const { COPYRIGHT, FOOTER } = require('./config.json');

// Bottom of Site
document.getElementById("copyright").innerHTML = "©" + COPYRIGHT;
document.getElementById("footer").innerHTML = FOOTER;

// Site Banner
document.getElementById("banner").style.backgroundImage = "url('https://julian-network.com/images/background-cropped.png')";
