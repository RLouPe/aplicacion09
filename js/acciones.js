$(document).ready(function(e) {
	document.addEventListener("deviceready", onDeviceReady, false);
	function onDeviceReady(){
		
		$('#geolocalizacion').on('tap',function(){
			navigator.geolocation.getCurrentPosition( function (position){
				$('#geolocalizacion').html('Latitude: ' + posicion.coords.latitude + '\n' +
							'Longitude: ' + posicion.coords.longitude + '\n' +
							'Altitud: ' + posicion.coords.altitude + '\n' +
							'Precision: ' + posicion.coords.acuracy + '\n' +
							'Precision de Altitud: ' + posicion.coords.altitudeAccuracy + '\n' +
							'Heading: ' + posicion.coords.heading + '\n' +
							'Velocidad: ' + posicion.coords.speed + '\n' +
							'Intervalo: ' + posicion.timestamp + '\n');
			}, $('#geolocalizacion').html('error en la localizacion'));
		});
	}
	//watchID se refiere a la aceleracion 'actual'
	//
	
	/*var watchID = null;
	
    document.addEventListener('deviceready', Dispositivo_Listo,false);
	

	//Cuando esta listo el dispositivo
//
	function Dispositivo_Listo() {
		Comienza();
		
	}
	
	//empieza la 'observacion' de la aceleracion
//
	function Comienza(){
		var opciones ={frequency: 2000};
		watchID = navigator.acceletometer.watchAcceleration(Correcto, Error, opciones);
		navigator.geolocation.getCurrentPosition(Localiza,ErrorLocalizacion);
	}
	
	function Detente(){
		if (watchID) {
			navigator.accelerometer.clearWatch(watchID);
			watchID = null;
		}
	}
	
	function Correcto(acceleration) {
		var element = document.getElementById('acelerometro');

		element.innerHTML = 'Aceleracion en X: ' + acceleration.x + '<br />' +
							'Aceleracion en Y: ' + acceleration.y + '<br />' +
							'Aceleracion en Z: ' + acceleration.z + '<br />' +
							'Intervalo: ' + acceleration.timestamp + '<br />';
	}
	function Error() {
		alert('error!');
	}
	
	//
	function Localiza(posicion) {
		var element = document.getElementById('geolocalizacion');
		element.innerHTML = 'Latitude: ' + posicion.coords.latitude + '<br />' +
							'Longitude: ' + posicion.coords.longitude + '<br />' +
							'Altitud: ' + posicion.coords.altitude + '<br />' +
							'Precision: ' + posicion.coords.acuracy + '<br />' +
							'Precision de Altitud: ' + posicion.coords.altitudeAccuracy + '<br />' +
							'Velocidad: ' + posicion.coords.speed + '<br />' +
							'Intervalo: ' + posicion.timestamp + '<br />';
							
	}
	
	function ErrorLocalizacion(error) {
		alert('codigo: '  + error.code + '\n' +
			'mensajeo: '  + error.message + '\n');
	}
	
	
});

	
	
//		$('#btnvibrar').on('tap', function () {
//			navigator.notification.vibrate(2000);
//		});
//	*/});