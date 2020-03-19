//js function for GET : get data from the server
function getServerData(url, success){
    $.ajax({
		type: "GET",
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
		type: "DELETE",
		dataType: "json",
		url: url
	}).done(success);
}

function callDone(result){
	var templateExample = _.template($('#templateExample').html());
	var html = templateExample({
		"attribute":JSON.stringify(result)
	});
	//test : ne prendre que la liste des marqueurs
	document.getElementById("result").innerHTML = JSON.stringify(result[0].markerList);
	//$("#result").append(html);
}

$(function(){
	$("#button1").click(function(){
		//deleteServerData("ws/marker/deletemarker",callDone);
		getServerData("ws/map/getmap",callDone);
		//postServerData("ws/map/modifymap",callDone);
		//putServerData("ws/marker/addmarker",callDone);
	});
});
