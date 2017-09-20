var earth;

function world() {
  var options = {
         sky: true,
         atmosphere: true,
         dragging: true,
         tilting: true,
         zooming: true,
         center: [0, 30],
         zoom: 2.5
       };
       earth = new WE.map('earth_div', options);

       var defalt = WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(earth);
       var nature = WE.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {});
       var toner = WE.tileLayer('http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg', {});

       // Imagination
        var marker = WE.marker([31.33783, -110.9401]).addTo(earth);
        marker.bindPopup("<h7><b>TEST</b></h7><br> <h6>TEST</h6></br> <a href=\"#modal1\" ><i class=\"material-icons left\">comment</i>comment</a>", {maxWidth: 320, closeButton: true});

        var marker = WE.marker([51.5, 20.09]).addTo(earth);
        marker.bindPopup("<h7><b>Pat</b></h7><br> <h6>\"Hello this is me from ASU.\"</h6></br> <a href=\"#modal1\" ><i class=\"material-icons left\">comment</i>comment</a>", {maxWidth: 320, closeButton: true});

       earth.switch_map = function switch_map(x)
        {
          nature.setOpacity(0);
          toner.setOpacity(0);
          defalt.setOpacity(0);
          if (x == 1){ nature.setOpacity(1); }
          else if (x == 2){ toner.setOpacity(1); }
          else if (x == 3){ defalt.setOpacity(1); }
        }
        nature.addTo(earth);
        toner.addTo(earth);
        earth.switch_map(3);
        setTimeout(spin(), 5000);
        flyToArizona();
}

function newMarker(lat, lon) {
  console.log("lat: ", lat);
  console.log("lon: ", lon);
  if (lat != 300) {
    var marker = WE.marker([lat, lon]).addTo(earth);
    marker.bindPopup("<h7><b>Pat</b></h7><br> <h6>\"Hello this is me from ASU.\"</h6></br> <a href=\"#modal1\" ><i class=\"material-icons left\">comment</i>comment</a>", {maxWidth: 320, closeButton: true});
  }
}
