// variables
var raiz	   = ""; // "" -> local; "/" -> remoto
var cargando   = $('#cargando');
var navegacion = $('#navegacion');
var contenido  = $('#contenido');

$.ajaxSetup ({
    cache: false
});

// funciones
function fadeLoad() {
	setTimeout(function() { cargando.fadeOut(200); }, 100);
}

function cambiar_idioma(idioma) {
	var cadenas = $('[data-lang]');
	for (var i = 0; i < cadenas.length; i++) {
		$(cadenas[i]).html($(cadenas[i]).attr('data-' + idioma));
	}
}

// eventos
$(document).ready(function() {
	navegacion.load(raiz + 't/nav.html', function() {
		fadeLoad();
	});

	cambiar_idioma("es");
});

$(document).on('click', '#navegacion a', function() {
	var link = $(this).attr('data-link');
	
	switch (link) {
		case "main":
			cargando.fadeIn(200, function() {
				contenido.load(raiz + 'index.html #contenido > *', function() {
					fadeLoad();
				});
			});
			break;

		case "curriculum":
			cargando.fadeIn(200, function() {
				contenido.load(raiz + 'cv/index.html #contenido > *', function() {
					fadeLoad();
				});
			});
			break;

		case "facebook":
			window.open('https://facebook.com/enmafo', '_blank');
			break;

		case "twitter":
			window.open('https://twitter.com/enmafo', '_blank');
			break;
	}
});
