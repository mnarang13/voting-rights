//checklist variable
var fullItemList = document.getElementById("my-list");

//event listener
if (fullItemList) {
  fullItemList.addEventListener("click", checkOffItem);
}

//function to change style when clicked
function checkOffItem(clicked) {
  if (clicked.target.tagName == "LI") {
    clicked.target.classList.toggle("all-done");
  }
}

