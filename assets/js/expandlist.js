/* Make list's items expandable and collapsable.
Copyright (c) TheElectronWill 2015 - All rights reserved.
*/
/* Expands a collapsed element and collapses an expanded one */
function toggleExpansion(event) {
  var id = event.id;
  var element = document.getElementById(id).nextElementSibling;//the element to toggle

  var currentDisplay = element.style.display;
  var newDisplay = (currentDisplay === "block") ? "none" : "block";
  element.style.display = newDisplay;
}
