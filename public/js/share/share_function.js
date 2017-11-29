function setPositionToEverest()
          {
            earth.setView([27.988056, 86.925278]);
          }

function flyToJapan()
            {
            //earth.fitBounds([[22, 122], [48, 154]]);
            //earth.panTo([33.572162, -112.087966], {heading: 0, zoom: 10000, tilt: 15, duration: 1});

            earth.panInsideBounds([[33.572162, -112.087966], [30.572162, -111.087966]],
                {heading: 0, tilt: 15, duration: 1});


            }

var world_spin;
function spin()
          {
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

function shuffle_question() {
  topics[] = window.sessionStorage.topics;
  random_question = "What would happen to "
  var x = Math.floor((Math.random() * 12));
  random_question += topics[x];
  
  random_question += " here in the year 2050?";

  document.getElementById("random_question").textContent=random_question;
}

function checkValid() {
  var validSubmit = document.getElementById("sharesubmit");
  var location = true, title = true, story = true;
  window.sessionStorage.selectedLoc = document.getElementById("location").value;

  if (document.getElementById("location").value == "Choose your location...")
    location = false;
  else
    document.getElementById("shift").style.visibility = "visible";
  if (document.getElementById("title").value == "")
    title = false;
  if (document.getElementById("textarea1").value == "")
    story = false;
  
  // Require all three variables to be true for button to appear
  if (location == true && title == true && story == true)
    validSubmit.style.visibility = "visible";
  else
    validSubmit.style.visibility = "hidden";
}

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
}
function hide_arrows() {
  document.getElementById("arrow1up").style.visibility = "hidden";
  document.getElementById("arrow1down").style.visibility = "hidden";
  document.getElementById("arrow2up").style.visibility = "hidden";
  document.getElementById("arrow2down").style.visibility = "hidden";
  document.getElementById("arrow3up").style.visibility = "hidden";
  document.getElementById("arrow3down").style.visibility = "hidden";
  document.getElementById("arrow4up").style.visibility = "hidden";
  document.getElementById("arrow4down").style.visibility = "hidden";
}

function updateTemps(locationStr) {
  var locations[] = window.sessionStorage.locations;
  console.log(locationStr);
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
      document.getElementById("rain").innerHTML = locations[i][1][2] + "%";
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
  var locations = window.sessionStorage.locations;
  var i = window.sessionStorage.curr_location_index;
  // Going from 2017 to 2050
  if (currentTemps == 0) {
    if (locations[i][2][0] != -200) {
      document.getElementById("min").innerHTML = locations[i][2][0];
      if (locations[i][1][0] > locations[i][2][0])
        document.getElementById("arrow1down").style.visibility = "visible";
      else
        document.getElementById("arrow1up").style.visibility = "visible";
    }
    
    if (locations[i][2][1] != -200) {
      document.getElementById("max").innerHTML = locations[i][2][1];
      if (locations[i][1][1] > locations[i][2][1])
        document.getElementById("arrow2down").style.visibility = "visible";
      else
        document.getElementById("arrow2up").style.visibility = "visible";
    }

    if (locations[i][2][2] != -200) {
      document.getElementById("rain").innerHTML = locations[i][2][2] + "%";
      if (locations[i][1][2] > locations[i][2][2])
        document.getElementById("arrow3down").style.visibility = "visible";
      else
        document.getElementById("arrow3up").style.visibility = "visible";
    }

    if (locations[i][2][3] != -200) {
      document.getElementById("plant").innerHTML = locations[i][2][3] + "%";
      if (locations[i][1][3] > locations[i][2][3])
        document.getElementById("arrow4down").style.visibility = "visible";
      else
        document.getElementById("arrow4up").style.visibility = "visible";
    }
    document.getElementById("shift_text1").innerHTML = 2050;
    document.getElementById("shift_text2").innerHTML = 2017;
    window.sessionStorage.currentTemps = 1;
  }
  // Going back from 2050 to 2017, hide the arrows
  else {
    hide_arrows();
    document.getElementById("min").innerHTML = locations[i][1][0];
    document.getElementById("max").innerHTML = locations[i][1][1];
    document.getElementById("rain").innerHTML = locations[i][1][2] + "%";
    document.getElementById("plant").innerHTML = locations[i][1][3] + "%";
    document.getElementById("shift_text1").innerHTML = 2017;
    document.getElementById("shift_text2").innerHTML = 2050;
    window.sessionStorage.currentTemps = 0;
  }
}

function saveStory() {
  window.sessionStorage.recentStory = document.getElementById("textarea1").value;
  window.sessionStorage.recentLoc = document.getElementById("location").value;
  window.sessionStorage.recentTitle = document.getElementById("title").value;
}