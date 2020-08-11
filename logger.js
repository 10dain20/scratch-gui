
console.log('hello');

//mouse tracking 
(function(){
  var mouse_log=" ";

  $(document).mousemove(function(e) {
    mouse_log += $.now() + " ";
    mouse_log += e.pageX + " ";
    mouse_log += e.pageY + " ";
    mouse_log += "mousemove\n";
  });

  $(document).click(function(e) {
    mouse_log += $.now() + " ";
    mouse_log += e.pageX + " ";
    mouse_log += e.pageY + " ";
    mouse_log += "mouseclick\n"; 
  });
  console.log(mouse_log);
})();



//tutorial log

// var tutorial_log = []
// const tutorial_play=document.getElementByClassName('w-big-play-button');

// tutorial_play.addEventListener("click", function(event){
//   function playedTimeStamp(e) { 
//     var tutorial_played1 = e.timeStamp;
//     tutorial_log.push(tutorial_played1)

// console.log(tutorial_log);