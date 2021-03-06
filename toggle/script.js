// let toggleInit = (function() {
//   let status = true;

//   return function() {
//     if(status) {
//       document.querySelector('.txt').classList.add('show');
//     } else {
//       document.querySelector('.txt').classList.remove('show');
//     }
//   status = !status
//   }
// })();

// document.querySelector('.btn-tgl').addEventListener('click', toggleInit);


const toggleInit = (function () {
  let status = true;
  
  return function() {
    if(status) {
      document.querySelector('.txt').classList.add('show');
    } else {
      document.querySelector('.txt').classList.remove('show');
    }
    status = !status
  }
  
})();
document.querySelector('.btn-tgl').addEventListener('click', toggleInit);