
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
        var marker = L.marker([e.latlng.lat, e.latlng.lng]);
        L.DomEvent.on(btn, 'click', () => {
            $('#modalMarker').modal('show');
            var content =  {name: "", description: "", category: "", picture:""};
            document.getElementById("finisher").onclick = function() {
                content.name = document.getElementById("name").value;
                content.description = document.getElementById("descrip").value;
                content.category = document.getElementById("category").value;
                content.picture = document.getElementById("picture").value;
                marker.addTo(map);
                if(content.picture == ""){
                    marker.bindPopup("<b>"+ content.name +"</b><br>"+ content.description +"<br><b>Category: </b>"+ content.category +"<br><button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">Show me pictures</button>").openPopup();
                }else{
                    marker.bindPopup("<b>"+ content.name +"</b><br>"+ content.description +"<br>Category: "+ content.category).openPopup();
                }
                console.log(content.picture);
            }
            map.closePopup();
        });
    }
    map.on('click', onMapClick);

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
        $("#eventOk").append('<div id="debut"><label for="debut">Date de début :</label><input type="date" id="start" name="start" value="'+today+'" min="'+today+'"></div><div id="fin"><label for="fin">Date de fin :</label><input type="date" id="end" name="end"value="'+today+'"min="'+today+'"></div>');
    }else if($(this).prop("checked") == false){ //si la div existe
        var de = document.getElementById("eventOk");
        var d_ne= document.getElementById("fin");
        var throwaway = de.removeChild(d_ne);
        var d_nea= document.getElementById("debut");
        var throwaway = de.removeChild(d_nea);  
    }            
});

