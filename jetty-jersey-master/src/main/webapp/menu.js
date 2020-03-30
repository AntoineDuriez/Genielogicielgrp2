//On importe les fonction depuis home.js
import { getServerData } from './home.js'; 
import { postServerData } from './home.js'; 
import { putServerData } from './home.js'; 
import { deleteServerData } from './home.js'; 
import { callDone } from './home.js'; 
import { afficherMap } from './map.js'; //On importe la fonction depuis map.js

window.onload = function() {    //Toutes les fonctions ci-dessous s'execute à chaque refresh
    $("#mainMap").append('<style type="text/css">div.content #mainMap{ height: 96.5%;width: 99vw;}</style> <div id="map0" style="height: 97.5%; width: 99vw;">');
    afficherMap(map0);
    getServerData("ws/map/getmap",result =>{
        var tab = new Array();
        for(var i = 0 ; i < Object.keys(result).length ; i++){
            tab[i] = result[i].name     //récupération de tous les noms de map, on suppose que c'est celle du user
        }
        var templateExample = _.template($('#templateMenu').html());
        var html = templateExample({
            "menu1": tab
        });
        console.log(html);
        /*Pour chaque nom, on crée un bouton dans la droplist
        * Pour l'instant non fonctionnel*/
        for(var i = 0 ; i < Object.keys(result).length ; i++){
            $("#navbar-item-1").append('<a class="dropdown-item" type="button" href="home.html">' + tab[i] + '</a>');
        }
    });

    getServerData("ws/user/getuser",result =>{
        var friendMap = new Array();    //destiné à contenir les maps des amis
        var friendName = new Array();   //destiné à contenir les noms des amis
        //on va simuler que result[0] est le current user
        for(var i = 0 ; i < Object.keys(result[0].friendList).length ; i++){
            friendName[i] = result[0].friendList[i].name  //Récupération du nom des amis
            for(var j = 0 ; j < Object.keys(result[0].friendList[i].personalMapList).length ; j++) {
                friendMap[j] = result[0].friendList[i].personalMapList[j].name //récupération des maps partagées
            }
        }
        var templateExample = _.template($('#templateAmi').html());
        var html = templateExample({
            "att1": friendName
        });
        console.log(friendMap);
        console.log(friendName)
        for(var i = 0 ; i < Object.keys(result).length ; i++) {
            /*Mise en place d'une card avec bouton selon les infos obtenues ci-dessus
            * Pour l'instant non fonctionnel*/
            for (var j = 0; j < Object.keys(result[0].friendList[i].personalMapList).length; j++) {
                $("#friend-card").append('<div class="card" style="width: 18rem;"> <div class="card-body"> <h5 class="card-title">' + friendMap[j] + '</h5> <p class="card-text">par ' + friendName[i] + '</p> <a href="#" class="btn btn-primary">Zieuter</a></div> </div>');
            }
        }
    });
};
function cancel(){ //vérification pour si on veut vraiment annuler l'action
    return confirm("Etes vous sur de vouloir annuler ?");
}
function newPlace(){
    if(document.getElementById('create')){ //la div create existe
        if (cancel() == false) {
            return;
        }
        var d = document.getElementById("mainMap");
        var d_nested = document.getElementById("map0");
        var throwawayNode = d.removeChild(d_nested);
        var de = document.getElementById("menu");
        var d_ne= document.getElementById("create");
        var throwaway = de.removeChild(d_ne);
        $("#mainMap").append('<style type="text/css">div.content #mainMap{ height: 96.5%;width: 99vw;}</style> <div id="map0" style="height: 97.5%; width: 99vw;">');
        afficherMap(map0);
    }else{ //là la div n'existe pas
        var d = document.getElementById("mainMap");
        var d_nested = document.getElementById("map0");
        var throwawayNode = d.removeChild(d_nested);
        $("#mainMap").append('<style type="text/css">div.content.mainMap{ height: 97.5%;width: 80vw;}</style><div id="map0" style="height: 97.5%; width: 80vw;float:left;"></div>');
        $("#menu").append('<div id="create"style="height: 97.5%; width: 20vw;margin-left: 80vw;overflow: scroll;"><form action="/ma-page-de-traitement" method="post"><div><label for="name">Name :</label><input type="text" id="name" name="user_name"></div><div><label for="descrip">Description :</label><textarea type="text" id="descrip" name="Description "></textarea></div><div><label for="category">Category :</label><input type="texte" id="category" name="category"></div><div><input type="checkbox" id="event" name="event"><label for="scales">Evènement</label></div><div id="eventOk"></div><div id="create"><button type="put" id="buttonCreatePlace">Créer le pointeur</button></div></form></div>');
        afficherMap("map0");
        
        $('input[type="checkbox"]').click(function(){
            if($(this).prop("checked") == true){
                $("#eventOk").append('<div id="debut"><label for="debut">Date de début :</label><input type="date" id="start" name="start"value="2018-07-22"min="2018-01-01" max="2030-12-31"></div><div id="fin"><label for="fin">Date de fin :</label><input type="date" id="end" name="end"value="2018-07-22"min="2018-01-01" max="2030-12-31"></div>');
            }
             else if($(this).prop("checked") == false){
                if(document.getElementById('debut')){ //on jette le calendrier
                    var de = document.getElementById("create");
                    var d_ne= document.getElementById("debut");
                    var throwaway = de.removeChild(d_ne);
                }
                if(document.getElementById('fin')){ //si la div existe
                    var de = document.getElementById("create");
                    var d_ne= document.getElementById("fin");
                    var throwaway = de.removeChild(d_ne);
                }
            }
            $("#buttonCreatePlace").click(function(){ //on ajoute un marker
                //alert("envoie ok !!!");
                $("#buttonModifyMap").click(function(){
                    putServerData("ws/marker/addmarker",function(){
                        alert("ok");
                        document.reload();
                    });
                    
                });
            });
        });
    }
}



//gestion des clicks sur la carte
mainMap.onclick = newPlace;   //click droit
mainMap.oncontextmenu = newPlace;   //click gauche
mainMap.dblclick = newPlace;   //double click
