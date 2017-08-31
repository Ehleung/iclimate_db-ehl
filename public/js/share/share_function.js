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

function shuffle_question()
{
random_question = "What would happen to "
var x = Math.floor((Math.random() * 12));

switch(x) {
  case 0:
    random_question += "children";
    break;
  case 1:
    random_question += "people";
    break;
  case 2:
    random_question += "plant life";
    break;
  case 3:
    random_question += "large animals";
    break;
  case 4:
    random_question += "small animals";
    break;
  case 5:
    random_question += "insects";
    break;
  case 6:
    random_question += "microbes";
    break;
  case 7:
    random_question += "businesses";
    break;
  case 8:
    random_question += "tourism";
    break;
  case 9:
    random_question += "buildings";
    break;
  case 10:
    random_question += "water resources";
    break;
  default:
    random_question += "daily living";
}
random_question += " here in the year 2050?";

document.getElementById("random_question").textContent=random_question;

}