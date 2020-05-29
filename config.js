var config = require('settings.json');

// Bottom of Site
document.getElementById("footer").innerHTML = config.siteBottom.footer;
document.getElementById("copyright").innerHTML = "©" + config.siteBottom.copyright;

// Site Banner
//document.getElementById("banner").style.backgroundImage = "url('https://julian-network.com/images/background-cropped.png')";
