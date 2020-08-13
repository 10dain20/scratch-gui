console.log('hello');

//MOUSE LOGGER(track mousemove and click events)
(function(){
  var mouse_log=" "

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

  (function(){
    var p = function(){
      console.log(mouse_log);
    };
    window.setInterval(p,500)
    p();
  })();
})();

//KEYBOARD LOGGER(track mousemove and click events)
(function(){
  var keyb_log=" "
  $(document).keydown(function(e) {

    keyb_log+= $.now()+" ";
    keyb_log+= e.keyCode + " ";
    keyb_log+= "keydown\n";
    window.console.log(keyb_log);
   })
})();

// //TUTORIAL LOGGER
// var tutorial_log = " "
// var tutorial_count=0
// const tutorial_play=document.getElementByClassName('w-vulcan-v2-button');
// console.log(tutorial_play)

// tutorial_play.addEventListener("click", function(event){
//   function tutorial_logger(e) { 
//     var tutorial_played = e.timeStamp;
//     tutorial_count+=1;
  
//     tutorial_log.push("Played:",tutorial_played);
//     tutorial_log.push("Count:",tutorial_count);
//   }
//   (function(){   
//     var q = function(){
//       console.log(tutorial_log);
//     };
//     window.setInterval(p,1000)
//     q();
//   }
// });                                                      
