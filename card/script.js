const cardImg = document.querySelectorAll('.cardImg')
const contentTxt = document.querySelectorAll('.contentTxt')
const btn = document.querySelectorAll('button')

for (let i = 0; i < cardImg.length; i++) {
  cardImg[i].addEventListener('click', function() {
    for (let i = 0; i < contentTxt.length; i++) {
      contentTxt[i].className = 'contentTxt';
    }
    document.getElementById(this.dataset.id).className = 'contentTxt active';

    for (let i = 0; i < cardImg.length; i++) {
      cardImg[i].className = 'cardImg'
    }
    this.className = 'cardImg active'
  })
}

btn.forEach(buttons => {
  buttons.addEventListener('mouseover', function(e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement('span')
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples);

    setTimeout(() => {
      ripples.remove()
    }, 1000);
  })
})