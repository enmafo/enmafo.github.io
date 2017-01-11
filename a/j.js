var cog = document.getElementById('cog');
var der = document.getElementById('der');
var sho = document.getElementsByClassName('sho');

function hide() {
	for (var i = 0; i < sho.length; i++) {
		sho[i].style.visibility = "hidden";
	}
}

function move(div) {
	if (der.style.left != "0%") {
		hide();
		div.style.visibility = "visible";
		der.style.left = "0%";
	} else {
		if (div) {
			der.style.left = "50%";
			setTimeout(function() {
				hide();
				div.style.visibility = "visible";
				der.style.left = "0%";
			}, 500);
		} else {
			der.style.left = "50%";
			setTimeout(function() {
				hide();
			}, 500);
		}
	}
}

window.onload = function() {
	setTimeout(function() {
		cog.addEventListener('transitionend', function() {
			cog.parentNode.removeChild(cog);
		}, false);
		cog.style.opacity = 0;
	}, 100);
};

document.body.addEventListener('click', function(e) {
	var lnk = e.target.getAttribute("data-link");

	switch (lnk) {
		case "utilities":
			move(sho[0]);
			break;

		case "projects":
			move(sho[1]);
			break;

		case "contact":
			move(sho[2]);
			break;

		case "object2table":
			window.open('https://github.com/enmafo/object2table', '_blank');
			break;

		case "github":
			window.open('https://github.com/enmafo', '_blank');
			break;

		case "facebook":
			window.open('https://facebook.com/enmafo', '_blank');
			break;

		case "twitter":
			window.open('https://twitter.com/enmafo', '_blank');
			break;

		case "close":
			move();
			break;
	};
});

