var earth
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


        var marker = WE.marker([5.5, 100.09]).addTo(earth);
      marker.bindPopup("<h7><b>Pat</b></h7><br> <h6>\"Hello this is me from ASU.\"</h6></br> <a href=\"#modal1\" ><i class=\"material-icons left\">comment</i>comment</a>", {maxWidth: 320, closeButton: true});



        var marker = WE.marker([31.5, -100.09]).addTo(earth);
      marker.bindPopup("<h7><b>Pat</b></h7><br> <h6>\"Hello this is me from ASU.\"</h6></br> <a href=\"#modal1\" ><i class=\"material-icons left\">comment</i>comment</a>", {maxWidth: 320, closeButton: true});



        var marker = WE.marker([11.5, 50.09]).addTo(earth);
      marker.bindPopup("<h7><b>Pat</b></h7><br> <h6>\"Hello this is me from ASU.\"</h6></br> <a href=\"#modal1\" ><i class=\"material-icons left\">comment</i>comment</a>", {maxWidth: 320, closeButton: true});



        var marker = WE.marker([61.5, -20.09]).addTo(earth);
      marker.bindPopup("<h7><b>Pat</b></h7><br> <h6>\"Hello this is me from ASU.\"</h6></br> <a href=\"#modal1\" ><i class=\"material-icons left\">comment</i>comment</a>", {maxWidth: 320, closeButton: true});



        var marker = WE.marker([71.5, -60.09]).addTo(earth);
      marker.bindPopup("<h7><b>Pat</b></h7><br> <h6>\"Hello this is me from ASU.\"</h6></br> <a href=\"#modal1\" ><i class=\"material-icons left\">comment</i>comment</a>", {maxWidth: 320, closeButton: true});



        var marker = WE.marker([101.5, -100.09]).addTo(earth);
      marker.bindPopup("<h7><b>Pat</b></h7><br> <h6>\"Hello this is me from ASU.\"</h6></br> <a href=\"#modal1\" ><i class=\"material-icons left\">comment</i>comment</a>", {maxWidth: 320, closeButton: true});



        var marker = WE.marker([91.5, -80.09]).addTo(earth);
      marker.bindPopup("<h7><b>Pat</b></h7><br> <h6>\"Hello this is me from ASU.\"</h6></br> <a href=\"#modal1\" ><i class=\"material-icons left\">comment</i>comment</a>", {maxWidth: 320, closeButton: true});



        var marker = WE.marker([191.5, 20.09]).addTo(earth);
      marker.bindPopup("<h7><b>Pat</b></h7><br> <h6>\"Hello this is me from ASU.\"</h6></br> <a href=\"#modal1\" ><i class=\"material-icons left\">comment</i>comment</a>", {maxWidth: 320, closeButton: true});






        var marker = WE.marker([101.5, 120.09]).addTo(earth);
      marker.bindPopup("<h7><b>Pat</b></h7><br> <h6>\"Hello this is me from ASU.\"</h6></br> <a href=\"#modal1\" ><i class=\"material-icons left\">comment</i>comment</a>", {maxWidth: 320, closeButton: true});



        var marker = WE.marker([25.5, 130.09]).addTo(earth);
      marker.bindPopup("<h7><b>Pat</b></h7><br> <h6>\"Hello this is me from ASU.\"</h6></br> <a href=\"#modal1\" ><i class=\"material-icons left\">comment</i>comment</a>", {maxWidth: 320, closeButton: true});



        var marker = WE.marker([41.5, -10.09]).addTo(earth);
      marker.bindPopup("<h7><b>Pat</b></h7><br> <h6>\"Hello this is me from ASU.\"</h6></br> <a href=\"#modal1\" ><i class=\"material-icons left\">comment</i>comment</a>", {maxWidth: 320, closeButton: true});



        var marker = WE.marker([111.5, 60.09]).addTo(earth);
      marker.bindPopup("<h7><b>Pat</b></h7><br> <h6>\"Hello this is me from ASU.\"</h6></br> <a href=\"#modal1\" ><i class=\"material-icons left\">comment</i>comment</a>", {maxWidth: 320, closeButton: true});



        var marker = WE.marker([-161.5, -200.09]).addTo(earth);
      marker.bindPopup("<h7><b>Pat</b></h7><br> <h6>\"Hello this is me from ASU.\"</h6></br> <a href=\"#modal1\" ><i class=\"material-icons left\">comment</i>comment</a>", {maxWidth: 320, closeButton: true});



        var marker = WE.marker([171.5, -160.09]).addTo(earth);
      marker.bindPopup("<h7><b>Pat</b></h7><br> <h6>\"Hello this is me from ASU.\"</h6></br> <a href=\"#modal1\" ><i class=\"material-icons left\">comment</i>comment</a>", {maxWidth: 320, closeButton: true});



        var marker = WE.marker([121.5, -120.09]).addTo(earth);
      marker.bindPopup("<h7><b>Pat</b></h7><br> <h6>\"Hello this is me from ASU.\"</h6></br> <a href=\"#modal1\" ><i class=\"material-icons left\">comment</i>comment</a>", {maxWidth: 320, closeButton: true});



        var marker = WE.marker([191.5, -180.09]).addTo(earth);
      marker.bindPopup("<h7><b>Pat</b></h7><br> <h6>\"Hello this is me from ASU.\"</h6></br> <a href=\"#modal1\" ><i class=\"material-icons left\">comment</i>comment</a>", {maxWidth: 320, closeButton: true});



        var marker = WE.marker([21.5, 90.09]).addTo(earth);
      marker.bindPopup("<h7><b>Pat</b></h7><br> <h6>\"Hello this is me from ASU.\"</h6></br> <a href=\"#modal1\" ><i class=\"material-icons left\">comment</i>comment</a>", {maxWidth: 320, closeButton: true});





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
