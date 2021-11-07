const body = document.getElementsByTagName('body')[0];

function apply_height(){
  body.style.height= screen.height+'px';
}
  
window.onload= apply_height();