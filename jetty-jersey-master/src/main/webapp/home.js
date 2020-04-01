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
	//Boutons pour WS de map
//**********************************************************************************************************************
	$("#buttonGetMap").click(function(){
		getServerData("ws/map/getmap", result =>{
			for(var i = 0 ; i < Object.keys(result).length ; i++){	//get map
				var templateExample = _.template($('#templateGet').html());
				var html = templateExample({
					"attribute": JSON.stringify(result[i]),	//éléments de chaques map
				});
				$("#result").append(html);
			}
		});
	});
	$("#buttonAddMap").click(function(){
		putServerData("ws/map/addmap", result =>{
			var templateExample = _.template($('#templateExample').html());
			var html = templateExample({
				"attribute": result
			});
			$("#result").append(html);
		});
	});
	$("#buttonModifyMap").click(function(){
		postServerData("ws/map/modifymap",result =>{
			var templateExample = _.template($('#templateExample').html());
			var html = templateExample({
				"attribute": result
			});
			$("#result").append(html);
		});
	});
	$("#buttonDeleteMap").click(function(){
		deleteServerData("ws/map/deletemap",result =>{
			var templateExample = _.template($('#templateExample').html());
			var html = templateExample({
				"attribute": result
			});
			$("#result").append(html);
		});
	});
	$("#buttonShareMap").click(function(){
		postServerData("ws/map/sharemap",result =>{
			var templateExample = _.template($('#templateExample').html());
			var html = templateExample({
				"attribute": result
			});
			$("#result").append(html);
		});
	});
	$("#buttonGetMyMap").click(function(){
		postServerData("ws/map/getmymap",result =>{
			var templateExample = _.template($('#templateExample').html());
			var html = templateExample({
				"attribute": JSON.stringify(result)
			});
			$("#result").append(html);
		});
	});
//**********************************************************************************************************************
	//Bouton pour WS de user
//**********************************************************************************************************************
	$("#buttonGetUser").click(function(){
		getServerData("ws/user/getuser",result =>{
			for(var i = 0 ; i < Object.keys(result).length ; i++){
				var templateExample = _.template($('#templateGet').html());
				var html = templateExample({
					"attribute": JSON.stringify(result[i])
				});
				console.log(html)
				$("#result").append(html);
			}
		});
	});
	$("#buttonSearchFriend").click(function(){
		getServerData("ws/user/searchfriend",result =>{
			for(var i = 0 ; i < Object.keys(result).length ; i++){
				var templateExample = _.template($('#templateGet').html());
				var html = templateExample({
					"attribute": JSON.stringify(result[i])
				});
				$("#result").append(html);
			}
		});
	});
	$("#buttonAddFriend").click(function(){
		putServerData("ws/user/addfriend",result =>{
			var templateExample = _.template($('#templateExample').html());
			var html = templateExample({
				"attribute": JSON.stringify(result)
			});
			$("#result").append(html);
		});
	});
	$("#buttonDeleteFriend").click(function(){
		deleteServerData("ws/user/deletefriend",result =>{
			var templateExample = _.template($('#templateExample').html());
			var html = templateExample({
				"attribute": JSON.stringify(result)
			});
			$("#result").append(html);
		});
	});
//**********************************************************************************************************************
	//Bouton pour WS marker
//**********************************************************************************************************************
	$("#buttonGetMarker").click(function(){
		getServerData("ws/marker/getmarker",result =>{
			for(var i = 0 ; i < Object.keys(result).length ; i++){
				var templateExample = _.template($('#templateGet').html());
				var html = templateExample({
					"attribute": JSON.stringify(result[i])
				});
				$("#result").append(html);
			}
		});
	});
	$("#buttonAddMarker").click(function(){
		putServerData("ws/marker/addmarker",result =>{
			var templateExample = _.template($('#templateExample').html());
			var html = templateExample({
				"attribute": JSON.stringify(result)
			});
			$("#result").append(html);
		});
	});
	$("#buttonModifyMarker").click(function(){
		postServerData("ws/marker/modifymarker",result =>{
			var templateExample = _.template($('#templateExample').html());
			var html = templateExample({
				"attribute": JSON.stringify(result)
			});
			$("#result").append(html);
		});
	});
	$("#buttonDeleteMarker").click(function(){
		deleteServerData("ws/marker/deletemarker",result =>{
			var templateExample = _.template($('#templateExample').html());
			var html = templateExample({
				"attribute": JSON.stringify(result)
			});
			$("#result").append(html);
		});
	});
//**********************************************************************************************************************
	//Bouton pour WS category
//**********************************************************************************************************************
	$("#buttonGetCategory").click(function(){
		getServerData("ws/category/getcategory",result =>{
			for(var i = 0 ; i < Object.keys(result).length ; i++){
				var templateExample = _.template($('#templateGet').html());
				var html = templateExample({
					"attribute": JSON.stringify(result[i])
				});
				$("#result").append(html);
			}
		});
	});
//**********************************************************************************************************************
	//Bouton pour WS message
//**********************************************************************************************************************
	$("#buttonGetMessage").click(function(){
		getServerData("ws/message/getmessage",result =>{
			for(var i = 0 ; i < Object.keys(result).length ; i++){
				var templateExample = _.template($('#templateGet').html());
				var html = templateExample({
					"attribute": JSON.stringify(result[i])
				});
				$("#result").append(html);
			}
		});
	});
//*********************************************************************************************************************
	//Bouton pour WS picture
//**********************************************************************************************************************
	$("#buttonGetPicture").click(function(){
		getServerData("ws/picture/getpicture",result =>{
			for(var i = 0 ; i < Object.keys(result).length ; i++){
				var templateExample = _.template($('#templateGet').html());
				var html = templateExample({
					"attribute": JSON.stringify(result[i])
				});
				$("#result").append(html);
			}
		});
	});
//**********************************************************************************************************************
});
