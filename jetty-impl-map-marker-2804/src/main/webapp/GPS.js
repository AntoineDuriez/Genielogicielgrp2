window.onload = function() {    //Toutes les fonctions ci-dessous s'execute à chaque refresh
   let gps = L.map("GPSMap").setView([48.852969, 2.349903], 13)
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiYWt1cmF3biIsImEiOiJjazhpdzRldncwOHAwM2RvNWNkMjJyejFnIn0.bDaWCw4cIn2OL91W1nu6Wg'
    }).addTo(gps);

   L.Control.geocoder().addTo(gps);

   //Gestion d'itinéraire
    L.Routing.control({
        geocoder: L.Control.Geocoder.nominatim(),
        lineOptions: {
            styles: [{
                color: "#AD5E39",
                opacity: 1,
                weight: 7
            }]
        }
    }).addTo(gps)



        markerGeoloc();
    //test pour geolocalisation de marker
    function markerGeoloc(){
        getServerData("ws/impl/markerimpl/getmarker", result => {
            var tabName = new Array();
            var tabLat = new Array();
            var tabLon = new Array();
            for (var i = 0; i < Object.keys(result).length; i++) {
                tabName[i] = result[i].name;     //récupération de tous les noms de map
                tabLat[i] = result[i].latitude;    //récupération de toutes les latitudes associées
                tabLon[i] = result[i].longitude;   //Idem pour les longitudes
            }
            //Pour chaque nom, on crée un bouton dans la droplist
            var marker;
            for (var i = 0; i < Object.keys(result).length; i++) {
                var geojsonFeature = {
                    "type": "Feature",
                    "properties":{
                        "contentJson": {
                            "name": tabName[i],
                            "latitude": tabLon[i],
                            "longitude": tabLat[i]
                        }    //les attributs Json du marqueur
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [tabLon[i], tabLat[i]]
                    }
                }
                L.geoJson(geojsonFeature, {
                    pointToLayer: function(feature, latlng){
                        marker = L.marker([tabLon[i], tabLat[i]]).bindPopup("<b>" + tabName[i] + "</b><br>")
                        //marker = marker.on("popupopen", onPopupOpen);   //action à réaliser sur le current marker
                        console.log(marker);
                        return marker;
                    }
                }).addTo(gps);
            }
        });
    }
};

function showMeRoute(){
    $('#modalMarkerRoute').modal('show');
}





