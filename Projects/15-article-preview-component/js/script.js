

var popupBox = document.getElementById("sharePopup"),
  sharebtn = document.getElementById("share-btn");

sharebtn.addEventListener("click", toggleShare);

function toggleShare() {
  popupBox.classList.toggle('clicked');
}