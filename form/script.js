const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

// 에러 메시지를 input에 보여주는 함수
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';

  const small = formControl.querySelector('small');
  small.innerText = message;
}

// 성공하면 보여줌.
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// 이메일 값 체크
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, '이메일 형식이 맞지 않습니다.');
  }
}

// 필드 체크
function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if(input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input)
    }
  });
}

// input에 갯수 체크
function checkLength(input, min, max) {
  if(input.value.length < min) {
    showError(input, `${getFieldName(input)} 패스워드가 ${min}자리 입니다. `);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} 패스워드가 ${max}자리 입니다. `);
  } else {
    showSuccess(input);
  }
}

// 패스워드가 password와 password2가 매치됐을 때
function checkPasswordMatch(input1, input2) {
  if(input1.value !== input2.value) {
    showError(input2, '패스워드가 맞지 않습니다.');
  }
}

// 
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// event listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 8, 25);
  checkEmail(email);
  checkPasswordMatch(password, password2);
});


// const form = document.getElementById('form')
// const username = document.getElementById('username')
// const email = document.getElementById('email')
// const password = document.getElementById('password')
// const password2 = document.getElementById('password2')

// // 에러 메시지를 input에 보여주는 함수
// function showError (input, message) {
//   const formControl = input.parentElement;
//   formControl.className = 'form-control error';
//   const small = formControl.querySelector('small');
//   small.innerText = message;
// }

// // 성공하면 보여줌.
// function showSuccess (input) {
//   const formControl = input.parentElement;
//   formControl.className = 'form-control success';
// }

// // 이메일 값 체크
// function checkEmail (input) {
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//   if (re.value(input.value.trim())) {
//     showSuccess(input);
//   } else {
//     showError(input, '이메일 형식이 맞지 않습니다.');
//   }
// }

// // 필드 값 체크
// function checkRequired(inputArr) {
//   inputArr.forEach(function(input) {
//     if(input.value.trim() === '') {
//       showError(input, `${getFieldName(input)} 이 비어있습니다.`);
//     } else {
//       showSuccess(input)
//     }
//   });
// }

// // input에 갯수 체크
// function checkLength(input, min, max) {
//   if(input.value.length < min) {
//     showError(input, `${getFieldName(input)} 패스워드가 ${min}자리 입니다.`);
//   } else(input.value.length > max) {
//     showError(input, `${getFieldName(input)} 패스워드가 ${max}자리 입니다`);
//   } else {
//     showSuccess(input);
//   }
// }

// // 패스워드가 password와 password2의 매치
// function checkPasswordMatch(input, input2) {
//   if(input1.value !== input2.value) {
//     showError(input2, '패스워드가 맞지 않습니다.');
//   } else {
//     showSuccess(input2);
//   }
// }

// // 필드에서 대문자 및 케이스
// function getFieldName(input) {
//   return input.id.charAt(0).toUpperCase() + input.id.substring(1);
// }

// // 이벤트 리스널
// form.addEventListener('submit', function(e) {
  
//   checkRequired([username, email, password, password2]);
//   checkLength(username, 3, 15);
//   checkLength(password, 8, 15);
//   checkEmail(email);
//   checkPasswordMatch(password, password2);
// });
// e.preventDefault();

