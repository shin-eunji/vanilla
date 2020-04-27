const $input = document.querySelector('input[type=text');
const $msg = document.querySelector('.message');

$input.onkeyup = e => {
  if (e.onkeyup !== 13) return;

  $msg.textContent = e.target.value;
  e.target.value = '';
};