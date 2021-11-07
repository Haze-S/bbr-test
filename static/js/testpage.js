// last: 2021.11.2.23:12
// Team: FogNerdCross

// 퀘스트를 받아오는 문장

// 퀘스트 문제를 파라미터로 받아서 돔 안에 텍스트를 바꿔주기 위함
function changeQuest(quest) {
  //TODO quest의 내용을 서버에서 받아오기때문에, 어떻게 바뀔지는 기다려 보아야 함
  let headContainer = document.getElementById("js-questText");
  let btnlist = document.getElementsByClassName("js-test-form_btn");
  // ex) Q1. 친구와 여행을 갔다. 배가고픈 당신? 당신이 향한곳은?
  headContainer.innerText = quest.quest;
  // 각 버튼의 innerText로 들어갈 내용들 -> 이건 삭제되어야 함

  let savetype = () => {
    let mbties = JSON.parse(localStorage.getItem("types"));
    // 타입을 저장시키는 함수를 구현해야합니다
    for (let mbti in mbties) {
      if (quest.type == mbti) {
        mbtites.mbti += 1;
        localStorage.setItem("types", JSON.stringify(mbties));
        break;
      }
    }
  };
  savetype();
  for (let i = 0; i < 3; i++) {
    // btn클래스 -> 각 버튼의 이름을 quest.count로 설정
    btnlist[i].name = quest.count;
  }
}

// testBtnClick 클릭 시 응답결과를 저장하기 위함
function saveResult(name, value) {
  if (localStorage.getItem("result") === null) {
    let answer = { [name]: value };
    let answerJson = JSON.stringify(answer);
    localStorage.setItem("result", answerJson);
  } else {
    let answer = JSON.parse(localStorage.getItem("result"));
    console.log(answer);
    answer[name] = value;
    let answerJson = JSON.stringify(answer);
    localStorage.setItem("result", answerJson);
  }
}

// testBtnClick(e)과 doSubmit(e)는
// 질문의 버튼을 클릭시 발생한다.
// btnclick=은 btn의 클릭이벤트
// doSubmit은 form의 submit이벤트이다.

// 버튼 클릭시 button의 이벤트
function testBtnClick(e) {
  // 버튼의 {이름:value}객체를 localstorage에 저장하는 함수
  saveResult(e.target.name, e.target.value);

  // TODO:
}

// 버튼 클릭시 form의 이벤트
function doSubmit(e) {
  e.preventDefault();
  // ex) quest = 'quest1'
  let quest = e.submitter.name;
  // 임시로 적어놓은 코드
  let next = parseInt(quest.replace("quest", "")) + 1;
  // fetch 통신 quest.json받아오기
  fetch("quest.json").then((response) =>
    response.json().then((data) => {
      //data => {quest1:{}, quest2:{} 타입으로 }
      // TODO []여기에 변수명 적어서 접근이 안됨 해결해야함
      for (let key in data) {
        // console.log(data[key])
        if (key == next) {
          console.log(key);

          changeQuest(data[key]);
        }
      }
    })
  );
}

function init() {

  let initialMbties = { E: 0, I: 0, " J": 0, " P": 0, T: 0, F: 0 };
  localStorage.setItem("types", JSON.stringify(initialMbties));
  fetch("quest.json").then((response) =>
    response.json().then((data) => {
      //data => {quest1:{}, quest2:{} 타입으로 }
      // TODO []여기에 변수명 적어서 접근이 안됨 해결해야함
      changeQuest(data[1]);
    })
  );
}

init();
