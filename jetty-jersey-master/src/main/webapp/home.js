//js function for GET : get data from the server
function getServerData(url, success){
    $.ajax({
    	type: "GET",
        dataType: "json",
        url: url
    }).done(success);
}

//js function for POST : modify data which are already known
function postServerData(url, data, success){
	$.ajax({
		type: "POST",
		dataType: "json",
		url: url,
		data: data
	}).done(success);
}

//js function for PUT : add new data
function putServerData(url, data, success){
	$.ajax({
		type: "PUT",
		dataType: "json",
		url: url,
		data: data
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
		getServerData("ws/user/getuser",callDone);
		getServerData("ws/user/search",callDone);
	});
});
