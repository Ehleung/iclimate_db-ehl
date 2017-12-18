var earth;

var locations = [
  ["Grand Canyon Nat. Park", [36.05972, -112.10972]],
  ["Tonto Natural Bridge State Park", [34.32195, -111.45333]],
  ["Organ Pipe Cactus National Monument ", [31.95556, -112.80028]],
  ["Lake Havasu", [34.50306, -114.36028]],
  ["Flagstaff", [35.14417, -111.66639]],
  ["Nogales", [31.42083, -110.84583]],
  ["Payson", [34.2325, -111.34473]],
  ["Phoenix", [33.42778, -112.00389]],
  ["Prescott", [34.57055, -112.43222]],
  ["Window Rock", [35.6575, -109.06139]],
  ["Yuma", [32.65,-114.61667]],
  ["Safford", [32.85472, -109.63528]],
  ["Tucson", [32.13139, -110.95528]],
  ["Tombstone", [31.71194, -110.06961]],
  ["Tuzigoot National Monument", [34.77055, -112.02639]]
];

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

  // var marker = WE.marker(locations[0][1]).addTo(earth);
  // marker.bindPopup("<h7><b>TEST</b></h7><br> <h6>TEST</h6></br> <a href=\"#modal1\" ><i class=\"material-icons left\">comment</i>comment</a>", {maxWidth: 320, closeButton: true});

  // Append every location found in the array at the top to a marker on the map
  for (var i = 0; i < locations.length; i++) {
    var marker = WE.marker(locations[i][1]).addTo(earth);
    marker.bindPopup("<form action=\"/view\" method=\"post\"><h6>View stories from <a href=\"#locations[i][0]\"></a>!</h6></br> <button class=\"button is-primary\" name=\"viewLoc\" type=\"submit\">"+locations[i][0]+"</button></form>", {maxWidth: 320, closeButton: true});
  }

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
