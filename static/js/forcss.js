const body = document.getElementsByTagName('body')[0];
const html= document.getElementsByTagName('html')[0];
function apply_height(){
  let px = 'px';

  let h= window.innerHeight;
  let w = window.innerWidth;
  // body.style.height =w +px;
  if (h/w > 2){
    body.style.height = w*2+px;
    body.style.width = w;

  }else if (h/w >1){
    body.style.height = h +px;
    body.style.maxWidth= w*1/2+px;
    body.style.margin= '0 auto';
  }else{
    body.style.minWidth= w*1/4 + px;

    body.style.maxWidth= w*1/3+px;
    body.style.margin= '0 auto';
    body.style.heigh = h + px;
  }

  // if (window.innerHeight > 900){
  //   body.style.maxWidth= (window.innerWidth*1/2)+'px';
  //   body.style.height= (window.innerHeight*8/10)+'px';
  //   html.style.height= window.innerHeight+'px';
  //   // html.style.alignItems='center';
  //   // html.style.justifyItems='center';
  //   body.style.margin="auto";
  
  // }else{
  //   // body.style.minWidth= '320px';
  //   // body.style.maxWidth=' 400px';
  //   body.style.height= window.innerHeight+'px';
  //   body.style.margin= '0 auto';
  //   // body.style.marginTop = 0;
  // }
  body.style.height= (window.innerHeight) + 'px';

  // bodyheightwindow.style.margin='apply_height';

}
  
window.onload= apply_height();

window.addEventListener('resize',apply_height);