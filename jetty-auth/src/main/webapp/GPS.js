window.onload = function() {    //Toutes les fonctions ci-dessous s'execute à chaque refresh
    $("#GPSMap").append('<style type="text/css">div.content #GPSMap{ height: 96.5%;width: 99vw;}</style> <div id="mapGPS" style="height: 97.5%; width: 99vw;">');
    afficherMap(mapGPS);
};