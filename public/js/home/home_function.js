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
                      earth.setCenter([c[0], c[1] + 0.1]);
                      world_spin = requestAnimationFrame(animate);

                      });
          }

function stop_spin (){cancelAnimationFrame(world_spin);}

function showLogin() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}
function closeLogin() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function showAbout() {
  var aboutModal = document.getElementById("about_modal");
  aboutModal.style.display = "block";
}
function closeAbout() {
  var aboutModal = document.getElementById("about_modal");
  aboutModal.style.display = "none";
}

function closeError() {
  var error_modal = document.getElementById("myError_Modal");
  error_modal.style.display = "none";
}