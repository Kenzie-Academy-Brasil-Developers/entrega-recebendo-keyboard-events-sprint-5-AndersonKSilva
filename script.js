'use strict';
let box = document.getElementById("box")
let boxLeft=200;
let boxTop=200
let rotate= 0;
document.addEventListener("keydown", (event) => {
  const keyName = event.key;
  //console.log('keydown event\n' + 'key: ' + keyName);
  if(keyName==="ArrowRight"){
    boxLeft+=10;
    box.style.left=boxLeft+"px"
    rotate+=10;
    box.style.transform = `rotate(${rotate}deg)`
  }
  if(keyName==="ArrowDown"){
    boxTop+=10;
    box.style.top=boxTop+"px"
    rotate+=10;
    box.style.transform = `rotate(${rotate}deg)`
  }
  if(keyName==="ArrowUp"){
    boxTop-=10;
    box.style.top=boxTop+"px"
    rotate-=10;
    box.style.transform = `rotate(${rotate}deg)`
  }
  if(keyName==="ArrowLeft"){
    boxLeft-=10;
    box.style.left=boxLeft+"px"
    rotate-=10;
    box.style.transform = `rotate(${rotate}deg)`
  }
});