/*var arrows = document.getElementsByClassName("arrow");
var slider = document.getElementById("slider");*/

var currentPhoto = 0;
var maxPhoto = 20;

function changeSlide(number) {
  // Fetches img tag in slider.
  var image = document.getElementById("img-in-slider");

  // Adds number (either 1 or -1) to currentPhoto.
  currentPhoto = currentPhoto + number;

  // Corrects currentPhoto if it exceeds # of total photos or is negative.
  if (currentPhoto < 0) {
    currentPhoto = maxPhoto;
  } else if (currentPhoto > maxPhoto) {
    currentPhoto = 0;
  }

  // Appends new currentPhoto number to the img tag in slider.
  var srcText = "img/slider-img/autumn" + currentPhoto + ".JPG";
  image.src = srcText;
}
