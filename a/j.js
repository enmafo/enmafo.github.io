console.log("v1.0.0");

var cog = document.getElementById("cog");
var der = document.getElementById("der");
var sho = document.getElementsByClassName("sho");

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
		cog.addEventListener("transitionend", function() {
			cog.parentNode.removeChild(cog);
		}, false);
		cog.style.opacity = 0;
	}, 100);
};

document.body.addEventListener("click", function(e) {
	var lnk = e.target.getAttribute("data-link");

	switch (lnk) {
		case "utilidades":
			move(sho[0]);
			break;

		case "proyectos":
			move(sho[1]);
			break;

		case "contacto":
			move(sho[2]);
			break;

		case "tool-temporizador":
			window.open("https://htmlpreview.github.io/?https://github.com/enmafo/temporizador/blob/master/temporizador.html", "_blank");
			break;

		case "tool-temporizador-git":
			window.open("https://github.com/enmafo/temporizador", "_blank");
			break;

/* 		case "sys-ux-eventos":
			window.open("https://github.com/enmafo/UX-Eventos", "_blank");
			break; */

		case "sys-ux-rh":
			window.open("https://github.com/enmafo/UX-RecursosHumanos", "_blank");
			break;

		case "sys-ux-portales":
			window.open("https://github.com/enmafo/UX-Portales", "_blank");
			break;

		case "github":
			window.open("https://github.com/enmafo", "_blank");
			break;

		case "facebook":
			window.open("https://facebook.com/enmafo", "_blank");
			break;

		case "twitter":
			window.open("https://twitter.com/enmafo", "_blank");
			break;

		case "cerrar":
			move();
			break;
	};
});

