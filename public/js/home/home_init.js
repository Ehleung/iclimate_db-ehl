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

  // Used to init session vars to be used later
  function storage() {

    // Example: locations[i][0] <- refers to the location string
      // locations[i][1][0] <- refers to min temperature 2017
      // locations[i][1][2] <- refers to rain 2017
      // locations[i][2][3] <- refers to plant cover 2050
      // ANY VALUES that equal -200 are counted as null.
    var initlocations = [
      ["Tuzigoot National Monument", [47, 81, 13.39, -200], [52, 86, 13.3, -200] ],
      ["Window Rock", [33, 68, 12.19, -200], [37, 72, 10.88, -200] ],
      ["Tombstone", [50.3, 76.8, 14.2, -200], [54, 87, 13.97, -200] ],
      ["Nogales", [49, 83, 14.42, -200], [47, 86, 16.35, -200] ],
      ["Tucson", [58, 87, 11.4, -200], [58, 91, 10.63, -200] ],
      ["Flagstaff", [33, 63, 24.11, -200], [34, 69, 18.79, -200] ],
      ["Safford", [52, 83, 11.8, -200], [49, 87, 5.73, -200] ],  
      ["Lake Havasu", [63, 88, 4.77, -200], [65, 93, 4.83, -200] ],
      ["Phoenix", [65, 89, 5.67, -200], [63, 93, 7.07, -200] ],
      ["Yuma", [65, 90, 2.46, -200], [64, 95, 4.47, -200] ],
      ["Payson", [42, 75, 21.74, -200], [42, 80, 19.27, -200] ],
      ["Prescott", [41, 72, 22.04, -200], [43, 76, 15.09, -200] ],
      ["Organ Pipe Cactus National Monument", [56, 87, 8, -200], [59, 93, 5.85, -200] ],
      ["Tonto Natural Bridge State Park", [43, 74, 20.69, -200], [43, 78, 25.89, -200] ],
      ["Grand Canyon National Park", [41, 62, 20.74, -200], [39, 70, 13.17, -200] ]
    ];
    window.sessionStorage.locations[] = initlocations;

    var inittopics = [
      "children",
      "people",
      "plant life",
      "large animals",
      "small animals",
      "insects",
      "microbes",
      "businesses",
      "tourism",
      "buildings",
      "water resources",
    ];
    window.sessionStorage.topics[] = inittopics;
  }
  
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
