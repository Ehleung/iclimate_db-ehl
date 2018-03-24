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

var topics = [
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

function shuffle_question() {
  // topics = window.sessionStorage.topics;
  var x = Math.floor((Math.random() * topics.length));
  if (window.sessionStorage.prevTopic != "") {
    while (topics[x] == window.sessionStorage.prevTopic) {
      x = Math.floor((Math.random() * topics.length));
    }
  }
  window.sessionStorage.prevTopic = topics[x];
  document.getElementById("random_question").textContent=topics[x];
}

// Example: locations[i][0] <- refers to the location string
  // locations[i][1][0] <- refers to min temperature 2017
  // locations[i][1][2] <- refers to rain 2017
  // locations[i][2][3] <- refers to plant cover 2050
  // ANY VALUES that equal -200 are counted as null.
var locations = [
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

function checkValid() {
  var validSubmit = document.getElementById("sharesubmit");
  var location = true, title = true, story = true, name = true;
  window.sessionStorage.selectedLoc = document.getElementById("location").value;

  if (document.getElementById("location").value == "Choose your location...")
    location = false;
  if (document.getElementById("title").value == "")
    title = false;
  if (document.getElementById("textarea1").value == "")
    story = false;
  if (document.getElementById("user").value == "")
    name = false;
  
  // Require all variables to be true for button to appear
  if (location == true && title == true && story == true && name == true && window.sessionStorage.clickedData == 1) {
    validSubmit.style.visibility = "visible";
  }
  else
    validSubmit.style.visibility = "hidden";
}

// Called when a location is first selected. 
function hide_all() {
  document.getElementById("shift").style.display = "none";
  document.getElementById("questionbox").style.display = "none";
  document.getElementById("input_box").style.display = "none";
  document.getElementById("label_tile").style.display = "none";
    document.getElementById("data_tile").style.display = "none";

  document.getElementById("label0").style.visibility = "hidden";
  document.getElementById("label1").style.visibility = "hidden";
  document.getElementById("label2").style.visibility = "hidden";
  document.getElementById("label3").style.visibility = "hidden";
  document.getElementById("label4").style.visibility = "hidden";

  document.getElementById("min").style.visibility = "hidden";
  document.getElementById("max").style.visibility = "hidden";
  document.getElementById("rain").style.visibility = "hidden";
  document.getElementById("plant").style.visibility = "hidden";
  document.getElementById("currentyear").style.visibility = "hidden";

  document.getElementById("min2050").style.visibility = "hidden";
  document.getElementById("max2050").style.visibility = "hidden";
  document.getElementById("rain2050").style.visibility = "hidden";
  document.getElementById("plant2050").style.visibility = "hidden";
  document.getElementById("futureyear").style.visibility = "hidden";
  
  
  // Init clickedData to track whether a user has clicked on new data or not.
  window.sessionStorage.clickedData = 0;
}

function updateTemps(locationStr) {
  // console.log(locationStr);
  document.getElementById("sharesubmit").style.visibility = "hidden";
  window.sessionStorage.currentTemps = 0;
  window.sessionStorage.clickedData = 0;
  var i;
  for (i = 0; i < locations.length; i++) {
    if (locations[i][0] == locationStr)
      break
  }
  window.sessionStorage.curr_location_index = i;
  hide_all();

  if (locationStr != "Choose your location...") {
    document.getElementById("label_tile").style.display = "block";
    document.getElementById("data_tile").style.display = "block";
    document.getElementById("shift").style.display = "block";
    document.getElementById("shift").style.visibility = "visible";
    document.getElementById("questionbox").style.display = "block";
    document.getElementById("shuffle_button").style.visibility = "visible";
    document.getElementById("currentyear").style.visibility = "visible";
    document.getElementById("label0").style.visibility = "visible";

    if (locations[i][1][0] != -200) {
      document.getElementById("min").innerHTML = locations[i][1][0];
      document.getElementById("min").style.visibility = "visible";
      document.getElementById("label1").style.visibility = "visible";
    }
    if (locations[i][1][1] != -200) {
      document.getElementById("max").innerHTML = locations[i][1][1];
      document.getElementById("max").style.visibility = "visible";
      document.getElementById("label2").style.visibility = "visible"; 
    }
    if (locations[i][1][2] != -200) {
      document.getElementById("rain").innerHTML = locations[i][1][2];
      document.getElementById("rain").style.visibility = "visible";
      document.getElementById("label3").style.visibility = "visible";
    }
    if (locations[i][1][3] != -200) {
      document.getElementById("plant").innerHTML = locations[i][1][3];
      document.getElementById("plant").style.visibility = "visible";
      document.getElementById("label4").style.visibility = "visible";
    }

    // document.getElementById("swap_measure").style.visibility = "visible";
  }
  else {
    hide_all();
  }
}
function newTemps(currentTemps) {
  // var locations = window.sessionStorage.locations;
  var i = window.sessionStorage.curr_location_index;
  // Going from 2017 to 2050
  if (currentTemps == 0) {
    if (locations[i][2][0] != -200) {
      document.getElementById("min2050").innerHTML = locations[i][2][0];
      document.getElementById("min2050").style.visibility = "visible";
    }
    if (locations[i][2][1] != -200) {
      document.getElementById("max2050").innerHTML = locations[i][2][1];
      document.getElementById("max2050").style.visibility = "visible";
    }
    if (locations[i][2][2] != -200) {
      document.getElementById("rain2050").innerHTML = locations[i][2][2];
      document.getElementById("rain2050").style.visibility = "visible";
    }
    if (locations[i][2][3] != -200) {
      document.getElementById("plant2050").innerHTML = locations[i][2][3];
      document.getElementById("plant2050").style.visibility = "visible";
    }
    document.getElementById("futureyear").style.visibility = "visible";
    window.sessionStorage.currentTemps = 1;
    window.sessionStorage.clickedData = 1;

    document.getElementById("questionbox").style.display = "block";
    document.getElementById("question_content").style.visibility = "visible";
    document.getElementById("shift").style.display = "none";
    document.getElementById("input_box").style.display = "block";
  }
}