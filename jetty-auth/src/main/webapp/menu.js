window.onload = function() {    //Toutes les fonctions ci-dessous s'execute à chaque refresh
    afficherMap(mainMap);
    getServerData("ws/impl/mapimpl/getmap",result =>{
        var tab = new Array();
        for(var i = 0 ; i < Object.keys(result).length ; i++){
            tab[i] = result[i].name     //récupération de tous les noms de map, on suppose que c'est celle du user
        }
        var templateExample = _.template($('#templateMenu').html());
        var html = templateExample({
            "menu1": tab
        });
        //console.log(html);
        /*Pour chaque nom, on crée un bouton dans la droplist
        * Pour l'instant non fonctionnel*/
        for(var i = 0 ; i < Object.keys(result).length ; i++){
            $("#navbar-item-1").append('<a class="dropdown-item" type="button" href="home.html">' + tab[i] + '</a>');
        }
    });
};

//vérification pour si on veut vraiment annuler l'action
function cancel(){ 
    return confirm("Etes vous sur de vouloir annuler ?");
}

// fonction pour la création du moddal création de marker
const toggleModal = () =>{
    document.querySelector('.myModal')
        .classList.toggle('myModal--hidden');
};
// checkbox evenemtn dans menu creation d'évènement 
$("input[type='checkbox']").click(function(){//qd on click sur la check box
    if($(this).prop("checked") == true){ // qd on click sur la checkbox si elle n'existe pas alors on la créé
        var date = new Date();
        var annee = date.getFullYear()+'-';
        var mois ="";
        var jour ="";
        var heure ="";
        if(date.getMonth()<9){
            var oui = date.getMonth()+1;
            mois+= '0' + oui;
        }else{
            mois+= date.getMonth()+1;
        }
        if(date.getDate()<9){
            jour+='-'+'0' + date.getDate()+'T';
        }else {
            jour+= '-'+ date.getDate()+'T';
        }
        if(date.getHours()<9){
            heure+='0' + date.Hours()+':';
        }else {
            heure+=date.getHours()+':';
        }
        if(date.getMinutes()<9){
            heure+='0' + date.getMinutes();
        }else {
            heure+= date.getMinutes();
        }
        //var heure = date.getHours() + ':' + date.getMinutes();
        var today = annee+mois+jour+heure;
        //console.log(today);
        $("#eventOk").append('<div id="debut"><label for="debut">Date de début :</label><input type="date" id="start" name="start" value="'+today+'" min="'+today+'"></div><div id="fin"><label for="fin">Date de fin :</label><input type="date" id="end" name="end"value="'+today+'"min="'+today+'"></div>');
    }else if($(this).prop("checked") == false){ //si la div existe
        var de = document.getElementById("eventOk");
        var d_ne= document.getElementById("fin");
        var throwaway = de.removeChild(d_ne);
        var d_nea= document.getElementById("debut");
        var throwaway = de.removeChild(d_nea);  
    }            
});

mainMap.addEventListener('submit', (event) => {
    putServerData("ws/impl/markerimpl/addmarker",result =>{
            $("#result").append(result);
            console.log(result);
        });
    event.preventDefault();
    toggleModal();
});
//gestion des clicks sur la carte
mainMap.addEventListener('click', toggleModal);   //click droit
mainMap.addEventListener('oncontextmenu7', toggleModal);   //click gauche
mainMap.addEventListener('dblclick', toggleModal);   //double click

