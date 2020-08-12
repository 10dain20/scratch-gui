
console.log('hello');

// log mouse x, y coordinates
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

// log dragged blocks
document.addEventListener('DOMContentLoaded', init, false);
function init(){
  function dragged () {
    console.log('dragged');
  }
  var block = document.getElementsByClassName('blocklyDraggable');
  block.addEventListener('drag', dragged, true);
};