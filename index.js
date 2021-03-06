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
  var target = (document.querySelector('#nested .target'));
  return target;
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');
  const firstList = rankedLists[0];
  const secondList = rankedLists[1];
  
  for (let i = 0; i < firstList.children.length; i++) {
    var currentRank = (parseInt(firstList.children[i].innerHTML));
    var newRank = currentRank + n;
    firstList.children[i].innerHTML = parseInt(newRank);
  }
      
  for (let i = 0; i < secondList.children.length; i++) {
    var cRank = (parseInt(secondList.children[i].innerHTML));
    var nRank = cRank + n;
    secondList.children[i].innerHTML = parseInt(nRank);
  }
}

function deepestChild() {
  var deepChild = (document.querySelector('#grand-node div div div div'));
  return deepChild;
}