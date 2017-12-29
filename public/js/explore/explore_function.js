function setPositionToEverest() { 
  earth.setView([27.988056, 86.925278]);
}

function flyToArizona() {
// earth.fitBounds([[30, -92], [40, -100]]);

// earth.panTo([33.572162, -112.087966], {heading: 0, zoom: 100, tilt: 15, duration: 1});
earth.panInsideBounds([[32.500496, -118.675293], [37.002553, -109.050293]],
    {heading: 0, tilt: 15, duration: 1});
}

var world_spin;
function spin() {
    var before = null;
    world_spin = requestAnimationFrame(function animate(now)
          {
            var c = earth.getPosition();
            var elapsed = before? now - before: 0;
            before = now;
            //earth.setCenter([c[0], c[1] + 0.1]);
            world_spin = requestAnimationFrame(animate);

            });
}

function stop_spin (){cancelAnimationFrame(world_spin);}

var locations = [
  ["Grand_Canyon_National_Park", [36.05972, -112.10972]],
  ["Tonto_Natural_Bridge_State_Park", [34.32195, -111.45333]],
  ["Organ_Pipe_Cactus_National_Monument ", [31.95556, -112.80028]],
  ["Lake_Havasu", [34.50306, -114.36028]],
  ["Flagstaff", [35.14417, -111.66639]],
  ["Nogales", [31.42083, -110.84583]],
  ["Payson", [34.2325, -111.34473]],
  ["Phoenix", [33.42778, -112.00389]],
  ["Prescott", [34.57055, -112.43222]],
  ["Window_Rock", [35.6575, -109.06139]],
  ["Yuma", [32.65,-114.61667]],
  ["Safford", [32.85472, -109.63528]],
  ["Tucson", [32.13139, -110.95528]],
  ["Tombstone", [31.71194, -110.06961]],
  ["Tuzigoot_National_Monument", [34.77055, -112.02639]]
];

function getStories(location) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    console.log ("readyState="+xhr.readyState + "\tstatus="+xhr.status);
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("location_content").innerHTML = this.responseText;
    };
  };
  xhr.open("GET", "/locations/"+location, true);
  xhr.send();
  // $.ajax({
  //   url: "/locations/"+location,
  // }).done(function(data) {
  //   console.log("test" + location);
  //   console.log(data);
  // });
}