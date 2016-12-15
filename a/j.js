// variables
var cog = document.getElementById('cog');
var der = document.getElementById('der');
var sho = document.getElementsByClassName('sho');

// funciones
function ocultar() {
	for (var i = 0; i < sho.length; i++) {
		sho[i].style.visibility = "hidden";
	}
}

function mover(div) {
	if (der.style.left != "0%") {
		ocultar();
		div.style.visibility = "visible";
		der.style.left = "0%";
	} else {
		if (div) {
			der.style.left = "50%";
			setTimeout(function() {
				ocultar();
				div.style.visibility = "visible";
				der.style.left = "0%";
			}, 500);
		} else {
			der.style.left = "50%";
			setTimeout(function() {
				ocultar();
			}, 500);
		}
	}
}

// eventos
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
		case "utilidades":
			mover(sho[0]);
			break;

		case "proyectos":
			mover(sho[1]);
			break;

		case "contacto":
			mover(sho[2]);
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

		case "cerrar":
			mover();
			break;
	};
});

