var config = {
	title: "ButteryMC",
	message: "Hope you Enjoyed the Website!",
	copyright: "ButteryMC 2021"
};

var footer = document.getElementById("footer"); // Get footer element

if (footer !== null) { // Check if footer exists
	function fixedFooter() {
		//var footertop = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
		
		if (document.documentElement.clientHeight == document.documentElement.scrollHeight) {
			footer.setAttribute("fixed", true);
		} else {
			footer.setAttribute("fixed", false);
		}
	}
	
	window.onresize = fixedFooter;
	fixedFooter();
	
	var auto = document.createElement("P"); // Append message element
	auto.setAttribute("name", "message");
	footer.appendChild(auto);
	
	var auto = document.createElement("P"); // Append copyright element
	auto.setAttribute("name", "copyright");
	footer.appendChild(auto)
	
	footer.children["message"].innerHTML = config.message; // Set footer message
	footer.children["copyright"].innerHTML = "&copy;" + config.copyright; // Set footer copyright
}

var header = document.getElementById("header"); // Get header element

if (header !== null) { // Check if header exists
	var auto = document.createElement("UL"); // Append barlist element
	auto.setAttribute("name", "barlist");
	header.appendChild(auto);
	
	function addHeaderItem(href, name) {
		var item = document.createElement("LI");
		var anchor = document.createElement("A");
		anchor.innerHTML = name;
		anchor.href = href;
		if (window.location == href) {
			anchor.classList.add("active");
		}
		item.appendChild(anchor);
		header.children["barlist"].appendChild(item);
	}
	// Add header items
	addHeaderItem("https://butterymc.com/", "Home");
}

if (document.head.querySelectorAll("title").length == 0) {
	var title = document.createElement("TITLE"); // Add site title
	title.appendChild(document.createTextNode(config.title));
	document.head.appendChild(title);
}

// Custom styles
function updateStyles() {
	if (document.getElementById("customstyles")) { // Remove old custom styles
		document.getElementById("customstyles").remove();
	}
	
	var sheet = document.createElement("style");
	sheet.id = "customstyles";
	let styles = [];
	
	if (JSON.parse(localStorage.getItem("darkmode")) == true) {
		styles.push("body { background-color: #101010; color: #343434; }");
		styles.push(".container { background-color: #0c0c0c; color: #cbcbcb; box-shadow: 2px 3px 6px #121212; }");
	}
	
	sheet.innerHTML = styles.join(" ");
	document.head.appendChild(sheet);
}
updateStyles();

// Site Banner
// document.getElementById("banner").style.backgroundImage = "url('https://butterymc.com/images/background-cropped.png')";
