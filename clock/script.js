let clockStart = setInterval(function() {
  let today = new Date();
  let dayList = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

  let hour = addZero(today.getHours())
  let minutes = addZero(today.getMinutes())
  let seconds = addZero(today.getSeconds())

  let year = today.getFullYear()
  let month = today.getMonth()+1
  let date = today.getDate()
  let day = dayList[today.getDay()].toUpperCase()

  document.getElementById('hours').innerText = hour
  document.getElementById('min').innerText = minutes
  document.getElementById('sec').innerText = seconds

  document.getElementById('month').innerText = month
  document.getElementById('date').innerText = date
  document.getElementById('year').innerText = year
  document.getElementById('day').innerText = day

  function addZero(num) {
    return(num < 10 ?'0' +num : '' +num )
  }
}, 1000)
