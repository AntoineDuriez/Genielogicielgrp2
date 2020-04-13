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
	//document.getElementById("result").innerHTML = JSON.stringify(result[0].markerList);
	$("#result").append(html);
}

$(function(){
	//Bouton pour WS de map
	$("#buttonGetMap").click(function(){
		getServerData("ws/map/getmap",callDone);
	});
	$("#buttonAddMap").click(function(){
		putServerData("ws/map/addmap",callDone);
	});
	$("#buttonModifyMap").click(function(){
		postServerData("ws/map/modifymap",callDone);
	});
	$("#buttonDeleteMap").click(function(){
		deleteServerData("ws/map/deletemap",callDone);
	});
	$("#buttonShareMap").click(function(){
		postServerData("ws/map/sharemap",callDone);
	});
	$("#buttonGetMyMap").click(function(){
		postServerData("ws/map/getmymap",callDone);
	});

	//Bouton pour WS de user
	$("#buttonGetUser").click(function(){
		getServerData("ws/user/getuser",callDone);
	});
	$("#buttonSearchFriend").click(function(){
		getServerData("ws/user/searchfriend",callDone);
	});
	$("#buttonAddFriend").click(function(){
		putServerData("ws/user/addfriend",callDone);
	});
	$("#buttonDeleteFriend").click(function(){
		deleteServerData("ws/user/deletefriend",callDone);
	});

	//Bouton pour WS marker
	$("#buttonGetMarker").click(function(){
		getServerData("ws/marker/getmarker",callDone);
	});
	$("#buttonAddMarker").click(function(){
		putServerData("ws/marker/addmarker",callDone);
	});
	$("#buttonModifyMarker").click(function(){
		postServerData("ws/marker/modifymarker",callDone);
	});
	$("#buttonDeleteMarker").click(function(){
		deleteServerData("ws/marker/deletemarker",callDone);
	});

	//Bouton pour WS category
	$("#buttonGetCategory").click(function(){
		getServerData("ws/category/getcategory",callDone);
	});

	//Bouton pour WS message
	$("#buttonGetMessage").click(function(){
		getServerData("ws/message/getmessage",callDone);
	});

	//Bouton pour WS picture
	$("#buttonGetPicture").click(function(){
		getServerData("ws/picture/getpicture",callDone);
	});

	$("#buttonTest").click(function(){
		getServerData("ws/impl/mapimpl/getmap",callDone);
	});
});
