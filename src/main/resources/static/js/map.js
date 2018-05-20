/** Global namespace 'cl' for Coderslab applications */
var cl = cl || {};
/** Example namespace */
cl.ex = cl.ex || {};
/** UI element namespace */
cl.ex.gq = cl.ex.gq || {};

/**
 * Map Basic controller
 */
cl.ex.gq.map;
cl.ex.gq.center = {
	lat : 23.798752,
	lng : 90.413501
} //dhaka
cl.ex.gq.initZoom = 7;
cl.ex.gq.scrollwheel = true;
cl.ex.gq.fullscreenControl = false;
cl.ex.gq.streetViewControl = false;
cl.ex.gq.mapTypeControl = true;
cl.ex.gq.trafficLayer = new google.maps.TrafficLayer();
cl.ex.gq.labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
cl.ex.gq.labelIndex = 0;
cl.ex.gq.imageSourceUrl;
cl.ex.gq.siteRootUrl;
cl.ex.gq.distanceData;
cl.ex.gq.users;
cl.ex.gq.clickedMarker;
cl.ex.gq.clickedMarkerInfoWindow;

/**
 * Map Initializer
 */
cl.ex.gq.initMap = function() {
	cl.ex.gq.map = new google.maps.Map(document.getElementById('map'), {
		center : cl.ex.gq.center,
		scrollwheel : cl.ex.gq.scrollwheel,
		zoom : cl.ex.gq.initZoom,
		fullscreenControl : cl.ex.gq.fullscreenControl,
		streetViewControl : cl.ex.gq.streetViewControl,
		mapTypeControl : cl.ex.gq.mapTypeControl,
		disableDoubleClickZoom: true
	});

	cl.ex.gq.trafficLayer.setMap(cl.ex.gq.map);
	cl.ex.gq.siteRootUrl = document.getElementById("context-path").getAttribute("href");

	cl.ex.gq.map.addListener('mousemove', function(event) {
		document.getElementById('mouse-over-location').innerHTML = '( ' + event.latLng.lat() + ' , ' + event.latLng.lng() + ' )';
	});
	cl.ex.gq.map.addListener('dblclick', function(event) {
		cl.ex.gq.displayClickedMarker(event);
	});
}

/**
 * Query function
 */
cl.ex.gq.queryFunction = function() {
	var query = 'query{users{userId name mobile}}';
	var data = {
		'url' : cl.ex.gq.siteRootUrl + 'rest/users',
		'query' : query,
		'async' : false
	}
	cl.ex.gq.executeQuery(data);

//console.log(cl.ex.gq.users);
}

/**
 * Execute Query to get data from server
 */
cl.ex.gq.executeQuery = function(data) {
	$.ajax({
		contentType : "application/json",
		method : "POST",
		url : data.url,
		data : JSON.stringify({
			"query" : data.query
		}),
		async : data.async,
		success : function(response) {
			cl.ex.gq.users = response.data.users;
		}
	});
}

/**
 * Display marker into map by clicking right mouse button
 */
cl.ex.gq.displayClickedMarker = function(event) {
	if (cl.ex.gq.clickedMarker !== undefined) {
		cl.ex.gq.clickedMarker.setMap(null);
	}
	document.getElementById('mouse-click-location').innerHTML = '( ' + event.latLng.lat() + ' , ' + event.latLng.lng() + ' )';
	cl.ex.gq.clickedMarker = new google.maps.Marker({
		position : event.latLng,
		map : cl.ex.gq.map,
		title : event.latLng.lat() + ' , ' + event.latLng.lng()
	});
}