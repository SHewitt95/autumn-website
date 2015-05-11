var photos = document.getElementsByClassName("slide-img");
var currentPhoto = 0;

function changeSlide(number) {
  // Remove current photo's "current-photo" id.
  photos[currentPhoto].id = "";

  // Increment to next photo in array of photos.
  // Uses modulo addition in order to have circular array.
  currentPhoto = (currentPhoto + number) % photos.length;

  // If currentPhoto is negative, reset to end of array.
  if (currentPhoto < 0) {
    currentPhoto = photos.length - 1;
  }

  // Add "current-photo" id to new photo.
  photos[currentPhoto].id = "current-photo";
}
