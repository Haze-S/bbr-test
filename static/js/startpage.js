
function increaseAnimation(i, id, number) {
  if((i <= number)){
    id.innerText = i.toLocaleString();
    setTimeout(()=>{increaseAnimation(i+1, id, number)}, 0.01);
  }

  }



function updateTotalUser(data){
  let showUser = document.getElementById("js-allUser");
  // let speed = data.total.toString().length();
  // console.log(speed)
  let i = data.total > 300? data.total-300: 0; 
  increaseAnimation(i,showUser, data.total);
  
  
}


document.onload = fetch('/start')
    .then(response=>response.json()
    .then(data=>{
    updateTotalUser(data)
    }
    )
  )


