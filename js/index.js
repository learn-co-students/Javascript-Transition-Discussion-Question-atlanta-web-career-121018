// document.addEventListener('DOMContentLoaded', function() {
//   const button = document.querySelector(‘#save_lincoln’)
//   const interval = document.querySelector(‘#interval’)
//   const parsedInterval = parseInt(interval.value)
//   let fadeTarget = document.querySelector(‘#foreground’)
//   let lincoln = document.querySelector(‘#background’)
 
//   const callback = function() {
//     fadeTarget.src = lincoln.src;
//     fadeIn(fadeTarget);
//   }

//   button.addEventListener(‘click’, function(event) {
//       event.preventDefault()
//       var opacity = 1;
//       var timer = setInterval(function(){
//         if(opacity < 0.1){
//           clearInterval(timer);
//           callback();
//         }
//         fadeTarget.style.opacity = opacity;
//         opacity -=  0.1;
//       }, parsedInterval);
//   }

// }) 
