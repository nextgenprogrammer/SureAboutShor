function hamMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
      visibilityToggle("comp-l1vzp300_video")
      visibilityToggle("text-line1")
      visibilityToggle("text-line2")
    } else {
      x.className = "topnav";
      visibilityToggle("comp-l1vzp300_video")
      visibilityToggle("text-line1")
      visibilityToggle("text-line2")
    }
  }


function visibilityToggle(element) {
  var x = document.getElementById(element);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
