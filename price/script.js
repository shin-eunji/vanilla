document.querySelector('#price').focus();

document.querySelector('#calBtn').addEventListener('click', function() {
  let originPrice = document.querySelector('#price').value;
  let discountRate = document.querySelector('#rate').value;

  if(!originPrice || !discountRate) {
    alert('다시 입력해주세요.');
    document.querySelector('#price').focus();
  } else {
    let discounted = Math.round(originPrice * (discountRate / 100));
    let newPrice = originPrice - discounted;

    document.querySelector('#resultBox').innerText = originPrice + ' 원 에서 ' + discounted + ' 원 할인되어 ' + newPrice + ' 원 입니다.' 
  }
})

document.getElementById('price').addEventListener('keyup', function(event) {
  this.value = this.value.replace(/^[0]|[^0-9, ]/g, '') // replace(/^[0]|[^0-9,]/g, '')
})

function insert(num) {
  if(num.length <= 3) {
    return num;
  }

  let count = Math.ceil(num.length / 3);

  let newNum = [];
  for(let i = 0; i < count; i++) {
    newNum.unshift(num.slice(-3 * (i + 1), num.length - (3 * i)));
  }
  return newNum.join(',');
}