document.addEventListener(“DOMContentLoaded”, () => {
  // console.log(“The DOM content has loaded!“)
  const button = document.querySelector(‘#save_lincoln’)
  const interval = document.querySelector(‘#interval’)
  const parsedInterval = parseInt(interval.value)
  let fadeTarget = document.querySelector(‘#foreground’)
  let lincoln = document.querySelector(‘#background’)
 
  const callback = function() {
    fadeTarget.src = lincoln.src;
    fadeIn(fadeTarget);
  }

  button.addEventListener(‘click’, function(event) {
      event.preventDefault()
      // console.log(“In Function save Lincoln”)
      var opacity = 1;
      var timer = setInterval(function(){
        if(opacity < 0.1){
          clearInterval(timer);
          callback(); //this executes the callback function!
        }
        fadeTarget.style.opacity = opacity;
        opacity -=  0.1;
      }, parsedInterval);
  }

}) 
