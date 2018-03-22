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
  random_question = "What would happen to "
  var x = Math.floor((Math.random() * topics.length));
  random_question += topics[x];
  
  random_question += " here in the year 2050?";

  document.getElementById("random_question").textContent=random_question;
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
  else
    document.getElementById("shift").style.visibility = "visible";
  if (document.getElementById("title").value == "")
    title = false;
  if (document.getElementById("textarea1").value == "")
    story = false;
  if (document.getElementById("user").value == "")
    name = false;
  
  // Require all three variables to be true for button to appear
  if (location == true && title == true && story == true && name == true)
    validSubmit.style.visibility = "visible";
  else
    validSubmit.style.visibility = "hidden";
}

// Called when a location is first selected. 
function hide_all() {
  document.getElementById("min").style.visibility = "hidden";
  document.getElementById("icon1").style.visibility = "hidden";
  document.getElementById("max").style.visibility = "hidden";
  document.getElementById("icon2").style.visibility = "hidden";
  document.getElementById("rain").style.visibility = "hidden";
  document.getElementById("icon3").style.visibility = "hidden";
  document.getElementById("plant").style.visibility = "hidden";
  document.getElementById("icon4").style.visibility = "hidden";
  document.getElementById("shift").style.visibility = "hidden";
  document.getElementById("shift_text1").style.visibility = "hidden";
  document.getElementById("shift_text2").style.visibility = "hidden";
  // Init clickedData to track whether a user has clicked on new data or not.
  document.getElementById("question_content").style.visibility = "hidden";
  window.sessionStorage.clickedData = 0;
}
function hide_arrows() {
  document.getElementById("arrow1up").style.visibility = "hidden";
  document.getElementById("arrow1down").style.visibility = "hidden";
  document.getElementById("minus1").style.visibility = "hidden";
  document.getElementById("arrow2up").style.visibility = "hidden";
  document.getElementById("arrow2down").style.visibility = "hidden";
  document.getElementById("minus2").style.visibility = "hidden";
  document.getElementById("arrow3up").style.visibility = "hidden";
  document.getElementById("arrow3down").style.visibility = "hidden";
  document.getElementById("minus3").style.visibility = "hidden";
  document.getElementById("arrow4up").style.visibility = "hidden";
  document.getElementById("arrow4down").style.visibility = "hidden";
  document.getElementById("minus4").style.visibility = "hidden";
} 
function updateTemps(locationStr) {
  // console.log(locationStr);
  window.sessionStorage.currentTemps = 0;
  var i;
  for (i = 0; i < locations.length; i++) {
    if (locations[i][0] == locationStr)
      break
  }
  window.sessionStorage.curr_location_index = i;

  hide_all();
  hide_arrows();

  if (locationStr != "Choose your location...") {
    document.getElementById("shift").style.visibility = "visible";
    document.getElementById("shift_text1").style.visibility = "visible";
    document.getElementById("shift_text2").style.visibility = "visible";

    if (locations[i][1][0] != -200) {
      document.getElementById("min").innerHTML = locations[i][1][0];
      document.getElementById("min").style.visibility = "visible";
      document.getElementById("icon1").style.visibility = "visible";
    }
    if (locations[i][1][1] != -200) {
      document.getElementById("max").innerHTML = locations[i][1][1];
      document.getElementById("max").style.visibility = "visible";
      document.getElementById("icon2").style.visibility = "visible";
    }
    if (locations[i][1][2] != -200) {
      document.getElementById("rain").innerHTML = locations[i][1][2] + "in";
      document.getElementById("rain").style.visibility = "visible";
      document.getElementById("icon3").style.visibility = "visible";
    }
    if (locations[i][1][3] != -200) {
      document.getElementById("plant").innerHTML = locations[i][1][3] + "%";
      document.getElementById("plant").style.visibility = "visible";
      document.getElementById("icon4").style.visibility = "visible";
    }
  }
}
function newTemps(currentTemps) {
  // var locations = window.sessionStorage.locations;
  var i = window.sessionStorage.curr_location_index;
  // Going from 2017 to 2050
  if (currentTemps == 0) {
    if (locations[i][2][0] != -200) {
      document.getElementById("min").innerHTML = locations[i][2][0];
      if (locations[i][1][0] > locations[i][2][0])
        document.getElementById("arrow1down").style.visibility = "visible";
      else if (locations[i][1][0] < locations[i][2][0])
        document.getElementById("arrow1up").style.visibility = "visible";
    }
    if (locations[i][2][1] != -200) {
      document.getElementById("max").innerHTML = locations[i][2][1];
      if (locations[i][1][1] > locations[i][2][1])
        document.getElementById("arrow2down").style.visibility = "visible";
      else if (locations[i][1][1] < locations[i][2][1])
        document.getElementById("arrow2up").style.visibility = "visible";
    }
    if (locations[i][2][2] != -200) {
      document.getElementById("rain").innerHTML = locations[i][2][2] + "in";
      if (locations[i][1][2] > locations[i][2][2])
        document.getElementById("arrow3down").style.visibility = "visible";
      else if (locations[i][1][2] < locations[i][2][2])
        document.getElementById("arrow3up").style.visibility = "visible";
    }
    if (locations[i][2][3] != -200) {
      document.getElementById("plant").innerHTML = locations[i][2][3] + "%";
      if (locations[i][1][3] > locations[i][2][3])
        document.getElementById("arrow4down").style.visibility = "visible";
      else if (locations[i][1][3] < locations[i][2][3])
        document.getElementById("arrow4up").style.visibility = "visible";
    }
    document.getElementById("shift_text1").innerHTML = 2050;
    document.getElementById("shift_text2").innerHTML = 2017;
    window.sessionStorage.currentTemps = 1;
    window.sessionStorage.clickedData = 1;

    if (window.sessionStorage.clickedData == 1)
      document.getElementById("question_content").style.visibility = "visible";
  }
  // Going back from 2050 to 2017, hide the arrows
  else {
    hide_arrows();
    document.getElementById("min").innerHTML = locations[i][1][0];
    document.getElementById("max").innerHTML = locations[i][1][1];
    document.getElementById("rain").innerHTML = locations[i][1][2] + "in";
    document.getElementById("plant").innerHTML = locations[i][1][3] + "%";
    document.getElementById("shift_text1").innerHTML = 2017;
    document.getElementById("shift_text2").innerHTML = 2050;
    window.sessionStorage.currentTemps = 0;
  }
}
function resetYear() {
  // If the user switches locations, it will reset the year and the clicked data var
  window.sessionStorage.clickedData = 0;
  document.getElementById("shift_text1").innerHTML = 2017;
  document.getElementById("shift_text2").innerHTML = 2050;
}