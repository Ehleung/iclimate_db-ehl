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
random_question ="What would happen to "
var x = Math.floor((Math.random() * 10) + 1);
if (x == 1) { random_question = random_question + "cacti";;}
else if (x == 2) { random_question = random_question + "native peoples";}
else if (x == 3) { random_question = random_question + "babys";}
else if (x == 4) { random_question = random_question + "cats";}
else if (x == 5) { random_question = random_question + "fluffy unicorns";}
else if (x == 6) { random_question = random_question + "politicians";}
else if (x == 7) { random_question = random_question + "dogs";}
else if (x == 8) { random_question = random_question + "teachers";}
else if (x == 9) { random_question = random_question + "cats";}
else if (x == 10) { random_question = random_question + "dinosaurs";}
random_question = random_question + " here in the year 2050?";

document.getElementById("random_question").textContent=random_question;

}