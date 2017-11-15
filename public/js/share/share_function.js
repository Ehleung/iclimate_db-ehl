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

topics = [
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
  random_question = "What would happen to "
  var x = Math.floor((Math.random() * 12));
  random_question += topics[x];
  
  random_question += " here in the year 2050?";

  document.getElementById("random_question").textContent=random_question;
}

function checkValid() {
  var validSubmit = document.getElementById("sharesubmit");
  var location, title, story = true
  
  if (document.getElementById("location").value == "Choose")
    location = false
  if (document.getElementById("title").value == null)
    title = false
  if (document.getElementById("textarea1").value == null || document.getElementById("textarea1").value == "I imagine...")
    story = false
  
  // Require all three variables to be true for button to appear
  if (location && title && story)
    validSubmit.style.visibility = "visible"
  else
    validSubmit.style.visibility = "hidden"
}

function saveStory() {
  window.sessionStorage.recentStory = document.getElementById("textarea1").value;
  window.sessionStorage.recentLoc = document.getElementById("location").value;
  window.sessionStorage.recentTitle = document.getElementById("title").value;
}