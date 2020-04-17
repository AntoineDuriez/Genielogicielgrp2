
window.onload = function() {    //Toutes les fonctions ci-dessous s'execute à chaque refresh

    //Elle fabrique une map passé en argument
        /*let map = L.map("mainMap").fitWorld();
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoiYWt1cmF3biIsImEiOiJjazhpdzRldncwOHAwM2RvNWNkMjJyejFnIn0.bDaWCw4cIn2OL91W1nu6Wg'
        }).addTo(map);*/
        /*map.locate({setView: true, maxZoom: 16});
        function onLocationFound(e) {
            var radius = e.accuracy;
            L.marker(e.latlng).addTo(map)
                .bindPopup("You are within " + radius + " meters from this point").openPopup();
            L.circle(e.latlng, radius).addTo(map);
        }
        map.on('locationfound', onLocationFound);
        function onLocationError(e) {
            alert(e.message);
        }
        map.on('locationerror', onLocationError);*/

    let map = L.map("mainMap").setView([48.852969, 2.349903], 13)
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiYWt1cmF3biIsImEiOiJjazhpdzRldncwOHAwM2RvNWNkMjJyejFnIn0.bDaWCw4cIn2OL91W1nu6Wg'
    }).addTo(map);

    //barre de recherche d'adresse
    L.Control.geocoder().addTo(map);

/*
    // attaching function on map click
    map.on('click', onMapClick);
    // Script for adding marker on map click
    function onMapClick(e) {
        var geojsonFeature = {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [e.latlng.lat, e.latlng.lng]
            }
        }
        var marker;
        L.geoJson(geojsonFeature, {
            pointToLayer: function(feature, latlng){
                marker = L.marker(e.latlng).bindPopup("<input type='button' value='Delete this marker' class='marker-delete-button'/>").openPopup();
                marker.on("popupopen", onPopupOpen);
                return marker;
            }
        }).addTo(map);
        console.log(geojsonFeature);
    }
*/

    //Création marker
    var popup = L.popup();
    function onMapClick(e) {
        var container = L.DomUtil.create('div');
        var btn = L.DomUtil.create('button', '', container);
        btn.setAttribute('type', 'button');
        btn.classList.add('btn', 'marker_btn');
        btn.innerHTML = "Create marker here";
        popup
            .setLatLng(e.latlng)
            .setContent(btn)
            .openOn(map);

        var c = {
            "name": "",
            "description": "",
            "category": "",
            "picture": "",
            "latitude": 0,
            "longitude": 0,
            "messageList":[]
        }
        var geojsonFeature = {
            "type": "Feature",
            "properties":{
              "contentJson": c
            },
            "geometry": {
                "type": "Point",
                "coordinates": [e.latlng.lat, e.latlng.lng]
            }
        }

        L.DomEvent.on(btn, 'click', () => {
            $('#modalMarker').modal('show');
            document.getElementById("finisher").onclick = function() {
                c.name = document.getElementById("name").value;
                c.description = document.getElementById("descrip").value;
                c.category = document.getElementById("category").value;
                c.picture = document.getElementById("picture").value;
                c.latitude = e.latlng.lat;
                c.longitude = e.latlng.lng;
                geojsonFeature.properties.name = document.getElementById("name").value;
                var marker;
                L.geoJson(geojsonFeature, {
                    pointToLayer: function(feature, latlng){
                        if(document.getElementById("event").checked){
                            var dateControl = {start, end};
                            dateControl.start = document.getElementById("start").value;
                            dateControl.end = document.getElementById("end").value;
                            marker = createEvent(c, marker, dateControl);
                        }else{
                            marker = createMarker(c, marker);
                        }
                        marker.on("popupopen", onPopupOpen);
                        return marker;
                    }
                }).addTo(map);
            }
            map.closePopup();
        });
    }
    map.on('click', onMapClick);


    function createEvent(c, marker, d){
        var choicer;
        if(c.picture == "" && c.messageList.length == 0) {
            choicer = L.marker([c.latitude, c.longitude]).bindPopup("<b>" + c.name + "</b><br>" + c.description + "<br><b>Category: </b>" + c.category + "<br><b>from </b>"+ d.start +"<b> to </b>"+ d.end +
                "<br>" +
                "<div class='d-flex justify-content-between'>" +
                    "<button type=\"button\" class=\"btn btn-sm marker_btn\" data-toggle=\"modal\" data-target=\"#modalPicture\">Show pictures</button>" +
                    "<button type=\"button\" class=\"btn btn-sm marker_btn\" data-toggle=\"modal\" data-target=\"#modalMessage\">Show messages</button>" +
                "</div><div class='d-flex justify-content-between'>" +
                    "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn\" data-toggle=\"modal tooltip\" data-target=\"#modalMessage\" data-placement='bottom' title=\"Add\"><i class=\"fa fa-plus pr-2\" aria-hidden=\"true\"></i></button>" +
                    "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn marker-delete-button\" data-toggle=\"modal tooltip\" data-placement='bottom' title=\"Modify\"><i class=\"fa fa-pencil pr-2\" aria-hidden=\"true\"></i></button>" +
                    "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn marker-delete-button\" data-toggle=\"modal tooltip\" data-placement='bottom' title=\"Delete\"><i class=\"fa fa-trash pr-2\"></i></button>" +
            "</div>")
                .openPopup();
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
        return choicer;
    }

    function createMarker(c, marker){
        var choicer;
        if(c.picture == "" && c.messageList.length == 0) {
            choicer = L.marker([c.latitude, c.longitude]).bindPopup("<b>" + c.name + "</b><br>" + c.description + "<br><b>Category: </b>" + c.category +
                "<br>" +
                "<div class='d-flex justify-content-between'>" +
                "<button type=\"button\" class=\"btn btn-sm marker_btn\" data-toggle=\"modal\" data-target=\"#modalPicture\">Show pictures</button>" +
                "<button type=\"button\" class=\"btn btn-sm marker_btn\" data-toggle=\"modal\" data-target=\"#modalMessage\">Show messages</button>" +
                "</div><div class='d-flex justify-content-between'>" +
                "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn\" data-toggle=\"modal tooltip\" data-target=\"#modalMessage\" data-placement='bottom' title=\"Add\"><i class=\"fa fa-plus pr-2\" aria-hidden=\"true\"></i></button>" +
                "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn marker-modify-button\" data-toggle=\"modal tooltip\" data-target=\"#modalModificationMarker\" data-placement='bottom' title=\"Modify\"><i class=\"fa fa-pencil pr-2\" aria-hidden=\"true\"></i></button>" +
                "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn marker-delete-button\" data-toggle=\"modal tooltip\" data-placement='bottom' title=\"Delete\"><i class=\"fa fa-trash pr-2\"></i></button>" +
                "</div>")
                .openPopup();
        }else if(c.picture != "" && c.messageList.length == 0) {
            choicer = L.marker([c.latitude, c.longitude]).bindPopup("<b>" + c.name + "</b><br>" + c.description + "<br><b>Category: </b>" + c.category +
                "<br>" +
                "<div class='d-flex justify-content-between'>" +
                    "<button type=\"button\" class=\"btn btn-sm marker_btn\" data-toggle=\"modal\" data-target=\"#modalMessage\">Show messages</button>" +
                "</div><div class='d-flex justify-content-between'>" +
                    "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn\" data-toggle=\"modal tooltip\" data-target=\"#modalMessage\" data-placement='bottom' title=\"Add\"><i class=\"fa fa-plus pr-2\" aria-hidden=\"true\"></i></button>" +
                    "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn marker-delete-button\" data-toggle=\"modal tooltip\" data-placement='bottom' title=\"Modify\"><i class=\"fa fa-pencil pr-2\" aria-hidden=\"true\"></i></button>" +
                    "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn marker-delete-button\" data-toggle=\"modal tooltip\" data-placement='bottom' title=\"Delete\"><i class=\"fa fa-trash pr-2\"></i></button>" +
                "</div>")
                .openPopup();
        }else if(c.picture == "" && c.messageList.length != 0){
            choicer = L.marker([c.latitude, c.longitude]).bindPopup("<b>" + c.name + "</b><br>" + c.description + "<br><b>Category: </b>" + c.category +
                "<br>" +
                "<div class='d-flex justify-content-between'>" +
                    "<button type=\"button\" class=\"btn btn-sm marker_btn\" data-toggle=\"modal\" data-target=\"#modalPicture\">Show pictures</button>" +
                "</div><div class='d-flex justify-content-between'>" +
                    "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn\" data-toggle=\"modal tooltip\" data-target=\"#modalMessage\" data-placement='bottom' title=\"Add\"><i class=\"fa fa-plus pr-2\" aria-hidden=\"true\"></i></button>" +
                    "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn marker-delete-button\" data-toggle=\"modal tooltip\" data-placement='bottom' title=\"Modify\"><i class=\"fa fa-pencil pr-2\" aria-hidden=\"true\"></i></button>" +
                    "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn marker-delete-button\" data-toggle=\"modal tooltip\" data-placement='bottom' title=\"Delete\"><i class=\"fa fa-trash pr-2\"></i></button>" +
                "</div>")
                .openPopup();
        }else{
            choicer = L.marker([c.latitude, c.longitude]).bindPopup("<b>"+ c.name +"</b><br>"+ c.description +"<br>Category: "+ c.category +
                "<br>" +
                "<div class='d-flex justify-content-between'>" +
                    "<button type=\"button\" class=\"btn btn-sm marker_btn\" data-toggle=\"modal\" data-target=\"#modalPicture\">Show pictures</button>" +
                    "<button type=\"button\" class=\"btn btn-sm marker_btn\" data-toggle=\"modal\" data-target=\"#modalMessage\">Show messages</button>" +
                "</div><div class='d-flex justify-content-between'>" +
                    "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn\" data-toggle=\"modal tooltip\" data-target=\"#modalMessage\" data-placement='bottom' title=\"Add\"><i class=\"fa fa-plus pr-2\" aria-hidden=\"true\"></i></button>" +
                    "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn marker-delete-button\" data-toggle=\"modal tooltip\" data-placement='bottom' title=\"Modify\"><i class=\"fa fa-pencil pr-2\" aria-hidden=\"true\"></i></button>" +
                    "<button type=\"button\" class=\"btn btn_link btn-sm mt-1 changer_btn marker-delete-button\" data-toggle=\"modal tooltip\" data-placement='bottom' title=\"Delete\"><i class=\"fa fa-trash pr-2\"></i></button>" +
                "</div>")
                .openPopup();
        }
        return choicer;
    }

// Function to handle delete as well as other events on marker popup open
    function onPopupOpen() {
        var tempMarker = this;
        //var tempMarkerGeoJSON = this.toGeoJSON();
        //var lID = tempMarker._leaflet_id; // Getting Leaflet ID of this marker
        // To remove marker on click of delete
        $(".marker-delete-button").click(function () {
            map.removeLayer(tempMarker);
        });

        $(".marker-modify-button").click(function(){
            $('#modalModificationMarker').modal('show');
            document.getElementById("nameModif").setAttribute('value',tempMarker.feature.properties.contentJson.name);
            $('#descripModif').val(tempMarker.feature.properties.contentJson.description);
            document.getElementById("categoryModif").setAttribute('value',tempMarker.feature.properties.contentJson.category);
            //Pour le picture : A modifier
            document.getElementById("pictureModif").setAttribute('value',tempMarker.feature.properties.contentJson.picture);
        });
    }

    getServerData("ws/impl/mapimpl/getmap",result =>{
        var tab = new Array();
        for(var i = 0 ; i < Object.keys(result).length ; i++){
            tab[i] = result[i].name     //récupération de tous les noms de map, on suppose que c'est celle du user
        }
        /*Pour chaque nom, on crée un bouton dans la droplist*/
        for(var i = 0 ; i < Object.keys(result).length ; i++){
            $("#navbar-item-1").append('<a class="dropdown-item" type="button" href="home.html">' + tab[i] + '</a>');
        }
    });
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

