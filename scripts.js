

function show_share() {
  var x = document.getElementById("share_box");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}


// tried to use jQuery but it messed up the layout.
// function show_share() {
//   $('#share_box').toggle();
// }