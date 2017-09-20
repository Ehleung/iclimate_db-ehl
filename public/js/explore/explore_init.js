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

       var nature = WE.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {});
       var toner = WE.tileLayer('http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg', {});

       // Imagination
        var marker = WE.marker([51.5, 20.09]).addTo(earth);
        marker.bindPopup("<h7><b>Pat</b></h7><br> <h6>\"Hello this is me from ASU.\"</h6></br> <a href=\"#modal1\" ><i class=\"material-icons left\">comment</i>comment</a>", {maxWidth: 320, closeButton: true});

       earth.switch_map = function switch_map(x)
        {
          nature.setOpacity(0);
          toner.setOpacity(0);
          if (x == 1){  nature.setOpacity(1); }
          else if (x == 2){ toner.setOpacity(1);}
        }
        nature.addTo(earth);
        toner.addTo(earth);
        earth.switch_map(1);
        setTimeout(spin(), 5000);
        flyToArizona();
}
