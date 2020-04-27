let stTime = 0;
let endTime = 0;
let timerStart;

let min
let sec
let milisec

let startBtn = document.getElementById('testStartBtn')
let stopBtn = document.getElementById('testStopBtn')
let recordList = document.getElementById('testRecordList')

// startBtn 클릭을 했을 시, 시간이 레코딩됨.
startBtn.addEventListener('click', function() {
  if (this.innerText == 'RECORD' && milisec) {
    console.log(min, sec, milisec)

    let li = document.createElement('li')
    li.style.color = '#fff'
    li.innerText = `${min} : ${sec} : ${milisec}`
    if(! recordList.firstChild) {
      recordList.append(li)
    } else {
      recordList.insertBefore(li, recordList.firstChild)
    }
    return false;
  }
  this.innerText = 'RECORD'

  if(!stTime) {
    stTime = Date.now()
  } else {
    stopBtn.innerText = 'STOP'
    stTime += (Date.now() - endTime)
  }

  timerStart = setInterval(function() {
    let nowTime = new Date(Date.now() - stTime)

    min = addZero(nowTime.getMinutes())
    sec = addZero(nowTime.getSeconds())
    milisec = addZero(Math.floor(nowTime.getMilliseconds() / 10))

    document.getElementById('postTestMin').innerText = min
    document.getElementById('postTestSec').innerText = sec
    document.getElementById('postTestMilisec').innerText = milisec
  }, 100)
})

stopBtn.addEventListener('click', function() {
  if(timerStart) {
    clearInterval(timerStart)
  }
})

function addZero(num) {
  return (num < 10 ? '0' + num : '' + num)
}