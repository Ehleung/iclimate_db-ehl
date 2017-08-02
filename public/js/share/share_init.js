var earth
  function world() {
    var options = {
         sky: true,
         atmosphere: true,
         dragging: true,
         tilting: true,
         zooming: true,
         center: [0, 90],
         zoom: 4
       };
       earth = new WE.map('earth_div', options);

       var nature = WE.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {});
       var toner = WE.tileLayer('http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg', {});


       earth.swith_map = function swith_map(x)
        {
          nature.setOpacity(0);
          toner.setOpacity(0);
          if (x == 1){  nature.setOpacity(1); }
          else if (x == 2){ toner.setOpacity(1);}
        }
        nature.addTo(earth);
        toner.addTo(earth);
        earth.swith_map(1);
        setTimeout(spin(), 5000);

  }
