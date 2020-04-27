var eventTarget = document.getElementsByClassName('btn_delete')
for (var i=0; i<eventTarget.length; i++) {
  eventTarget[i].addEventListener('click', function() {
    var parent = document.querySelector('#list tbody')
    if ( i > 1 ) {
      parent.removeChild(this.parentElement.parentElement)
      i --
    } else {
      alert('마지막 행은 삭제 불가합니다.')
    }
  })
}