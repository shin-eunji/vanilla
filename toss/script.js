const cardWrap = document.querySelectorAll('li')
const title = document.querySelectorAll('.title')

for (let i = 0; i < cardWrap.length; i++) {
  cardWrap[i].addEventListener('click', function() {
    for(let i = 0; i < title.length; i++) {
      title[i].className = 'title'
    }
    document.getElementById(this.dataset.id).className = 'cardWrap active';

    for (let i = 0; i < cardWrap.length; i++) {
      cardWrap[i].className = 'li'
    }
    this.className = 'cardWrap active'
  })
}