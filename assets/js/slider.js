/* Slider for the latest news.
Copyright (c) TheElectronWill 2015 - All rights reserved.
*/
var htmlElement = document.getElementById('news-slider');
function getNodes() {
  var array = [];
  for (var i = 0; i < htmlElement.childNodes.length; i++) {
    var node = htmlElement.childNodes[i];
//  console.log("childNodes[" + i + "] = " + node.tagName + " - " + node.id + " (" + node.nodeType + ")");
    if(node.nodeType == Node.ELEMENT_NODE) {
      array.push(node);
    }
  }
  return array;
};
var htmlNodes = getNodes();
var current = 0;
var working = false;
function fadeIn(node) {
  node.style.opacity = 0;
  node.style.display = 'block';
  var opacity = 0;
  var taskFadeIn = window.setInterval(function() {
    if(opacity > 0.95) {
      node.style.opacity=1;
      window.clearInterval(taskFadeIn);
      working=false;
    } else {
      opacity += 0.05;
      node.style.opacity = opacity;
    }
  }, 50);
}
function fadeOut(currentNode, nextNode) {
  working=true;
  var opacity = 1.0;
  var taskFadeOut = window.setInterval(function() {
    if(opacity < 0.05) {
      currentNode.style.display = 'none';
      window.clearInterval(taskFadeOut);
      fadeIn(nextNode);
    } else {
      opacity -= 0.05;
      currentNode.style.opacity = opacity;
    }
  }, 50);
}
function show(currentIndex, nextIndex) {
  if(working){
    return;
  }
  var currentNode = htmlNodes[currentIndex];
  var nextNode = htmlNodes[nextIndex];
  fadeOut(currentNode, nextNode);
  current = nextIndex;
};
function showNext() {
  var next = current+1;
  if(next >= htmlNodes.length){
    next=0;
  }
  show(current, next);
};
function showPrev() {
  var prev = current-1;
  if(prev < 0) {
    prev = htmlNodes.length-1;
  }
  show(current, prev);
};
