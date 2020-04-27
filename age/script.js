document.querySelector('#ageBtn').addEventListener('click', function() {
  let birthYear = document.querySelector('#userYear').value;

  if(!birthYear) { // 연도를 입력하지 않았을 경우.
    alert('태어난 연도를 입력하세요.');
    document.querySelector('#userYear').focus();
  } else {
    let today = new Date();
    let nowYear = today.getFullYear(); // 현재 연도 4자리 
    let age = nowYear - birthYear + 1;

    document.querySelector('#resultBox span').innerText = age; // 나이를 document dom에 넣어라.
  }
});