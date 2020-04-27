// getElementsById() id가 일치하는 엘리먼트를 찾는다.
// getElementsByClassName() class가 일치하는 엘리먼트를 찾는다.
// getElementsByTagName() tag이름이 일치하는 엘리먼트를 찾는다.
// querySeletorAll() 셀렉터에 해당하는 엘리먼트를 찾는다.

// 컴퓨터 차례대로 시작한다.
// 사용자가 컴퓨터의 슛 버튼을 클릭한다.
// 컴퓨터는 2점슛을 쏠 지, 3점슛을 쏠 지 랜덤하게 결정
// 슛이 성공하면 컴퓨터의 점수를 올려준다.
// 사용자의 차례로 바꿔준다.
// 사용자가 2점슛 또는 3점슛 버튼ㅇ르 클릭한다.
// 슛이 성공 = 사용자 점수를 올려줌
// 컴퓨터의 차례로 바꿔주고 남은 슛 횟수를 1만큼 줄인다.
// 남은 슛 횟수가 0이 될때까지 1~8항목 반복.
// 양쪽의 점수를 비교해 승자를 정함.

// 컴퓨터의 슛 버튼 - 2점 또는 3점 슛 랜덤 결정
function onComputerShoot() {
  var comScore = 0;
  console.log('함수 안', comScore);
  var textElem = document.getElementById('text')

  var shootType = Math.random() < 0.5 ? 2 : 3;
  // const shootType;

  // if(Math.random() < 0.5) {
  //     shootType = 2;
  // } else {
  //   shootType = 3;
  // }
  if (shootType === 2) {
    if(Math.random() < 0.5) {
      textElem.innerHTML = '컴퓨터가 2점슛을 성공시켰습니다.';

      comScore += 2;

      var comScoreElem = document.getElementById('computerScore');
      comScoreElem.innerHTML = comScore;

    } else {
      textElem.innerHTML = '컴퓨터가 2점슛을 실패했습니다.'
    }
  } else {
    if(Math.random() < 0.33) {
      textElem.innerHTML = '컴퓨터가 3점슛을 성공시켰습니다.';
    } else {
      textElem.innerHTML = '컴퓨터가 3점슛을 실패했습니다.';
    }
  }
}

onComputerShoot();
console.log('함수 밖', comScore);