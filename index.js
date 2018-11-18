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
  
  let children = firstList.children;
    for (let i = 0; i < children.length; i++) {
      let currentRank = (parseInt(children[i].innerHTML));
      currentRank = currentRank + n;
    }
      
  let children = secondList.children;
    for (let i = 0; i < children.length; i++) {
      let currentRank = (parseInt(children[i].innerHTML));
      currentRank = currentRank + n;
    }
}

function deepestChild() {
  var deepChild = (document.querySelector('#grand-node div div div div'));
  return deepChild;
}