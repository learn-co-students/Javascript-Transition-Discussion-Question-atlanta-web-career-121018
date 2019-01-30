document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('#save_lincoln')
  const interval = document.querySelector('#interval')
  const parsedInterval = parseInt(interval.value)
  const fadeTarget = document.querySelector('#foreground')
  const lincoln = document.querySelector('#hidden-message')
 
  button.addEventListener('click', function(parsedInterval) {
    if ( isNaN( parsedInterval ) ) {
      parsedInterval = 100
    }
    var opacity = 1;
    var timer = setInterval(function(){
      if(opacity < 0.1){
        clearInterval(timer);
        fadeTarget.src = lincoln.src;
        fadeIn(fadeTarget);
      }
      fadeTarget.style.opacity = opacity;
      opacity -=  opacity * 0.01;
    }, parsedInterval);
  })
}) 
