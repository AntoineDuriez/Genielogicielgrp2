import { getServerData } from './home.js';

function callDone(result){
    var templateMenu = _.template($('#templateMenu').html());
    var html = templateMenu({
        "menu1": result[0].name
    });
    $("#navbar-item-1").append(html);
}

window.onload = function() {
    getServerData("ws/map/getmap",result =>{
        var tab = new Array();
        for(var i = 0 ; i < Object.keys(result).length ; i++){
            tab[i] = result[i].name
        }
        var templateExample = _.template($('#templateMenu').html());
        var html = templateExample({
            "menu1": tab
        });
        console.log(tab);
        $("#navbar-item-1").append(html);
    });
};