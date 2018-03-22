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

function showAbout() {
  var aboutModal = document.getElementById("about_modal");
  aboutModal.style.display = "block";
}
function closeAbout() {
  var aboutModal = document.getElementById("about_modal");
  aboutModal.style.display = "none";
}