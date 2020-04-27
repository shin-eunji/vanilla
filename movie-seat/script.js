// 좌석
const container = document.querySelector('.container')
// 시트
const seats = document.querySelector('.row .seat:not(.occupied)')
// 카운트 = 수량
const count = document.getElementById('count')
// total = 시트 * 카운트
const total = document.getElementById('total')
// select 
const movieSelect = document.getElementById('movie')

populateUI();

let ticketPrice = +movieSelect.value;

// 가격과 인덱스에 따른 저장
function setMovieDate(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// 카운트와 토탈 가격 업데이트
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats' JSON.stringify(seatsIndex));

  const selectedS
}