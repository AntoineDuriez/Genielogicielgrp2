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

	$("#result").append(html);
}

$(function(){
	$("#button").click(function(){
		deleteServerData("ws/map/deletemap/42",callDone);
		getServerData("ws/map/getmap",callDone);
		postServerData("ws/map/modifymap/oui",callDone);
		putServerData("ws/user/addfriend/oui",callDone);
		
	});
});
