const body = document.getElementsByTagName('body')[0];
const html= document.getElementsByTagName('html')[0];
function apply_height(){

  // if (window.innerHeight > 900){
  //   body.style.maxWidth= (window.innerWidth*1/2)+'px';
  //   body.style.height= (window.innerHeight*0.8)+'px';
  //   html.style.height= window.innerHeight+'px';
  //   // html.style.alignItems='center';
  //   // html.style.justifyItems='center';
  //   body.style.margin="0 auto";
  //
  // }else{
  //   // body.style.minWidth= '320px';
  //   // body.style.maxWidth=' 400px';
  //   body.style.height= window.innerHeight+'px';
  //   body.style.margin= '0 auto';
  //   // body.style.marginTop = 0;
  // }0
  body.style.height= window.innerHeight + 'px';

  // bodyheightwindow.style.margin='apply_height';

}
  
window.onload= apply_height();