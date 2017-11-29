var earth
  var world_spin;
  function spin()
            {
                var before = null;
                world_spin = requestAnimationFrame(function animate(now)
                      {
                        var c = earth.getPosition();
                        var elapsed = before? now - before: 0;
                        before = now;
                        earth.setCenter([c[0], c[1] + 0.1]);
                        world_spin = requestAnimationFrame(animate);

                        });
            }

  function stop_spin (){cancelAnimationFrame(world_spin);}

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
        storage();
  }
