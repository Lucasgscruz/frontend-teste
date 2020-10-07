let dimensao = 6;
const max = 25600
const min = 2;
document.getElementById("view"). value = dimensao + "%";


// Change zoom info
function changeLabel(zoom){
  if(zoom == "in"){
    dimensao *= 2;
    document.getElementById("seletor").innerHTML = dimensao + "%";
    document.getElementById("view").value = dimensao + "%";
  }
  else if(zoom == "out"){
    dimensao /= 2;
    document.getElementById("seletor").innerHTML = dimensao + "%";
    document.getElementById("view").value = dimensao + "%";
  }
  else{
    dimensao = parseInt(zoom);
    document.getElementById("seletor").innerHTML = dimensao + "%";
    document.getElementById("view").value = dimensao + "%";
  }
}

// zoom by keyboard
function keyPress(event){
  let tecla = event.keyCode

  //Zoom in
  if(dimensao <= max){
    if(tecla == 61){
      let largura = $("#imgpos").width();
      let altura = $("#imgpos").height();
      $("#imgpos").width(largura*2);
      $("#imgpos").height(largura*2);
      changeLabel("in")
    }
  }

  //zoom out
  if(dimensao >= min){
    if(tecla == 45){
        let largura = $("#imgpos").width();
        let altura = $("#imgpos").height();
        $("#imgpos").width(largura/2);
        $("#imgpos").height(largura/2);
        changeLabel("out")
    }
  }

  // Zoom to fit
  if(tecla == 49){
    $("#imgpos").width(100);
    $("#imgpos").height(100);
    changeLabel(6);
  }

  // Zoom to 100%
  if(tecla == 48){
    $("#imgpos").width(800);
    $("#imgpos").height(800);
    changeLabel(100);
  }

  // keyboard input
  if(tecla == 13){  
    let zoom = document.getElementById("view").value;
    $("#imgpos").width(100 * parseInt(zoom)/100);
    $("#imgpos").height(100 * parseInt(zoom)/100);
    changeLabel(zoom);
  }
}


// zoom by mouse click
function toggleZoom(flag){

  //Zoom in
  if(dimensao <= max){
    if(flag == 'zoomin'){
      let largura = $("#imgpos").width();
      let altura = $("#imgpos").height();
      $("#imgpos").width(largura*2);
      $("#imgpos").height(largura*2);
      changeLabel("in")
    }
  }

  //zoom out
  if(dimensao >= min){
    if(flag == 'zoomout'){
      let largura = $("#imgpos").width();
      let altura = $("#imgpos").height();
      $("#imgpos").width(largura/2);
      $("#imgpos").height(largura/2);
      changeLabel("out")
    }
  }

  // Zoom to fit
  if(flag == 'fit'){
    $("#imgpos").width(100);
    $("#imgpos").height(100);
    changeLabel(6);
  }

  // Zoom to 50%
  if(flag == '50%'){
    $("#imgpos").width(500);
    $("#imgpos").height(500);
    changeLabel(50);
  }

  // Zoom to 100%
  if(flag == '100%'){
    $("#imgpos").width(800);
    $("#imgpos").height(800);
    changeLabel(100);
  }

  // Zoom to 200%
  if(flag == '200%'){
    $("#imgpos").width(1000);
    $("#imgpos").height(1000);
    changeLabel(200);
  }
}

// Drag and drop
dragElement(document.getElementById("mydiv"));
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


// Modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var btnClose = document.getElementById("closeBtn");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
btnClose.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}