const { COPYRIGHT, FOOTER } = require('./config.json');

// Bottom of Site
document.getElementById("copyright").innerHTML = "©" + COPYRIGHT;
document.getElementById("footer").innerHTML = FOOTER;

// Site Banner
document.getElementById("site-banner").style.backgroundImage = "url('images/background-cropped.png')";
