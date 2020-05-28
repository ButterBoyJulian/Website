var config = {
  "COPYRIGHT": "Julian Network 2020",
  "FOOTER": "Hope you Enjoyed the Website!"
}

// Bottom of Site
document.getElementById("copyright").innerHTML = "©" + config.COPYRIGHT;
document.getElementById("footer").innerHTML = config.FOOTER;

// Site Banner
var img = document.createElement("img");
img.src = "images/background-cropped.png";
var src = document.getElementById("site-banner");
src.appendChild(img);
