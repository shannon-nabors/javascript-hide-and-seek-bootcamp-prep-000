/*function getFirstSelector(selector) {
  var selection = (document.querySelector(selector));
  return(selection);
}*/

function getFirstSelector(selector) {
  var selection = (document.querySelector(selector));
  return(selection);
}

function nestedTarget() {
  var nested = (document.getElementById('nested'));
  var target = (document.querySelector(nested.target));
  return target;
}

function increaseRankBy(n) {
  
}

function deepestChild() {
  var deepChild = (document.querySelector('#grand-node div div div div'));
  return deepChild;
}