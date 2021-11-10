
function increaseAnimation(i, id, number) {
  if((i <= number)){
    id.innerText = i.toLocaleString();
    setTimeout(()=>{increaseAnimation(i+1, id, number)}, 0.01);
  }

  }



function updateTotalUser(total){
  let showUser = document.getElementById("js-allUser");
  // let speed = data.total.toString().length();
  // console.log(speed)
  let i = total > 300? total-300: 0; 
  increaseAnimation(i,showUser, total);
  
  
}

let getTotalUser = ()=> {
  return fetch('/start')
  .then(response=>response.json())
      
}




document.onload = getTotalUserNumber.then(data=>{
  updateTotalUser(data.total.total)
  }
  )
    



