const showUser = document.getElementById("js-allUser");



function updateTotalUser(data){
  showUser.innerText= data.total;  
}


document.onload = fetch('/start')
    .then(response=>response.json()
    .then(data=>{
    updateTotalUser(data)
    }
    )
  )


