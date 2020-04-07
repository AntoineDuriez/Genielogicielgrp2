/**
 * Javascript file for map creation
 */
//Elle fabrique une map passé en argument
function afficherMap(divName){
    var map = L.map(divName).fitWorld();
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiY2xlbWVudGdyZWdvaXJlMTIiLCJhIjoiY2s4bjNjMmFhMG05cjNlcDgxbDZmNDRxaSJ9.8gq9E_klOPVa1JJzVUvtyQ'
    }).addTo(map);

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
    //barre de recherche d'adresse
    L.Control.geocoder().addTo(map);
}