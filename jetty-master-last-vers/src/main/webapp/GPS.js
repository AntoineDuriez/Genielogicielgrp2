window.onload = function() {    //Toutes les fonctions ci-dessous s'execute à chaque refresh
   /* $("#GPSMap").append('<style type="text/css">div.content #GPSMap{ height: 96.5%;width: 99vw;}</style> <div id="mapGPS" style="height: 97.5%; width: 99vw;">');
    afficherMap(mapGPS);*/
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

    var popup = L.popup();

    function onMapClick(e) {
        var container = L.DomUtil.create('div');
        var btn = L.DomUtil.create('button', '', container);
        btn.setAttribute('type', 'button');
        btn.innerHTML = "Create marker here";
        popup
            .setLatLng(e.latlng)
            .setContent(btn)
            .openOn(gps);
        var marker = L.marker([e.latlng.lat, e.latlng.lng]);

        L.DomEvent.on(btn, 'click', () => {
            //alert("fenêtre de création de marker");
            $('#exampleGPSModal').modal('show');
            document.getElementById("finisher").onclick = function() {
                marker.addTo(gps);
                gps.closePopup();
            }
        });

    }
    gps.on('click', onMapClick);
};



