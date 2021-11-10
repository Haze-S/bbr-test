// last: 2021.11.2.23:12
// Team: FogNerdCross
// resultBtn hidden/show

const resultBtn = document.getElementById('resultBtn');
let mbties = { E: 0, I:0, J: 0, P: 0, S: 0, N: 0 };

// testBtnClick 클릭 시 응답결과를 저장하기 위함
function saveResult(name, value){
  mbties[name] += parseInt(value);
  console.log(mbties);

  }


// testBtnClick(e)과 doSubmit(e)는
// 질문의 버튼을 클릭시 발생한다.
// btnclick=은 btn의 클릭이벤트
// doSubmit은 form의 submit이벤트이다.

// 버튼 클릭시 button의 이벤트

function testBtnClick(e) {
  // 버튼의 {이름:value}객체를 localstorage에 저장하는 함수
  saveResult(e.target.name, e.target.value);
  // localStorage.setItem('now', e.target.name);
}
  // TODO:/
// }


// 퀘스트 문제를 파라미터로 받아서 돔 안에 텍스트를 바꿔주기 위함
function setQuest() {
  let now = parseInt(localStorage.getItem('now'));
  let quest = {... JSON.parse(localStorage.getItem('quest'))[now]};
  // TODO quest의 내용을 서버에서 받아오기때문에, 어떻게 바뀔지는 기다려 보아야 함
  let questNumber = document.getElementById('js-questNumber');
  let questText = document.getElementById("js-questText");
  let btnlist = document.getElementsByClassName("js-test-form_btn");
  
  questNumber.innerText = 'Q'+ (parseInt(now)+1)+ '.';
  questText.innerText= quest.question;
  // localStorage.setItem('nowType',quest.type);
  
  localStorage.setItem('now', now+1);
  for(let i = 0; i<3; i++){
    btnlist[i].name = quest.type;
  }

}


//quest 받는 함수
//[[promise]] 와 callback
//TODo 1: MDN promise 보기 

let getQuest = ()=>{
  return fetch('./quest')
  .then(response=>response.json())
  
  // Promise.resolve({ "quest": [ { "count": 1, "question": "\uc77c\uc815\uc774 \uc5c6\ub294 \uc8fc\ub9d0\uc758 \ub098\ub294 \ub2e8\ud1a1\uc744 \ud1b5\ud574\uc11c \uce5c\uad6c\ub4e4\uacfc \uc57d\uc18d\uc744 \uc7a1\ub294\ub2e4.", "type": "E" }, { "count": 2, "question": "\ub370\uc774\ud2b8 \uc911 \uae38\uc5d0\uc11c \uc5f0\uc778\uc758 \uce5c\uad6c\ub97c \ub9cc\ub09c\ub2e4\uba74 \ub098\ub294 \uc790\uc5f0\uc2a4\ub7fd\uac8c \uc6c3\uc73c\uba70 \uc778\uc0ac\ud55c\ub2e4.", "type": "E" }, { "count": 3, "question": "\ub098\uc758 \ud300\uc740 \uc990\uac70\uc6b4 \ubd84\uc704\uae30\ubcf4\ub2e4 \ud655\uc2e4\ud55c \uc131\uacfc\uac00 \uc788\uc5b4\uc57c \ud55c\ub2e4.", "type": "N" }, { "count": 4, "question": "\uc18c\ud48d\uc744 \uac00\ub294 \ub2f9\uc77c! \ub098\ub294 \uadf8\ub0a0 \uac00\uc7a5 \ub04c\ub9ac\ub294 \uc637\uc744 \uc785\uace0 \ub098\uac04\ub2e4.", "type": "P" }, { "count": 5, "question": "\ub098\ub294 \uac00\uc774\ub4dc \ub77c\uc778\uc774 \uc5c6\ub294, \uc790\uc720\ub85c\uc6b4 \ud615\uc2dd\uc758 \uacfc\uc81c\ub97c \uc88b\uc544\ud55c\ub2e4.", "type": "N" }, { "count": 6, "question": "\ub098 \uc0b4\uca98\uc5b4? \ub77c\ub294 \uc18c\ub9ac\ub97c \ub4e4\uc73c\uba74 \uc544\ub2c8\ub77c\uace0 \ubd80\uc815\ud574\uc8fc\uace0 \uc2f6\ub2e4.", "type": "S" }, { "count": 7, "question": "\uac11\uc791\uc2a4\ub7ec\uc6b4 \uc5ec\ud589\uc73c\ub85c \ud63c\uc790 \uc624\uac8c \ub41c \ub0af\uc120 \uc7a5\uc18c, \ub098\ub294 \ud63c\uc790 \uc870\uc6a9\ud788 \uc5ec\ud589\uc744 \uc990\uae34\ub2e4.", "type": "I" }, { "count": 8, "question": "\uc7a0\ub4e4\uae30 \uc804, \uac00\uc871\uacfc \ud1b5\ud654\uc5d0\uc11c \ub098\ub294 \uad6c\uccb4\uc801\uc73c\ub85c \uc788\uc5c8\ub358 \uc77c\uc744 \uc598\uae30\ud55c\ub2e4.", "type": "S" }, { "count": 9, "question": "\uce5c\uad6c\uac00 \uc5b4\uc81c \ub2e4\ub140\uc654\ub358 \ub9db\uc9d1\uc758 \uc704\uce58\ub97c \ubb3c\uc5b4\ubcfc \ub54c, \uc2dd\ub2f9 \uc606\uc5d0 \uc788\ub294 \ud070 \uac74\ubb3c\ubd80\ud130 \uc54c\ub824\uc900\ub2e4.", "type": "N" }, { "count": 10, "question": "\ubc84\uc2a4\ub97c \uae30\ub2e4\ub9b4 \ub54c \ub098\ub294 \uc624\ub298 \ub0a8\uc740 \uc77c\uc815\uc5d0 \ub300\ud574 \uc0dd\uac01\ud55c\ub2e4", "type": "S" }, { "count": 11, "question": "\uc544\uc9c1 \uc5ec\ud589 \ub9c8\uc9c0\ub9c9 \ub0a0\uc758 \uc77c\uc815\uc744 \uc9dc\uc9c0 \ubabb \ud55c \ub098\ub294 \uacc4\uc18d \ubbf8\ub8e8\ub2e4 \uc804 \ub0a0 \uc7a0\ub4e4\uae30 \uc9c1\uc804\uc5d0 \uc9e0\ub2e4", "type": "P" }, { "count": 12, "question": "\uac00\ub824\ub358 \uc2dd\ub2f9\uc774 \ubb38\uc744 \ub2eb\uc558\uc744 \ub54c, \ub098\ub294 \ub9db\uc9d1\uc744 \ub2e4\uc2dc \uac80\uc0c9\ud574\uc11c \ucc3e\uc544\ubcf8\ub2e4.", "type": "J" }, { "count": 13, "question": "\uc7ac\ubc0c\uc5c8\ub358 \uc720\ud29c\ube0c\ub97c \uce5c\uad6c\uc5d0\uac8c \ucd94\ucc9c\ud574\uc904 \ub54c, \uae30\uc2b9\uc804\uacb0\uc744 \uc0c1\uc138\ud788 \uc124\uba85\ud574\uc900\ub2e4.", "type": "S" }, { "count": 14, "question": "\ud55c \ub2ec \ubb34\ub8cc \uccb4\ud5d8 \ud6c4, \uad6c\ub3c5 \uc11c\ube44\uc2a4\uac00 \ub9c8\uc74c\uc5d0 \ub4e4\uc9c0 \uc54a\uc73c\uba74 \uc885\ub8cc \uc2dc\uc810\uc5d0 \uce7c\uac19\uc774 \ud574\uc9c0\ud55c\ub2e4.", "type": "J" }, { "count": 15, "question": "\ub098\ub294 \ub0b4\uac00 \uc4f0\ub294 \uc694\uae08\uc81c\uac00 \uc5b4\ub5a4 \uc694\uae08\uc81c\uc774\uba70 \uc694\uae08\uc774 \uc5bc\ub9c8\uc778\uc9c0 \uc54c\uace0\uc788\ub2e4.", "type": "J" }, { "count": 16, "question": "\ub108\ubb34 \ud798\ub4e4\uc5c8\ub358 \ud558\ub8e8, \uce5c\uad6c\uc5d0\uac8c \uc804\ud654\uac00 \uc624\uba74 \uc774\uc81c \uc26c\uace0 \uc2f6\uc73c\ub2c8 \uad73\uc774 \ubc1b\uc9c0 \uc54a\ub294\ub2e4.", "type": "I" }, { "count": 17, "question": "\ub098\ub294 \ub9ce\uc740 \uc0ac\ub78c\ub4e4\uc774 \ub0b4 SNS \uacc4\uc815\uc744 \uc77d\uc5b4\uc8fc\uc5c8\uc73c\uba74 \uc88b\uaca0\ub2e4.", "type": "E" }, { "count": 18, "question": "\uc77c\uc744 \uc2dc\uc791\ud560 \ub54c \ub098\ub294 \uae30\ud55c\uc5d0 \ub9de\ucd94\uae30 \uc704\ud574 \uc2a4\ucf00\uc904\ubd80\ud130 \uc9e0\ub2e4.", "type": "J" }, { "count": 19, "question": "\ud300\uc73c\ub85c \uc9c4\ud589\ud558\ub294 \ud504\ub85c\uc81d\ud2b8 \uc77c\uc815\uc774 \uc7a1\ud788\uba74 \ubb34\uc0ac\ud788 \uc9c4\ud589\ub420 \uc9c0 \ub450\ub824\uc6cc\uc9c4\ub2e4.", "type": "I" }, { "count": 20, "question": "\ub0b4\uac00 \uc0c1\ub300\uc5d0\uac8c \uc88b\uc544\ud558\ub294 \uc74c\uc2dd\uc744 \ucd94\ucc9c\ud560 \ub54c, \ub098\ub294 \uc74c\uc2dd\uc5d0 \ub300\ud574 \uc790\uc138\ud558\uac8c \uc124\uba85\uc744 \ud574\uc900\ub2e4.", "type": "S" } ] })

//undefined
}




const toggleShowing = (doc)=>{
  if (doc.classList.contains('hidden')){
    doc.classList.remove('hidden');
    doc.classList.add('showing');
  }else{
    doc.classList.remove('showing');
    doc.classList.add('hidden');
  } 
}

let calcType= () =>{
  let result = new Array(3);
  let {I,E,S,N,J,P} = mbties;

  I > E ? result[0] = 'I' : result[0] = 'E';
  S > N ? result[1] = 'S' : result[1] = 'N';
  J > P ? result[2] = 'J' : result[2] = 'P';

  return result.join();

}


//POST type 
async function postType(type){
  // let result = JSON.stringify({result: type})
  let result = {result: type}
  const response = await fetch('/result',{
    method: 'POST',
    body: JSON.stringify(result)
  });
  return response.json();
  }




// 버튼 클릭시 form의 이벤트
function doSubmit(e) {
  e.preventDefault();
  // ex) quest = 'quest1'
  let now =localStorage.getItem('now');
  if (now <20){
    setQuest();
    
  }else{
    //TODO구현해야하는 부분 
    let resultArticle = document.getElementById('resultArticle');
    let testArticle = document.getElementById('testArticle');
    toggleShowing(resultArticle);
    toggleShowing(testArticle);
    
    //TODO
    let type = calcType();
    postType(type).then(data=>{ console.log(data)});


  }
}







function init() {
  // localstorage 초기화
  localStorage.clear();


  localStorage.setItem('now', 0 );

  //promise 로 
  getQuest().then((data)=>{
    let save = JSON.stringify(data.quest);    
    localStorage.setItem('quest', save);
    setQuest();
  })
  
}

init();

