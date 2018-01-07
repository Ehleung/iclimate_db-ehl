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

function getStories(location) {
    closeLocation();
    // console.log("location = " + location); // ensure that location is being passed correctly
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        // console.log("ready="+xhr.readyState + "\tstatus="+xhr.status); // check the status of xhr
        if (xhr.readyState == 4 && xhr.status == 200) {
            var array = JSON.parse(this.responseText);
            for (var i = 0; i < array.length; i++) {
                var title = story = author = "";
                var obj = array[i];
                if (obj.hasOwnProperty("title"))
                    title = obj["title"];
                if (obj.hasOwnProperty("story"))
                    story = obj["story"];
                if (obj.hasOwnProperty("author"))
                    author = obj["author"];

                if (title && story && author != "") {
                    var authText = document.createTextNode("Author: " + author);
                    var titleText = document.createTextNode("Title: " + title);
                    var paragraph = document.createTextNode(story);

                    var div = document.createElement('div');
                    div.className = 'card';
                    div.setAttribute("style", "margin-bottom: 0px;");
                    div.id = "div" + i;

                    var innerdiv = document.createElement('div');
                    innerdiv.className = "card-content";
                    innerdiv.appendChild(authText);
                    innerdiv.appendChild(document.createElement('br'));
                    innerdiv.appendChild(titleText);
                    innerdiv.appendChild(document.createElement('br'));
                    innerdiv.appendChild(paragraph);

                    div.appendChild(innerdiv);
                    document.getElementById("cardholder").appendChild(div);
                };
            };
        };
    };
    xhr.open("GET", "/locations/"+location+"?callback=?", true);
    xhr.send();
}

function closeLocation() {
    // Removing all children from an element
    var element = document.getElementById("cardholder");
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
}