const form = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')

// 에러 message
function showError(input, message) {
  const loginControl = input.parentElement;
  loginControl.className = 'form-control error';

  const small = loginControl.querySelector('small')
  small.innerText = message;
}

// 성공 message
function showSuccess(input) {
  const loginControl = input.parentElement;
  loginControl.className = 'form-control success';
}

// 이메일 형식으로 적었을 때
function checkEmail(input) {
  const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, '이메일 형식이 맞지 않습니다.')
  }
}

function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if(input.value.trim() === '') {
      showError(input, `${getFieldName(input)}는 틀립니다.`)
    } else {
      showSuccess(input)
    }
  });
}


// 패스워드가 8자리 이상 15자리 이하로 적었을 때
function checkLength(input, min, max) {
  if(input.value.length < min) {
    showError(input, `${getFieldName(input)} 패스워드가 ${min}자리 입니다. `);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} 패스워드가 ${max}자리 입니다. `);
  } else {
    showSuccess(input);
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// submit 전송 defalut
loginWrap.addEventListener('submit', function(e) {
  e.preventDefault();

  checkRequired([email, password]);
  checkEmail(email);
  checkLength(password, 8, 25)
})
