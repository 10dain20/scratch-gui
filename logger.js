
// console.log('hello');

// // log mouse x, y coordinates
// (function(){
//   var mouse_log=" ";

//   $(document).mousemove(function(e) {
//     mouse_log += $.now() + " ";
//     mouse_log += e.pageX + " ";
//     mouse_log += e.pageY + " ";
//     mouse_log += "mousemove\n";
//   });

//   $(document).click(function(e) {
//     mouse_log += $.now() + " ";
//     mouse_log += e.pageX + " ";
//     mouse_log += e.pageY + " ";
//     mouse_log += "mouseclick\n"; 
//   });
//   console.log(mouse_log);
// })();

//log dragged blocks
function init(){
  console.log('ready');
  var dragged = function() {
    alert('clicked');
  }
  var blocks = document.getElementsByClassName('blocklyDraggable');
  for (var i=0; i<blocks.length; i++) {
    console.log('block');
    blocks[i].addEventListener('click', dragged, false);
  }
};

// var blocks = document.getElementsByClassName('blocklyDraggable');
// var dragged = function() {
//   console.log('clicked');
//   var attribute = this.getAttribute("data-id");
//   console.log(attribute);
// }
// for (var i=0; i<blocks.length; i++) {
//   blocks[i].addEventListener('click', dragged, true);
// }