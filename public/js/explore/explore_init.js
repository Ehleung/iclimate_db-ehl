var earth;

var locations = [
  ["Grand Canyon Nat. Park", [36.055, -112.1224]],
  ["Petrified Forest Nat. Park", [35.06557, -109.7816]],
  ["Saguaro Nat. Park", [32.18015, -110.7363]],
  ["Lake Havasu", [34.47398, -114.3459]],
  ["Bisbee", [31.44185, -109.9148]],
  ["Flagstaff", [35.1982, -111.6513]],
  ["Nogales", [31.33783, -110.9401]],
  ["Payson", [34.23132, -111.3247]],
  ["Phoenix", [33.44793, -112.0736]],
  ["Prescott", [34.54142, -112.4687]],
  ["Sedona", [34.77309, -111.7655]],
  ["Window Rock", [35.67085, -109.0592]],
  ["Yuma", [32.68485, -114.6246]]
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
    marker.bindPopup("<h7><b>" + locations[i][0] + "</b></h7><br> <h6>TEST</h6></br> <a href=\"#modal1\" ><i class=\"material-icons left\">comment</i>View Entries</a>", {maxWidth: 320, closeButton: true});
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
