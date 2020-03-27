//js function for GET : get data from the server
export function getServerData(url, success){
    $.ajax({
		type: "GET",
        dataType: "json",
        url: url
    }).done(success);
}

//Recherche d'implémentation pour les ws
//js function for POST : modify data which are already known
export function postServerData(url, success){
	$.ajax({
		type: "POST",
		dataType: "json",
		url: url,
	}).done(success);
}

//js function for PUT : add new data
export function putServerData(url, success){
	$.ajax({
		type: "PUT",
		dataType: "json",
		url: url,
	}).done(success);
}

//js function for DELETE : delete data
export function deleteServerData(url, success){
	$.ajax({
		type: "DELETE",
		dataType: "json",
		url: url
	}).done(success);
}
/*
* Destiné à être supprimé : on écrira le callDone directement dans la fonction
* Reste tant que tout n'a pas été complété : pour l'instant seul les ws de map fonctionne
* */
function callDone(result){
	var templateExample = _.template($('#templateExample').html());

	var html = templateExample({
		"attribute1": result[0].access,
		"attribute2": result[1]
	});
	$("#result").append(html);
}

$(function(){
	//Bouton pour WS de map
	$("#buttonGetMap").click(function(){
		getServerData("ws/map/getmap", result =>{
			for(var i = 0 ; i < Object.keys(result).length ; i++){
				var templateExample = _.template($('#templateGetMap').html());
				var html = templateExample({
					"attribute1": result[i].name,
					"attribute2": JSON.stringify(result[i].markerList)
				});
				$("#result").append(html);
			}
		});
	});
	$("#buttonAddMap").click(function(){
		putServerData("ws/map/addmap", result =>{
			var templateExample = _.template($('#templateExample').html());
			var html = templateExample({
				"attribute1": result
			});
			$("#result").append(html);
		});
	});
	$("#buttonModifyMap").click(function(){
		postServerData("ws/map/modifymap",result =>{
			var templateExample = _.template($('#templateExample').html());
			var html = templateExample({
				"attribute1": result
			});
			$("#result").append(html);
		});
	});
	$("#buttonDeleteMap").click(function(){
		deleteServerData("ws/map/deletemap",result =>{
			var templateExample = _.template($('#templateExample').html());
			var html = templateExample({
				"attribute1": result
			});
			$("#result").append(html);
		});
	});
	$("#buttonShareMap").click(function(){
		postServerData("ws/map/sharemap",result =>{
			var templateExample = _.template($('#templateGetMap').html());
			var html = templateExample({
				"attribute1": result.name,
				"attribute2": result.description
			});
			$("#result").append(html);
		});
	});
	$("#buttonGetMyMap").click(function(){
		postServerData("ws/map/getmymap",result =>{
			var templateExample = _.template($('#templateExample').html());
			var html = templateExample({
				"attribute1": result.name
			});
			$("#result").append(html);
		});
	});

	//Bouton pour WS de user
	$("#buttonGetUser").click(function(){
		getServerData("ws/user/getuser",result =>{
			for(var i = 0 ; i < Object.keys(result).length ; i++){
				var templateExample = _.template($('#templateGetMap').html());
				var html = templateExample({
					"attribute1": result[i].name,
					"attribute2": JSON.stringify(result[i].friendList)
				});
				$("#result").append(html);
			}
		});
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

});
