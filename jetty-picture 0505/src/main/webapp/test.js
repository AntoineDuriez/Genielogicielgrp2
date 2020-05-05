

var tableOfFile = new Array();
function previewFile() {
    var preview = document.querySelector('img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
    /*reader.onloadend = function () {
        preview.src = reader.result;
    }*/
    //reader.readAsDataURL(file);
    var U = URL.createObjectURL(file);
    console.log(U);
    //document.getElementById("pic").setAttribute('src', U);
    return U;

}



$(".showing-button").click(function(){
    console.log(tableOfFile)
    for(var i = 0 ; i <Object.keys(tableOfFile).length ; i++){
        $("#imageGenerator").append('<img src="" width="200" style="display:none;" />');
    }
});
var urlTransporter;
$(".tester-button").click(function(){
    $('#modalMarker').modal('show');
    document.getElementById("finisher").onclick = function(){
        var preview = document.querySelector('img');
        var file    = document.querySelector('input[type=file]').files[0];
        var reader  = new FileReader();
        var U = URL.createObjectURL(file);
        urlTransporter = U;
        console.log(U);
        console.log(urlTransporter);
        $("#imageGenerator").append('<img src="'+U+'" width="200"/>');
    }
});
