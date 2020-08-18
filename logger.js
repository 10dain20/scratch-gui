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
  
  // (function(){
  //   var p = function(){
  //     console.log(mouse_log);
  //   };
  //   window.setInterval(p,500)
  //   p();
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
// function detectButton(event){
//   var clickedItem=event.target;
//   if (clickedItem.tagname =='svg'){
//     console.log(clickedItem.className)
//   };
// };                                              
