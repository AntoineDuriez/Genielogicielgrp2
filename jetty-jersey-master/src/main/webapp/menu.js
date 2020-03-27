import { getServerData } from './home.js'; //On importe la fonction depuis home.js

window.onload = function() {    //Toutes les fonctions ci-dessous s'execute à chaque refresh
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