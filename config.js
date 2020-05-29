var config = require('settings.json');

// Bottom of Site
document.getElementById("copyright").innerHTML = "©" + config.COPYRIGHT;
document.getElementById("footer").innerHTML = config.FOOTER;

// Site Banner
//document.getElementById("banner").style.backgroundImage = "url('https://julian-network.com/images/background-cropped.png')";
