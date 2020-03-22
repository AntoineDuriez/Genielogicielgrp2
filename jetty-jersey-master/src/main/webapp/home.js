//js function for GET : get data from the server
function getServerData(url, success){
    $.ajax({
        dataType: "json",
        url: url
    }).done(success);
}

//Recherche d'implémentation pour les ws
//js function for POST : modify data which are already known
function postServerData(url, success){
	$.ajax({
		type: "POST",
		dataType: "json",
		url: url,
	}).done(success);
}

//js function for PUT : add new data
function putServerData(url, success){
	$.ajax({
		type: "PUT",
		dataType: "json",
		url: url,
	}).done(success);
}

//js function for DELETE : delete data
function deleteServerData(url, success){
	$.ajax({
		method: "DELETE",
		dataType: "json",
		url: url
	}).done(success);
}

//code de base, à tester une fois les ws fini
function callDone(result){
	var templateExample = _.template($('#templateExample').html());

	var html = templateExample({
		"attribute":JSON.stringify(result)
	});
	if (typeof toto !== 'undefined') {
		document.write(html);
		$("#result").append(html);
	}
}

$(function(){
	$("#button").click(function(){
		//deleteServerData("ws/map/deletemap/42",callDone);
		window.location.reload();
		//postServerData("ws/map/modifymap/oui",callDone);
		//putServerData("ws/user/addfriend/oui",callDone);
		
	});
});

//for(let pas =0; pas<4;pas++){
	//var base = 'maCarte';
	//var moi = base+pas;
	//document.write(moi);
	var carte0 = L.map( maCarte0 ).setView([48.8266, 2.382724], 18);
            
	// On charge les "tuiles"
	var tiliesStreet = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    	// Il est toujours bien de laisser le lien vers la source des données
    	attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
    	minZoom: 1,
    	maxZoom: 20
 	}).addTo(carte0);
 	
//}

var marker = L.marker([48.826695, 2.382724]).addTo(carte0);
//var popup = L.popup();
function onMapClick(e) {
    getServerData("ws/user/getuser",callDone);
}
carte.on('click', onMapClick);
            