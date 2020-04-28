window.onload = function() {    //Toutes les fonctions ci-dessous s'execute à chaque refresh

    /*let map = L.map("mainMap").setView([48.852969, 2.349903], 13)
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiYWt1cmF3biIsImEiOiJjazhpdzRldncwOHAwM2RvNWNkMjJyejFnIn0.bDaWCw4cIn2OL91W1nu6Wg'
    }).addTo(map);*/

   getServerData("ws/impl/mapimpl/getmap", result => {
        var tabName;
        var tabLat;
        var tabLon;
        var tabMarkerList = new Array();
        var map;
        if(Object.keys(result).length != 0){
            tabName = result[0].name;
            tabLat = result[0].latitudeDeparture;
            tabLon = result[0].longitudeDeparture;
            tabMarkerList = result[0].markerList;
            map = changeMyCurrentMap(tabLat, tabLon, tabMarkerList);
        }else{
            console.log("Pas de map, Veuillez en créer une");
        }
    });

    allMyMaps(); // récupère toutes les maps enregistrées dans la bdd et les affiches dans le drop-down menu de la navbar

    //Suppression de map
    $(".my-delete-map-button").click(function(){ //Suppression de map au clic
        getServerData("ws/impl/mapimpl/getmap", result => {
            $('#modalMapDeleter').modal('show');    //Affichage de la modal de suppression
            var tabName = new Array();
            var tabMap = new Array();
            var mapToDelete;
            var availableToDelete = false;
            document.getElementById("finisherMapDeleter").onclick = function() {
                for(var i = 0; i < Object.keys(result).length; i++) {
                    //On compare le nom de la map à delte avec le nom de toutes les maps de l'utilisateur
                    if(document.getElementById("mapToDelete").value == result[i].name){
                        mapToDelete = result[i].name;   //La map à delete existe
                        availableToDelete = true;   //active le droit d'appel à deleteServerData
                    }
                }
                if(availableToDelete){
                    //delete de la map sélectionnée
                    deleteServerData("ws/impl/mapimpl/deletemap/"+mapToDelete, result=>{
                        console.log(mapToDelete);
                    });
                }else{
                    //Ne correspond à aucunes map de la bdd, pas possible de delete
                    console.log("Delete is impossible : no data with this name");
                }
            }
        });
    });
    //Création des nouvelles maps
    $(".my-new-map-button").click(function(){ //Bouton pour appeler la modal de création de nouvelles map
        $('#modalMapBuilder').modal('show');    //Affichage de la modal
    });
    document.getElementById("finisherMap").onclick = function(){ //Quand on a finit de créer la map, on l'envoie vers le serveur
        var name = document.getElementById("nameMap").value; //Nom de la map à stocker sur la base de données
        var physicalAddress = document.getElementById("nameCityRef").value; //Nom de la ville d'ancrage de la map
        console.log(physicalAddress);
        geocoder = new L.Control.Geocoder.Nominatim();  //On géolocalise la ville d'angrage pour s'afficher dessus
        geocoder.geocode(physicalAddress, function(results) {
            latLng= new L.LatLng(results[0].center.lat, results[0].center.lng); //Position d'ancrage par latitude/longitude
            putServerData("ws/impl/mapimpl/addmap/"+name+"/"+latLng.lat+"/"+latLng.lng, result =>{ //Appel à PUT pour aller vers vers le addMap de MapRessourceImplStub.java
                console.log(result);
            });
        });
    };
};  //!!!!!!! SORTIE DU ONLOAD !!!!!!!
//Gestion de l'affichage des différentes maps de l'utilisateur
function changeMyCurrentMap(lat, lon,markerList){
    console.log(markerList);
    if(markerList == null){
        markerList = new Array();
    }
    $("#mainMap").remove(); //On remove le conteneur de map existant (sinon on ne peut pas le remplir)
    $("#mapGenerator").append('<div id="mainMap" style="height: 96.5%;\n' + //On remet un conteneur vide
        '\twidth: 99.5vw;\n' +
        '\tz-index: 5;"></div>');
    //On crée la map avec les coordonnées voulues
    var map = L.map("mainMap").setView([lat, lon], 13)
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiYWt1cmF3biIsImEiOiJjazhpdzRldncwOHAwM2RvNWNkMjJyejFnIn0.bDaWCw4cIn2OL91W1nu6Wg'
    }).addTo(map); //on l'ajoute dans le conteneur

    //barre de recherche d'adresse
    L.Control.geocoder().addTo(map);
    //Création de marker : les marqueurs sont crées pour la current map, celle qui occupe le conteneur à l'instant où ils sont créés (A IMPLANTER)
    var popup = L.popup();  //création d'un popup
    //fonction d'action au clic sur la map
    function onMapClick(e) {
        var container = L.DomUtil.create('div');
        var btn = L.DomUtil.create('button', '', container);
        btn.setAttribute('type', 'button');
        btn.classList.add('btn', 'marker_btn');
        btn.innerHTML = "Create marker here";   //Popup avec un bouton à l'endroit où on clique
        popup
            .setLatLng(e.latlng)
            .setContent(btn)
            .openOn(map);
        //Conteneur Json des attributs caractéristiques du marqueur
        var c = {
            "name": "",
            "description": "",
            "category": "",
            "picture": "",
            "latitude": 0,
            "longitude": 0,
            "messageList":[]
        }
        //Conteneur geoJson, pour faciliter l'implémentation géographique, contient le Json ci-dessus
        var geojsonFeature = {
            "type": "Feature",
            "properties":{
                "contentJson": c    //les attributs Json du marqueur
            },
            "geometry": {
                "type": "Point",
                "coordinates": [e.latlng.lat, e.latlng.lng]
            }
        }
        L.DomEvent.on(btn, 'click', () => { //lorsqu'on clique sur le bouton pour créer un marqueur
            $('#modalMarker').modal('show');    //affichage de la modal de création
            document.getElementById("finisher").onclick = function() {
                //Attribution des valeurs dans le Json
                c.name = document.getElementById("name").value;
                c.description = document.getElementById("descrip").value;
                c.category = document.getElementById("category").value;
                c.picture = document.getElementById("picture").value;   //pas encore fonctionnel A IMPLANTER
                c.latitude = e.latlng.lat;
                c.longitude = e.latlng.lng;
                var marker;     //création du marqueur
                //implantation du marqueur grâce à geoJson
                L.geoJson(geojsonFeature, {
                    pointToLayer: function(feature, latlng){
                        //si c'est un event (A IMPLANTER : FAIRE COMME POUR LA PARTIE MARKER MAIS AVEC LES DATES
                        if(document.getElementById("event").checked){
                            var dateControl = {start, end};
                            dateControl.start = document.getElementById("start").value;
                            dateControl.end = document.getElementById("end").value;
                            marker = createEvent(c, marker, dateControl);
                        }else{
                            //si c'est un marker (FINIR L'IMPLANTATION)
                            marker = createMarker(c, marker);
                        }
                        marker = marker.on("popupopen", onPopupOpen);   //action à réaliser sur le current marker
                        putServerData("ws/impl/markerimpl/addmarker/"+c.name+"/"+c.description+"/"+c.longitude+"/"+c.latitude+"/"+c.category, result =>{
                            markerList.push(marker);
                            console.log(markerList);
                        });
                        return marker;
                    }
                }).addTo(map);  //ajout à la current map
            }
            map.closePopup(); //tous les popups se ferment
        });

    }
    map.on('click', onMapClick); //execution de la fonction au clic

    //Fonction de gestion des markers
    function onPopupOpen() {
        var tempMarker = this;  //current marker
        //console.log(tempMarker);
        //var tempMarkerGeoJSON = this.toGeoJSON();
        //var lID = tempMarker._leaflet_id; // Getting Leaflet ID of this marker
        // To remove marker on click of delete
        $(".marker-delete-button").click(function () {  //Fonction de destruction du current marker
            deleteServerData("ws/impl/markerimpl/deletemarker/"+tempMarker.feature.properties.contentJson.name, result =>{
                map.removeLayer(tempMarker);
                markerList.splice(markerList.indexOf(tempMarker), 1);
                console.log(markerList);
            });
            console.log(markerList);
        });
        $(".message-shower-button").click(function(){   //Fonction d'affichages des messages du current marker
            console.log(tempMarker.feature.properties.contentJson.messageList);
            console.log((tempMarker.feature.properties.contentJson.messageList).length);
            //On crée le carousel d'affichage à chaque clic du bouton, il est delete à chaque fermeture : Permet d'éviter chevauchements et doublons
            $("#carouselMessageControls").append('<div class="carousel-inner" id="listOfMessage"></div>\n' +
                '                    <a class="carousel-control-prev" id="previous" href="#carouselMessageControls" role="button" data-slide="prev" style="color: #FA9A6C;">\n' +
                '                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>\n' +
                '                        <span class="sr-only">Previous</span>\n' +
                '                    </a>\n' +
                '                    <a class="carousel-control-next" id="next" href="#carouselMessageControls" role="button" data-slide="next" style="color: #FA9A6C;">\n' +
                '                        <span class="carousel-control-next-icon" aria-hidden="true"></span>\n' +
                '                        <span class="sr-only">Next</span>\n' +
                '                    </a>');
            //Premier message de la liste
            $("#listOfMessage").append('<div class="carousel-item active">'+ tempMarker.feature.properties.contentJson.messageList[0] +'</div>');
            for(var i = 1 ; i < Object.keys(tempMarker.feature.properties.contentJson.messageList).length ; i++){
                //tous les autres messages de la liste
                $("#listOfMessage").append('<div class="carousel-item">'+ tempMarker.feature.properties.contentJson.messageList[i] +'</div>');
            }
            //on delete tout le carousel lorsqu'on clique sur le bouton de fermeture
            document.getElementById("messageCloser").onclick = function(){
                $("#listOfMessage").remove();
                $("#previous").remove();
                $("#next").remove();
            }
        });
        $(".marker-modify-button").click(function(){    //Pour la modification de marker uniquement (IMPLANTER LA VERSION POUR LES EVENT)
            $('#modalModificationMarker').modal('show');    //affichage de la modal de modification
            document.getElementById("nameModif").setAttribute('value',tempMarker.feature.properties.contentJson.name);
            $('#descripModif').val(tempMarker.feature.properties.contentJson.description);
            document.getElementById("categoryModif").setAttribute('value',tempMarker.feature.properties.contentJson.category);
            //Pour le picture (A IMPLANTER)
            document.getElementById("pictureModif").setAttribute('value',tempMarker.feature.properties.contentJson.picture);
            //on supprime l'ancien marker et on en recrée un avec les nouvelles infos au même endroit
            var geojsonFeatureModifier = {
                "type": "Feature",
                "properties":{
                    "contentJson": tempMarker.feature.properties.contentJson
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [tempMarker.feature.properties.contentJson.latitude, tempMarker.feature.properties.contentJson.longitude]
                }
            }
            document.getElementById("finisherModif").onclick = function() { //bouton de fin de modification
                map.removeLayer(tempMarker); 
                deleteServerData("ws/impl/markerimpl/deletemarker/"+tempMarker.feature.properties.contentJson.name, result =>{
                    markerList.splice(markerList.indexOf(tempMarker), 1);
                    console.log(markerList);
                });
                //Attribution des nouvelles valeurs
                tempMarker.feature.properties.contentJson.name = document.getElementById("nameModif").value;
                tempMarker.feature.properties.contentJson.description = document.getElementById("descripModif").value;
                tempMarker.feature.properties.contentJson.category = document.getElementById("categoryModif").value;
                tempMarker.feature.properties.contentJson.picture = document.getElementById("pictureModif").value;
                //création du marker modifié
                L.geoJson(geojsonFeatureModifier, {
                    pointToLayer: function(feature, latlng){
                        tempMarker = createMarker(tempMarker.feature.properties.contentJson, tempMarker);
                        tempMarker = tempMarker.on("popupopen", onPopupOpen);
                        return tempMarker;
                    }
                }).addTo(map);  //Ajout à la map courante
                console.log(tempMarker);
                putServerData("ws/impl/markerimpl/addmarker/"+tempMarker.feature.properties.contentJson.name+"/"
                    +tempMarker.feature.properties.contentJson.description+"/"
                    +tempMarker.feature.properties.contentJson.longitude+"/"
                    +tempMarker.feature.properties.contentJson.latitude+"/"
                    +tempMarker.feature.properties.contentJson.category, result=>{
                    markerList.push(tempMarker);
                    console.log(markerList);
                });
            }
        });
        $(".message-adder-button").click(function () {  //Ajout de message sur un marker/event
            $('#modalMessageWriter').modal('show'); //Affichage de la modal de création de message
            //Même système qu'en haut, on considère l'ajout d'un message comme la modification du marker
            map.removeLayer(tempMarker);
            var geojsonFeatureMessager = {
                "type": "Feature",
                "properties":{
                    "contentJson": tempMarker.feature.properties.contentJson
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [tempMarker.feature.properties.contentJson.latitude, tempMarker.feature.properties.contentJson.longitude]
                }
            }
            document.getElementById("finisherMessage").onclick = function(){
                deleteServerData("ws/impl/markerimpl/deletemarker/"+tempMarker.feature.properties.contentJson.name, result=>{
                    markerList.splice(markerList.indexOf(tempMarker), 1);
                    console.log(markerList);
                })
                tempMarker.feature.properties.contentJson.messageList.push(document.getElementById("messager").value);  //Ajout du nouveau message à la liste
                //création du marker modifié
                L.geoJson(geojsonFeatureMessager, {
                    pointToLayer: function(feature, latlng){
                        tempMarker = createMarker(tempMarker.feature.properties.contentJson, tempMarker);
                        tempMarker = tempMarker.on("popupopen", onPopupOpen);
                        return tempMarker;
                    }
                }).addTo(map);  //Ajout à la map courante
                putServerData("ws/impl/markerimpl/addmarker/"+tempMarker.feature.properties.contentJson.name+"/"
                    +tempMarker.feature.properties.contentJson.description+"/"
                    +tempMarker.feature.properties.contentJson.longitude+"/"
                    +tempMarker.feature.properties.contentJson.latitude+"/"
                    +tempMarker.feature.properties.contentJson.category, result=>{
                    markerList.push(tempMarker);
                    console.log(markerList);
                });
            }
        });
    }
    return map; //On retourne la current map : Pas forcément utile au vu de la forme du code actuel ?
}
//récupération de toutes les maps de la bdd
function allMyMaps() {
    getServerData("ws/impl/mapimpl/getmap", result => {
        var tabName = new Array();
        var tabLat = new Array();
        var tabLon = new Array();
        var tabMarkerList = new Array();
        for (var i = 0; i < Object.keys(result).length; i++) {
            tabName[i] = result[i].name;     //récupération de tous les noms de map
            tabLat[i] = result[i].latitudeDeparture;    //récupération de toutes les latitudes associées
            tabLon[i] = result[i].longitudeDeparture;   //Idem pour les longitudes
            tabMarkerList[i] = result[i].markerList;
        }
        //Pour chaque nom, on crée un bouton dans la droplist
        for (var i = 0; i < Object.keys(result).length; i++) {
            /*if(tabMarkerList[i] == null){
                tabMarkerList[i] = new Array();
            }*/
            console.log(tabMarkerList[i]);
            //Au clic, on appel changeMyCurrentMap avec la position : la map appelée devient la current map
            $("#navbar-item-1").append('<a class="dropdown-item" type="button" onclick="changeMyCurrentMap('+tabLat[i]+',' +tabLon[i]+',' +tabMarkerList[i]+')">' + tabName[i] + '</a>');
            //console.log(result);
        }
    });
}
//Fonction de création d'évènements
function createEvent(c, marker, d){
    var choicer;
    //Cas sans images ni messages
    if(c.picture == "" && c.messageList.length == 0) {
        choicer = L.marker([c.latitude, c.longitude]).bindPopup("<b>" + c.name + "</b><br>" + c.description + "<br><b>Category: </b>" + c.category + "<br><b>from </b>"+ d.start +"<b> to </b>"+ d.end +
            "<br>" +
            "<div class='d-flex justify-content-between'>" +
            "<button type=\"button\" class=\"btn btn-sm marker_btn\" data-toggle=\"modal\" data-target=\"#modalPicture\">Show pictures</button>" +
            "<button type=\"button\" class=\"btn btn-sm marker_btn\" data-toggle=\"modal\" data-target=\"#modalMessage\">Show messages</button>" +
            "</div><div class='d-flex justify-content-between'>" +
            "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn\" id=\"showMeMessage\" data-toggle=\"modal tooltip\" data-target=\"#modalMessage\" data-placement='bottom' title=\"Add\"><i class=\"fa fa-plus pr-2\" aria-hidden=\"true\"></i></button>" +
            "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn marker-delete-button\" data-toggle=\"modal tooltip\" data-placement='bottom' title=\"Modify\"><i class=\"fa fa-pencil pr-2\" aria-hidden=\"true\"></i></button>" +
            "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn marker-delete-button\" data-toggle=\"modal tooltip\" data-placement='bottom' title=\"Delete\"><i class=\"fa fa-trash pr-2\"></i></button>" +
            "</div>")
            .openPopup();
        //Cas avec image et sans messages
    }else if(c.picture != "" && c.messageList.length == 0) {
        choicer = L.marker([c.latitude, c.longitude]).bindPopup("<b>" + c.name + "</b><br>" + c.description + "<br><b>Category: </b>" + c.category + "<br><b>from </b>"+ d.start +"<b> to </b>"+ d.end +
            "<br>" +
            "<div class='d-flex justify-content-between'>" +
            "<button type=\"button\" class=\"btn btn-sm marker_btn\" data-toggle=\"modal\" data-target=\"#modalMessage\">Show messages</button>" +
            "</div><div class='d-flex justify-content-between'>" +
            "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn\" data-toggle=\"modal tooltip\" data-target=\"#modalMessage\" data-placement='bottom' title=\"Add\"><i class=\"fa fa-plus pr-2\" aria-hidden=\"true\"></i></button>" +
            "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn marker-delete-button\" data-toggle=\"modal tooltip\" data-placement='bottom' title=\"Modify\"><i class=\"fa fa-pencil pr-2\" aria-hidden=\"true\"></i></button>" +
            "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn marker-delete-button\" data-toggle=\"modal tooltip\" data-placement='bottom' title=\"Delete\"><i class=\"fa fa-trash pr-2\"></i></button>" +
            "</div>")
            .openPopup();
        //Cas sans image et avec message
    }else if(c.picture == "" && c.messageList.length != 0){
        choicer = L.marker([c.latitude, c.longitude]).bindPopup("<b>" + c.name + "</b><br>" + c.description + "<br><b>Category: </b>" + c.category + "<br><b>from </b>"+ d.start +"<b> to </b>"+ d.end +
            "<br>" +
            "<div class='d-flex justify-content-between'>" +
            "<button type=\"button\" class=\"btn btn-sm marker_btn\" data-toggle=\"modal\" data-target=\"#modalPicture\">Show pictures</button>" +
            "</div><div class='d-flex justify-content-between'>" +
            "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn\" data-toggle=\"modal tooltip\" data-target=\"#modalMessage\" data-placement='bottom' title=\"Add\"><i class=\"fa fa-plus pr-2\" aria-hidden=\"true\"></i></button>" +
            "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn marker-delete-button\" data-toggle=\"modal tooltip\" data-placement='bottom' title=\"Modify\"><i class=\"fa fa-pencil pr-2\" aria-hidden=\"true\"></i></button>" +
            "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn marker-delete-button\" data-toggle=\"modal tooltip\" data-placement='bottom' title=\"Delete\"><i class=\"fa fa-trash pr-2\"></i></button>" +
            "</div>")
            .openPopup();
        //Cas avec image et message
    }else{
        choicer = L.marker([c.latitude, c.longitude]).bindPopup("<b>"+ c.name +"</b><br>"+ c.description +"<br>Category: "+ c.category + "<br><b>from </b>"+ d.start +"<b> to </b>"+ d.end +
            "<br>" +
            "<div class='d-flex justify-content-between'>" +
            "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn\" data-toggle=\"modal tooltip\" data-target=\"#modalMessage\" data-placement='bottom' title=\"Add\"><i class=\"fa fa-plus pr-2\" aria-hidden=\"true\"></i></button>" +
            "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn marker-delete-button\" data-toggle=\"modal tooltip\" data-placement='bottom' title=\"Modify\"><i class=\"fa fa-pencil pr-2\" aria-hidden=\"true\"></i></button>" +
            "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn marker-delete-button\" data-toggle=\"modal tooltip\" data-placement='bottom' title=\"Delete\"><i class=\"fa fa-trash pr-2\"></i></button>" +
            "</div>")
            .openPopup();
    }
    return choicer; //On retourne la forme choisie
}
//Fonction de création de marker
function createMarker(c, marker){
    var choicer;
    //Cas sans image ni message
    if(c.picture != "" && c.messageList.length != 0) {
        choicer = L.marker([c.latitude, c.longitude]).bindPopup("<b>" + c.name + "</b><br>" + c.description + "<br><b>Category: </b>" + c.category +
            "<br>" +
            "<div class='d-flex justify-content-between'>" +
            "<button type=\"button\" class=\"btn btn-sm marker_btn\" data-toggle=\"modal\" data-target=\"#modalPicture\">Show pictures</button>" +
            "<button type=\"button\" class=\"btn btn-sm marker_btn\" data-toggle=\"modal\" data-target=\"#modalMessage\">Show messages</button>" +
            "</div><div class='d-flex justify-content-between'>" +
            "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn message-adder-button\" data-toggle=\"modal tooltip\" data-target=\"#modalMessage\" data-placement='bottom' title=\"Add\"><i class=\"fa fa-plus pr-2\" aria-hidden=\"true\"></i></button>" +
            "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn marker-modify-button\" data-toggle=\"modal tooltip\" data-target=\"#modalModificationMarker\" data-placement='bottom' title=\"Modify\"><i class=\"fa fa-pencil pr-2\" aria-hidden=\"true\"></i></button>" +
            "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn marker-delete-button\" data-toggle=\"modal tooltip\" data-placement='bottom' title=\"Delete\"><i class=\"fa fa-trash pr-2\"></i></button>" +
            "</div>")
            .openPopup();
        //Cas sans image et avec message
    }else if(c.picture == "" && c.messageList.length != 0) {
        choicer = L.marker([c.latitude, c.longitude]).bindPopup("<b>" + c.name + "</b><br>" + c.description + "<br><b>Category: </b>" + c.category +
            "<br>" +
            "<div class='d-flex justify-content-between'>" +
            "<button type=\"button\" class=\"btn btn-sm marker_btn message-shower-button\" data-toggle=\"modal\" data-target=\"#modalMessage\">Show messages</button>" +
            "</div><div class='d-flex justify-content-between'>" +
            "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn message-adder-button\" data-toggle=\"modal tooltip\" data-target=\"#modalMessage\" data-placement='bottom' title=\"Add\"><i class=\"fa fa-plus pr-2\" aria-hidden=\"true\"></i></button>" +
            "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn marker-modify-button\" data-toggle=\"modal tooltip\" data-placement='bottom' title=\"Modify\"><i class=\"fa fa-pencil pr-2\" aria-hidden=\"true\"></i></button>" +
            "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn marker-delete-button\" data-toggle=\"modal tooltip\" data-placement='bottom' title=\"Delete\"><i class=\"fa fa-trash pr-2\"></i></button>" +
            "</div>")
            .openPopup();
        //Cas savec image et sans message
    }else if(c.picture != "" && c.messageList.length == 0){
        choicer = L.marker([c.latitude, c.longitude]).bindPopup("<b>" + c.name + "</b><br>" + c.description + "<br><b>Category: </b>" + c.category +
            "<br>" +
            "<div class='d-flex justify-content-between'>" +
            "<button type=\"button\" class=\"btn btn-sm marker_btn\" data-toggle=\"modal\" data-target=\"#modalPicture\">Show pictures</button>" +
            "</div><div class='d-flex justify-content-between'>" +
            "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn message-adder-button\" data-toggle=\"modal tooltip\" data-target=\"#modalMessage\" data-placement='bottom' title=\"Add\"><i class=\"fa fa-plus pr-2\" aria-hidden=\"true\"></i></button>" +
            "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn marker-modify-button\" data-toggle=\"modal tooltip\" data-placement='bottom' title=\"Modify\"><i class=\"fa fa-pencil pr-2\" aria-hidden=\"true\"></i></button>" +
            "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn marker-delete-button\" data-toggle=\"modal tooltip\" data-placement='bottom' title=\"Delete\"><i class=\"fa fa-trash pr-2\"></i></button>" +
            "</div>")
            .openPopup();
        //Cas avec image et message
    }else{
        choicer = L.marker([c.latitude, c.longitude]).bindPopup("<b>"+ c.name +"</b><br>"+ c.description +"<br>Category: "+ c.category +
            "<br>" +
            "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn message-adder-button\" data-toggle=\"modal tooltip\" data-target=\"#modalMessage\" data-placement='bottom' title=\"Add\"><i class=\"fa fa-plus pr-2\" aria-hidden=\"true\"></i></button>" +
            "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn marker-modify-button\" data-toggle=\"modal tooltip\" data-placement='bottom' title=\"Modify\"><i class=\"fa fa-pencil pr-2\" aria-hidden=\"true\"></i></button>" +
            "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn marker-delete-button\" data-toggle=\"modal tooltip\" data-placement='bottom' title=\"Delete\"><i class=\"fa fa-trash pr-2\"></i></button>" +
            "</div>")
            .openPopup();
    }
    return choicer;
}



// checkbox evenement dans menu creation d'évènement
$("input[type='checkbox']").click(function(){//quand on clicue sur la check box
    if($(this).prop("checked") == true){ // quand on clique sur la checkbox si elle n'existe pas alors on la crée
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
        $("#eventOk").append('<div id="debut"><label for="debut">Date de début :</label><input type="date" class="form-control" id="start" name="start" value="'+today+'" min="'+today+'">' +
            '</div><div id="fin"><label for="fin">Date de fin :</label><input type="date" class="form-control" id="end" name="end"value="'+today+'"min="'+today+'"></div>');
    }else if($(this).prop("checked") == false){ //si la div existe
        var de = document.getElementById("eventOk");
        var d_ne= document.getElementById("fin");
        var throwaway = de.removeChild(d_ne);
        var d_nea= document.getElementById("debut");
        var throwaway = de.removeChild(d_nea);
    }
});

function myfunction(){
    document.getElementById("friend-list").innerHTML="";
    $('#modalamis').modal('show');
    //document.getElementById('#friend-list').innerHTML="";
    getServerData("ws/impl/userimpl/getfriendlist", result =>{
        var tab = new Array();
        $("#friend-list").append("<div class=\"col-md-12\">");
        for(var i = 0; i < Object.keys(result).length ; i++){
            tab[i] = result[i].name
        }
        for(var i = 0 ; i < Object.keys(result).length ; i++){
            $("#friend-list").append("<button type=\"button\" class=\"btn btn-primary px-3\"><i class=\"fa fa-plus\" style=\"display:block;\" aria-hidden=\"true\"></i>" + tab[i] + "</button>");
        }
        $("#friend-list").append("</div>");
    })
};


// modal de liste d'amis
function searchFriend(){
    document.getElementById("addFriend").innerHTML="";
    $('#modal-ajout-amis').modal('show');
    postServerData("ws/impl/userimpl/searchfriend",result =>{

        var tab =new Array();
        if(Object.keys(result).length >0){
            for(var i = 0; i < Object.keys(result).length ; i++){
                tab[i] = result[i].name;
            }
            for(var i = 0 ; i < Object.keys(result).length ; i++){
                $("#addFriend").append('<a>'+ tab[i]+'</a>');
                $("#addFriend").append('<input type="checkbox" id="futureFriend'+i+'" name="event" value="0"><br>');
            }
        }

    });
};

// ajout d'amis
function addFriend(){
    for(var i = 0;document.getElementById('futureFriend'+i);i++){
        var checkbox = document.getElementById('futureFriend'+i);
        if(checkbox.checked == true){
            putServerData('ws/impl/userimpl/addfriend', result=>{});
        }
    }
    $('#modal-ajout-amis').modal('toggle');
    myfunction();
}

