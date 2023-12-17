// Disable right click
document.oncontextmenu = function (e) {
  e.preventDefault();
  return false;
};

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.keyCode == 85) {
    event.preventDefault();
  }
  if (event.keyCode == 123) {
    event.preventDefault();
  }
  if (event.ctrlKey && event.keyCode == 73) {
    event.preventDefault();
  }
  if (event.ctrlKey && event.keyCode == 67) {
    event.preventDefault();
  }
  if (event.ctrlKey && event.keyCode == 74) {
    event.preventDefault();
  }
  if (event.ctrlKey && event.keyCode == 85) {
    event.preventDefault();
  }
});
